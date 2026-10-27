import { describe, expect, it } from "vitest";
import indexHtml from "../index.html?raw";
import {
  academics,
  certifications,
  experiences,
  experienceYears,
  languages,
  profile,
  projects,
  skillGroups,
  socials,
  volunteering,
} from "./content";

describe("content", () => {
  it("gives every experience a unique, URL-safe slug", () => {
    const slugs = experiences.map((e) => e.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });

  it("gives every experience at least one position with bullets", () => {
    for (const exp of experiences) {
      expect(exp.positions.length, exp.slug).toBeGreaterThan(0);
      for (const pos of exp.positions) {
        expect(pos.title, exp.slug).not.toBe("");
        expect(pos.period, exp.slug).not.toBe("");
        expect(pos.bullets.length, `${exp.slug}: ${pos.title}`).toBeGreaterThan(
          0,
        );
      }
    }
  });

  it("uses a valid background curve variant for every experience", () => {
    for (const exp of experiences) {
      expect(exp.curves).toBeGreaterThanOrEqual(1);
      expect(exp.curves).toBeLessThanOrEqual(8);
    }
  });

  it("has no empty or duplicated skills within a group", () => {
    for (const group of skillGroups) {
      expect(group.skills.length, group.title).toBeGreaterThan(0);
      expect(new Set(group.skills).size, group.title).toBe(group.skills.length);
    }
  });

  it("lists the certifications and languages from the CV", () => {
    expect(certifications.map((c) => c.title)).toEqual(
      expect.arrayContaining([
        "Azure Administrator Associate",
        "ITIL 4 Foundation",
      ]),
    );
    expect(languages.length).toBeGreaterThan(0);
  });

  it("only links to https URLs", () => {
    const hrefs = [
      ...socials.map((s) => s.href),
      ...academics.flatMap((a) => (a.link ? [a.link.href] : [])),
      ...volunteering.flatMap((v) => (v.link ? [v.link.href] : [])),
      ...projects.flatMap((p) => (p.links ?? []).map((l) => l.href)),
    ];
    for (const href of hrefs) expect(href).toMatch(/^https:\/\//);
  });

  it("keeps the structured data in index.html in sync", () => {
    const json = indexHtml.match(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
    )?.[1];
    expect(json).toBeDefined();
    const person = JSON.parse(json!);
    expect(person.name).toBe(profile.name);
    expect(person.sameAs).toEqual(socials.map((s) => s.href));
    expect(person.knowsLanguage).toEqual(languages.map((l) => l.language));
    expect(person.jobTitle).toBe(experiences[0].tileTitle);
  });

  it("formats experience year ranges", () => {
    const bySlug = Object.fromEntries(experiences.map((e) => [e.slug, e]));
    expect(experienceYears(bySlug["senec-cloud-operator"])).toBe("2026 - now");
    expect(experienceYears(bySlug["future-ready"])).toBe("2020 - 2023");
    expect(experienceYears(bySlug["sintef"])).toBe("2020");
  });

  // Owner's decision: the site reflects his GitHub profile as well as the
  // CV, so its two featured open-source projects stay prominent.
  it("features the owner's open-source projects", () => {
    const intro = profile.welcome.join(" ");
    for (const name of ["Minnumst", "recipify"]) {
      const p = projects.find((p) => p.title.startsWith(name));
      expect(p?.personal && p.featured && p.flow, name).toBeTruthy();
      expect(intro).toContain(name);
    }
  });

  it("names every language in the introduction", () => {
    const intro = profile.welcome.join(" ");
    expect(intro).toContain("four languages");
    expect(languages).toHaveLength(4);
    for (const l of languages) expect(intro).toContain(l.language);
  });
});
