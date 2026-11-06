// Writes the static pages of the site (last step of `npm run build`).
//
// `vite build` produces the browser bundle and dist/index.html (an empty
// shell); `vite build --ssr src/prerender.tsx` bundles the renderer for
// Node into dist-ssr/. This script renders every page into that shell:
//
//   dist/index.html, about.html, experience/<slug>.html,
//   projects/<slug>.html, 404.html and sitemap.xml
//
// GitHub Pages serves /about from about.html (no redirect to /about/) and
// 404.html for any unknown path. Each page also gets its title and link
// preview tags, the critical styles inline (the site's small stylesheet
// and the styles of the components on that page), and preloads for the
// heading and body fonts and, on the home page, the portrait.
import { readdir, readFile, rm, writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { pathToFileURL } from "node:url";

const SITE_URL = "https://steinnhm.com";
const dist = "dist";
const ssr = "dist-ssr";

type Renderer = {
  routes: string[];
  render: (url: string) => { html: string; head: string; title: string };
};

const { routes, render }: Renderer = await import(
  pathToFileURL(join(ssr, "prerender.js")).href
);

const shell = await readFile(join(dist, "index.html"), "utf8");
const assets = await readdir(join(dist, "assets"));
const asset = (pattern: RegExp) => {
  const file = assets.find((f) => pattern.test(f));
  if (!file) throw new Error(`prerender: no asset matches ${pattern}`);
  return `/assets/${file}`;
};

// The stylesheet: fonts and global rules, about 4 KB. Inline it everywhere.
const cssFile = asset(/^index-[\w-]+\.css$/);
const css = await readFile(join(dist, cssFile), "utf8");
const stylesheet = new RegExp(
  `<link rel="stylesheet"[^>]*href="${cssFile}"[^>]*>`,
);
if (!stylesheet.test(shell))
  throw new Error("prerender: stylesheet link not found");

const fonts = [
  /^space-grotesk-latin-wght[\w-]*\.woff2$/,
  /^inter-latin-wght[\w-]*\.woff2$/,
]
  .map(
    (f) =>
      `<link rel="preload" href="${asset(f)}" as="font" type="font/woff2" crossorigin>`,
  )
  .join("\n    ");
const portrait = `<link rel="preload" href="${asset(/^portrait-[\w-]+\.webp$/)}" as="image" fetchpriority="high">`;

const sitemap: string[] = [];
for (const url of routes) {
  const { html, head, title } = render(url);
  const file = url === "/" ? "index.html" : `${url.slice(1)}.html`;
  // Preloads first, so the fonts and portrait start downloading at once.
  const preloads = url === "/" ? `${fonts}\n    ${portrait}` : fonts;
  // Function replacers, so a "$" in the content is never read as a pattern.
  const page = shell
    .replace(
      /<title>[^<]*<\/title>/,
      () => `<title>${title}</title>\n    ${preloads}`,
    )
    .replace(stylesheet, () => `<style>${css}</style>`)
    .replace("</head>", () => `  ${head}\n  </head>`)
    .replace('<div id="root"></div>', () => `<div id="root">${html}</div>`);
  if (!page.includes(html)) throw new Error(`prerender: no #root for ${url}`);
  await mkdir(dirname(join(dist, file)), { recursive: true });
  await writeFile(join(dist, file), page);
  if (url !== "/404") sitemap.push(`${SITE_URL}${url === "/" ? "/" : url}`);
  console.log(`  ${file.padEnd(40)} ${(page.length / 1024).toFixed(1)} KB`);
}

await writeFile(
  join(dist, "sitemap.xml"),
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    sitemap.map((u) => `  <url><loc>${u}</loc></url>\n`).join("") +
    "</urlset>\n",
);
// Every page carries the styles inline now.
await rm(join(dist, cssFile));
await rm(ssr, { recursive: true, force: true });
console.log(`  sitemap.xml: ${sitemap.length} pages`);
