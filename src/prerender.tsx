// Server entry for build-time rendering. `npm run build` bundles this file
// for Node (vite build --ssr), then scripts/prerender.ts calls render() for
// every page and writes the static HTML files GitHub Pages serves. main.tsx
// hydrates them in the browser.
//
// Never shipped to visitors.
import { renderToString } from "preact-render-to-string";
import { StaticRouter } from "react-router";
import { ServerStyleSheet } from "styled-components";
import App from "./App";
import { pageMeta } from "./meta";
import { pagePaths, paths } from "./routes";

// Every page, then 404.html.
export const routes = [...pagePaths, paths.notFound];

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const meta = (key: "name" | "property", id: string, content: string) =>
  `<meta ${key}="${id}" content="${esc(content)}">`;

export function render(url: string) {
  const sheet = new ServerStyleSheet();
  try {
    const html = renderToString(
      sheet.collectStyles(
        <StaticRouter location={url}>
          <App />
        </StaticRouter>,
      ),
    );
    const page = pageMeta(url);
    const head = [
      meta("name", "description", page.description),
      meta("property", "og:title", page.title),
      meta("property", "og:description", page.description),
      meta("name", "twitter:title", page.title),
      meta("name", "twitter:description", page.description),
      ...(page.canonical
        ? [
            `<link rel="canonical" href="${page.canonical}">`,
            meta("property", "og:url", page.canonical),
          ]
        : [meta("name", "robots", "noindex")]),
      // main.tsx hydrates only when the browser is at the path this HTML
      // was rendered for (404.html is served for every unknown path).
      meta("name", "prerendered-path", url),
      sheet.getStyleTags(),
    ].join("\n    ");
    return { html, head, title: esc(page.title) };
  } finally {
    sheet.seal();
  }
}
