import { screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { certifications, experiences, profile, skillGroups } from "./content";
import { renderAt } from "./test/renderAt";

describe("home page", () => {
  it("renders the welcome section", () => {
    renderAt("/");
    expect(
      screen.getByRole("heading", { level: 1, name: "Welcome." }),
    ).toBeInTheDocument();
    expect(screen.getByAltText(`Portrait of ${profile.name}`)).toBeVisible();
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

  it("redirects old top-level URLs to the new experience pages", () => {
    renderAt("/senec");
    expect(
      screen.getByRole("heading", { level: 1, name: "Software Developer" }),
    ).toBeInTheDocument();
  });

  it("redirects unknown experiences to the home page", () => {
    renderAt("/experience/does-not-exist");
    expect(
      screen.getByRole("heading", { level: 1, name: "Welcome." }),
    ).toBeInTheDocument();
  });
});

describe("about page", () => {
  it("shows contact details as links", () => {
    renderAt("/about");
    expect(screen.getByRole("link", { name: profile.email })).toHaveAttribute(
      "href",
      `mailto:${profile.email}`,
    );
    expect(screen.getByRole("link", { name: profile.phone })).toHaveAttribute(
      "href",
      "tel:+491796047257",
    );
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
