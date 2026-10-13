import { fireEvent, screen, within } from "@testing-library/preact";
import { describe, expect, it, vi } from "vitest";
import {
  certifications,
  experiences,
  highlights,
  profile,
  skillGroups,
} from "./content";
import { renderAt } from "./test/renderAt";

describe("home page", () => {
  it("renders the welcome section", () => {
    renderAt("/");
    expect(
      screen.getByRole("heading", { level: 1, name: `${profile.greeting}.` }),
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
      screen.getByRole("heading", { level: 1, name: `${profile.greeting}.` }),
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
      screen.getByRole("heading", { level: 1, name: `${profile.greeting}.` }),
    ).toBeInTheDocument();
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
