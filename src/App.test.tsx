import { fireEvent, screen, within } from "@testing-library/preact";
import { describe, expect, it, vi } from "vitest";
import {
  certifications,
  experiences,
  highlights,
  profile,
  projects,
  skillGroups,
} from "./content";
import { renderAt } from "./test/renderAt";

describe("home page", () => {
  it("renders the welcome section", () => {
    renderAt("/");
    expect(
      screen.getByRole("heading", { level: 1, name: `${profile.greeting},` }),
    ).toBeInTheDocument();
    expect(screen.getByAltText(`Portrait of ${profile.name}`)).toBeVisible();
  });

  it("shows the headline and key figures", () => {
    renderAt("/");
    expect(screen.getAllByText(profile.headline)[0]).toBeInTheDocument();
    for (const h of highlights) {
      expect(screen.getByText(h.label)).toBeInTheDocument();
    }
  });

  it("links a tile to every experience page", () => {
    renderAt("/");
    for (const exp of experiences) {
      const link = screen
        .getAllByRole("link")
        .find((a) => a.getAttribute("href") === `/experience/${exp.slug}`);
      expect(link, exp.slug).toBeDefined();
      expect(link).toHaveTextContent(exp.tileTitle);
    }
  });

  it("shows every selected-work project", () => {
    renderAt("/");
    for (const p of projects) {
      expect(
        screen.getByRole("heading", { name: p.title }),
      ).toBeInTheDocument();
    }
    for (const p of projects.filter((p) => p.flow)) {
      expect(
        screen.getByRole("list", { name: `${p.title}: how it fits together` }),
      ).toBeInTheDocument();
    }
  });

  it("shows every skill group and certification", () => {
    renderAt("/");
    for (const group of skillGroups) {
      expect(
        screen.getByRole("heading", { name: group.title }),
      ).toBeInTheDocument();
    }
    for (const cert of certifications) {
      expect(screen.getByText(cert.title)).toBeInTheDocument();
    }
  });
});

describe("experience pages", () => {
  it.each(experiences.map((e) => [e.slug, e] as const))(
    "renders %s with all positions and bullets",
    (slug, exp) => {
      renderAt(`/experience/${slug}`);
      for (const pos of exp.positions) {
        expect(
          screen.getByRole("heading", { name: pos.title }),
        ).toBeInTheDocument();
        for (const bullet of pos.bullets) {
          expect(screen.getByText(bullet)).toBeInTheDocument();
        }
      }
      const tags = screen.getByRole("list", { name: "Technologies" });
      expect(within(tags).getAllByRole("listitem")).toHaveLength(
        exp.tags.length,
      );
    },
  );

  it("links back to the experience section of the home page", () => {
    renderAt("/experience/sintef");
    vi.mocked(Element.prototype.scrollIntoView).mockClear();
    fireEvent.click(screen.getByRole("link", { name: /all roles/i }));
    expect(
      screen.getByRole("heading", { level: 1, name: `${profile.greeting},` }),
    ).toBeInTheDocument();
    expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
  });

  it("redirects old top-level URLs to the new experience pages", () => {
    renderAt("/senec");
    expect(
      screen.getByRole("heading", { level: 1, name: "Software Developer" }),
    ).toBeInTheDocument();
  });

  it("redirects unknown experiences to the home page", () => {
    renderAt("/experience/does-not-exist");
    expect(
      screen.getByRole("heading", { level: 1, name: `${profile.greeting},` }),
    ).toBeInTheDocument();
  });
});

describe("project pages", () => {
  const withPages = projects.filter((p) => p.page);

  it("gives Minnumst and recipify their own pages", () => {
    expect(withPages.map((p) => p.page?.slug)).toEqual([
      "minnumst",
      "recipify",
    ]);
  });

  it.each(withPages.map((p) => [p.page!.slug, p] as const))(
    "renders %s with its figures, sections and links",
    (slug, project) => {
      renderAt(`/project/${slug}`);
      expect(
        screen.getByRole("heading", { level: 1, name: project.title }),
      ).toBeInTheDocument();
      for (const f of project.page!.figures) {
        expect(screen.getByText(f.label)).toBeInTheDocument();
      }
      for (const part of project.page!.sections) {
        expect(
          screen.getByRole("heading", { level: 2, name: part.title }),
        ).toBeInTheDocument();
      }
      for (const l of project.links ?? []) {
        expect(
          screen.getByRole("link", { name: `${l.label} ↗` }),
        ).toHaveAttribute("href", l.href);
      }
      expect(screen.getByAltText(project.image!.alt)).toBeInTheDocument();
    },
  );

  it("is linked from its card and from the hero", () => {
    renderAt("/");
    for (const p of withPages) {
      const href = `/project/${p.page!.slug}`;
      const links = screen
        .getAllByRole("link")
        .filter((a) => a.getAttribute("href") === href);
      // "Read the full story" on the card, and the name in the hero intro.
      expect(links.length, href).toBe(2);
    }
  });

  it("links back to the Selected Work section", () => {
    renderAt("/project/recipify");
    vi.mocked(Element.prototype.scrollIntoView).mockClear();
    fireEvent.click(screen.getByRole("link", { name: /selected work/i }));
    expect(
      screen.getByRole("heading", { name: "Selected Work" }),
    ).toBeVisible();
    expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
  });

  it("redirects unknown projects to the home page", () => {
    renderAt("/project/does-not-exist");
    expect(
      screen.getByRole("heading", { level: 1, name: `${profile.greeting},` }),
    ).toBeInTheDocument();
  });
});

describe("top navigation", () => {
  it("opens the home page at a section from another page", () => {
    renderAt("/about");
    vi.mocked(Element.prototype.scrollIntoView).mockClear();
    fireEvent.click(screen.getByRole("link", { name: "Work" }));
    expect(
      screen.getByRole("heading", { name: "Selected Work" }),
    ).toBeVisible();
    expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
  });

  it("scrolls to a section when already home", () => {
    renderAt("/");
    vi.mocked(Element.prototype.scrollIntoView).mockClear();
    fireEvent.click(screen.getByRole("link", { name: "Experience" }));
    expect(Element.prototype.scrollIntoView).toHaveBeenCalledWith(
      expect.objectContaining({ behavior: expect.any(String) }),
    );
  });
});

describe("about page", () => {
  it("shows contact details as links", () => {
    renderAt("/about");
    const emails = screen.getAllByRole("link", { name: profile.email });
    // Contact card plus the site footer.
    expect(emails).toHaveLength(2);
    for (const link of emails) {
      expect(link).toHaveAttribute("href", `mailto:${profile.email}`);
    }
    expect(screen.getByRole("link", { name: profile.phone })).toHaveAttribute(
      "href",
      "tel:+491796047257",
    );
  });
});

describe("CV download", () => {
  // The PDF the buttons point at must exist in public/.
  const pdfs = import.meta.glob("../public/cv/*.pdf", {
    query: "?url",
    import: "default",
  });

  it("ships the CV PDF that the buttons link to", () => {
    const file = profile.cvUrl.split("/").pop();
    expect(Object.keys(pdfs).map((p) => p.split("/").pop())).toContain(file);
  });

  it.each(["/", "/about"])("offers a Download CV link on %s", (path) => {
    renderAt(path);
    const link = screen.getByRole("link", { name: /download cv/i });
    expect(link).toHaveAttribute("href", profile.cvUrl);
    expect(link).toHaveAttribute("download");
  });
});

describe("navigation", () => {
  it("labels external icon links and opens them safely", () => {
    renderAt("/");
    for (const name of ["GitHub", "LinkedIn", "Stack Overflow"]) {
      const link = screen.getAllByRole("link", { name })[0];
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });
});
