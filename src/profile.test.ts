// Keeps the website in step with the owner's GitHub profile README (the
// sibling `steinnhauser` repository). The profile is a second source for
// the site, next to the CV. It only exists on the owner's machine, so this
// file is skipped in CI and runs locally with `make validate`.
import { describe, expect, inject, it } from "vitest";
import { certifications, projects, skillGroups } from "./content";
// Declares the provided "profileReadme" (read in scripts/profile-readme.ts).
import type {} from "../scripts/profile-readme";

const readme = inject("profileReadme");

// The text of one "**Heading**" block, up to the next heading or rule.
function block(heading: string): string {
  const start = readme.indexOf(`**${heading}**`);
  if (start === -1) return "";
  const rest = readme.slice(start + heading.length + 4);
  const end = rest.search(/\n\*\*|\n---/);
  return end === -1 ? rest : rest.slice(0, end);
}

const links = (text: string) =>
  [...text.matchAll(/\]\((https:\/\/[^)\s]+)\)/g)].map((m) => m[1]);

// Same URL whether or not it ends in a slash.
const norm = (url: string) => url.replace(/\/$/, "");

describe.skipIf(!readme)("site matches the GitHub profile", () => {
  it("shows every tool from the profile's tools table", () => {
    const rows = block("Tools I use most")
      .split("\n")
      .filter((line) => line.startsWith("|") && !line.includes("---"))
      .slice(1); // header row
    const tools = rows.flatMap((row) =>
      row
        .split("|")[2]
        .split(/ · | \/ /)
        .map((t) => t.trim()),
    );
    expect(tools.length).toBeGreaterThan(0);
    const shown = skillGroups.flatMap((g) => g.skills);
    for (const tool of tools) expect(shown, tool).toContain(tool);
  });

  it("features every featured project, linked to its repository", () => {
    const featured = links(block("Featured projects")).filter((url) =>
      url.startsWith("https://github.com/steinnhauser/"),
    );
    expect(featured.length).toBeGreaterThan(0);
    for (const repo of new Set(featured)) {
      const project = projects.find((p) =>
        p.links?.some((l) => norm(l.href) === norm(repo)),
      );
      expect(project?.featured, repo).toBe(true);
    }
  });

  it("links the research and open-source work", () => {
    const shown = projects.flatMap((p) => p.links ?? []).map((l) => l.href);
    for (const url of links(block("Research & open source"))) {
      expect(shown.map(norm), url).toContain(norm(url));
    }
  });

  it("lists the profile's certifications", () => {
    const certs = block("Certifications");
    for (const c of certifications) expect(certs, c.code).toContain(c.code);
  });
});
