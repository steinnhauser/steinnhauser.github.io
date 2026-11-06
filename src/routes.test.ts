// Every URL the site has, and every URL it used to have, leads to a page.
import { describe, expect, it } from "vitest";
import { experiences, profile, projects } from "./content";
import { clip, pageMeta } from "./meta";
import { routes } from "./prerender";
import {
  legacyHashPath,
  pagePaths,
  paths,
  projectPages,
  redirects,
  SITE_URL,
} from "./routes";

describe("pages", () => {
  it("pre-renders every experience and project page, About and 404", () => {
    expect(pagePaths).toContain(paths.home);
    expect(pagePaths).toContain(paths.about);
    for (const e of experiences)
      expect(pagePaths).toContain(paths.experience(e.slug));
    for (const p of projects.filter((p) => p.page))
      expect(pagePaths).toContain(paths.project(p.page!.slug));
    expect(routes).toEqual([...pagePaths, paths.notFound]);
    expect(new Set(pagePaths).size).toBe(pagePaths.length);
  });

  it("redirects only to pages and sections that exist", () => {
    for (const [from, to] of Object.entries(redirects)) {
      const [path, section] = to.split("#");
      expect(pagePaths, `${from} -> ${to}`).toContain(path);
      if (section) expect(["experience", "work"]).toContain(section);
    }
  });

  it("links content text only to pages that exist", () => {
    const text = [...profile.welcome, ...profile.about].join(" ");
    for (const [, path] of text.matchAll(/\]\((\/[^)]*)\)/g))
      expect(pagePaths, path).toContain(path);
  });
});

describe("old hash URLs", () => {
  it.each([
    ["#/about", "/about"],
    ["#/", "/"],
    ["#/senec", paths.experience("senec-software-developer")],
    ["#/experience/uio", paths.experience("uio")],
    [
      "#/experience/future-ready",
      paths.experience("future-ready-senior-data-scientist"),
    ],
    ["#/project/minnumst", paths.project("minnumst")],
  ])("%s becomes %s", (hash, path) => {
    expect(legacyHashPath(hash)).toBe(path);
  });

  it("leaves section anchors and empty hashes alone", () => {
    expect(legacyHashPath("#work")).toBeNull();
    expect(legacyHashPath("")).toBeNull();
  });
});

describe("page titles and descriptions", () => {
  const metas = pagePaths.map((path) => [path, pageMeta(path)] as const);

  it("gives every page its own title and description", () => {
    expect(new Set(metas.map(([, m]) => m.title)).size).toBe(metas.length);
    expect(new Set(metas.map(([, m]) => m.description)).size).toBe(
      metas.length,
    );
  });

  it.each(metas)(
    "%s has a canonical URL and a short description",
    (path, m) => {
      expect(m.canonical).toBe(path === "/" ? `${SITE_URL}/` : SITE_URL + path);
      expect(m.title).toContain(profile.name);
      expect(m.description.length).toBeGreaterThan(50);
      expect(m.description.length).toBeLessThanOrEqual(156);
    },
  );

  it("keeps the not-found page out of search results", () => {
    expect(pageMeta("/nope").canonical).toBeUndefined();
  });

  it("names the project on its page", () => {
    for (const p of projectPages)
      expect(pageMeta(paths.project(p.page.slug)).title).toMatch(
        new RegExp(`^${p.title.split(":")[0]} · `),
      );
  });

  it("clips long text at a word", () => {
    expect(clip("short")).toBe("short");
    const long = clip("word ".repeat(60));
    expect(long.length).toBeLessThanOrEqual(156);
    expect(long).toMatch(/word…$/);
  });
});
