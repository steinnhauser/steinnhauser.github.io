// Every URL of the site in one place: the links between pages, the pages
// that are pre-rendered at build time, and the redirects that keep old
// links working. Pages are plain paths (steinnhm.com/about); the hash is
// only used for sections of the home page (steinnhm.com/#work).
import { experiences, projects } from "./content";

export const SITE_URL = "https://steinnhm.com";

// The home page sections that links can point at.
export type SectionId = "experience" | "work" | "skills" | "education";

export const paths = {
  home: "/",
  about: "/about",
  section: (id: SectionId) => `/#${id}`,
  experience: (slug: string) => `/experience/${slug}`,
  project: (slug: string) => `/projects/${slug}`,
  // GitHub Pages serves 404.html for any path it doesn't know.
  notFound: "/404",
};

// Projects that have their own page, in Selected Work order.
export const projectPages = projects.flatMap((p) =>
  p.page ? [{ ...p, page: p.page }] : [],
);

// Every page that exists, in the order of the sitemap.
export const pagePaths = [
  paths.home,
  ...experiences.map((e) => paths.experience(e.slug)),
  ...projectPages.map((p) => paths.project(p.page.slug)),
  paths.about,
];

// Old URLs and where they live now. The keys are paths as the router sees
// them, after legacyHashPath() has turned "#/senec" into "/senec".
export const redirects: Record<string, string> = {
  // Experience pages of the first React site (#/senec, ...).
  "/senec": paths.experience("senec-software-developer"),
  "/future-ready": paths.experience("future-ready-senior-data-scientist"),
  "/sintef": paths.experience("sintef"),
  "/uio": paths.experience("uio"),
  // Future Ready had one page until its two roles were split (November 2026).
  "/experience/future-ready": paths.experience(
    "future-ready-senior-data-scientist",
  ),
  // Pages of the original static site (v1.0.0).
  "/index.html": paths.home,
  "/about.html": paths.about,
  "/projects.html": paths.section("work"),
  // Project pages before they moved under /projects/.
  ...Object.fromEntries(
    projectPages.map((p) => [
      `/project/${p.page.slug}`,
      paths.project(p.page.slug),
    ]),
  ),
};

// The site used hash URLs until November 2026 (steinnhm.com/#/about).
// Returns the path such a URL means now, or null for any other hash
// (including section anchors like "#work").
export function legacyHashPath(hash: string): string | null {
  if (!hash.startsWith("#/")) return null;
  const path = hash.slice(1);
  return redirects[path] ?? path;
}
