// Title, description and canonical URL of each page: written into the
// pre-rendered HTML (src/prerender.tsx) for search engines and link
// previews, and set on the document as visitors move between pages.
import { experiences, profile, shortTitle } from "./content";
import { paths, projectPages, SITE_URL } from "./routes";

export type PageMeta = {
  title: string;
  description: string;
  // Absolute URL, or undefined for pages that shouldn't be indexed.
  canonical?: string;
};

const name = profile.name;

const home: PageMeta = {
  title: name,
  description:
    "Cloud operator and software engineer in Berlin: Kubernetes platforms, " +
    "infrastructure as code and automation, open-source projects and a " +
    "physics background.",
  canonical: `${SITE_URL}/`,
};

// Search results show about 155 characters; cut at a word boundary.
export function clip(text: string, max = 155): string {
  if (text.length <= max) return text;
  return (
    text.slice(0, text.lastIndexOf(" ", max - 1)).replace(/[,;:]$/, "") + "…"
  );
}

export function pageMeta(pathname: string): PageMeta {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (path === paths.home) return home;

  if (path === paths.about)
    return {
      title: `About · ${name}`,
      description: clip(profile.about[0]),
      canonical: SITE_URL + path,
    };

  const exp = experiences.find((e) => paths.experience(e.slug) === path);
  if (exp) {
    const [latest] = exp.positions;
    return {
      title: `${exp.tileTitle} at ${exp.shortCompany ?? exp.company} · ${name}`,
      description: clip(
        `${latest.title}, ${exp.company} (${latest.period}). ${exp.summary}`,
      ),
      canonical: SITE_URL + path,
    };
  }

  const project = projectPages.find((p) => paths.project(p.page.slug) === path);
  if (project)
    return {
      title: `${shortTitle(project.title)} · ${name}`,
      description: clip(project.page.intro),
      canonical: SITE_URL + path,
    };

  return {
    title: `Page not found · ${name}`,
    description: home.description,
  };
}
