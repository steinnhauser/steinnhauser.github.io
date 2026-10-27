// Keeps the website honest to the CV (docs/cv/cv.md). Every role, date,
// certification, language and degree shown on the site must appear in the
// CV. If one of these fails, update the CV or the site so they agree.
import { describe, expect, it } from "vitest";
import cv from "../docs/cv/cv.md?raw";
import {
  academics,
  certifications,
  coreSkills,
  experiences,
  highlights,
  languages,
  projects,
  volunteering,
} from "./content";

// On the site by the owner's choice, though no longer on the CV.
const NOT_ON_CV = new Set(["sintef"]);

const text = cv.toLowerCase();
const onCv = (fact: string) => text.includes(fact.toLowerCase());

describe("site content matches the CV", () => {
  it.each(experiences.filter((e) => !NOT_ON_CV.has(e.slug)))(
    "lists $slug with the CV's titles and dates",
    (exp) => {
      for (const pos of exp.positions) {
        expect(onCv(`### ${pos.title}, `), pos.title).toBe(true);
        expect(onCv(pos.period), `${pos.title}: ${pos.period}`).toBe(true);
      }
    },
  );

  it("lists the CV's certifications", () => {
    for (const c of certifications) expect(onCv(c.title), c.title).toBe(true);
  });

  it("highlights exactly the CV's advanced technologies as core", () => {
    const advanced = cv
      .match(/Advanced:[ \t]*([^\n]*(?:\n[ \t]+[^\n]+)*)/)?.[1]
      .split(",")
      .map((t) => t.trim());
    expect([...coreSkills].sort()).toEqual(advanced?.sort());
  });

  it("lists the CV's languages and levels", () => {
    for (const l of languages) {
      expect(onCv(`${l.language} (${l.level})`), l.language).toBe(true);
    }
  });

  it("lists the CV's degrees with their dates", () => {
    for (const a of academics.filter((a) => a.title !== "Publication")) {
      const title = a.title.replace(/\s*\(.*\)$/, "");
      expect(onCv(`### ${title}`), a.title).toBe(true);
      expect(onCv(a.period), `${a.title}: ${a.period}`).toBe(true);
    }
  });

  it("links the publication and open-source work cited in the CV", () => {
    const links = [...academics, ...volunteering].flatMap((x) =>
      x.link ? [x.link.href] : [],
    );
    for (const href of links) expect(onCv(href), href).toBe(true);
  });

  // Personal projects aren't on the CV; they may only link to the owner's
  // own repositories and site. Everything else must be cited in the CV.
  it("links selected work to the CV or the owner's own repositories", () => {
    const own = /^https:\/\/(github\.com\/steinnhauser\/|steinnhm\.com\/)/;
    for (const p of projects) {
      for (const { href } of p.links ?? []) {
        expect(onCv(href) || own.test(href), `${p.title}: ${href}`).toBe(true);
      }
    }
    for (const p of projects.filter((p) => !p.personal)) {
      expect(
        (p.links ?? []).some((l) => onCv(l.href)) || p.featured,
        `${p.title} cites the CV`,
      ).toBe(true);
    }
  });

  it("describes selected work with the CV's own technologies", () => {
    const platform = projects.find((p) => p.featured && !p.personal);
    expect(platform).toBeDefined();
    for (const term of ["aptly", "mTLS", "golang", "API gateway", "WireGuard"])
      expect(onCv(term), term).toBe(true);
  });

  it("lists the CV's volunteer roles with their dates", () => {
    for (const v of volunteering) {
      expect(onCv(`### ${v.title}, ${v.organization}`), v.title).toBe(true);
      expect(onCv(v.period), `${v.title}: ${v.period}`).toBe(true);
    }
  });

  it("backs every key figure with the CV", () => {
    const byValue = Object.fromEntries(highlights.map((h) => [h.value, h]));
    // "6+ years": the first professional role on the CV started in 2020.
    expect(onCv("February 2020")).toBe(true);
    expect(new Date().getFullYear() - 2020).toBeGreaterThanOrEqual(6);
    expect(byValue["50+"] && onCv("50+ Ansible-managed servers")).toBe(true);
    expect(byValue["MSc"] && onCv("Grade: A")).toBe(true);
  });
});
