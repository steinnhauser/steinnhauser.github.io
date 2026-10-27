import preact from "@preact/preset-vite";
import { fileURLToPath } from "node:url";
import type { HtmlTagDescriptor, Plugin } from "vite";
import { defineConfig } from "vitest/config";

const compat = fileURLToPath(new URL("./src/compat/react.js", import.meta.url));

// The site runs on Preact through its React compatibility layer. Every
// "react" import, including those inside react-router, styled-components
// and Testing Library, resolves to Preact.
const reactAliases = [
  { find: /^react$/, replacement: compat },
  { find: /^react-dom$/, replacement: "preact/compat" },
  { find: /^react-dom\/client$/, replacement: "preact/compat/client" },
  { find: /^react-dom\/test-utils$/, replacement: "preact/test-utils" },
  { find: /^react\/jsx-(dev-)?runtime$/, replacement: "preact/jsx-runtime" },
];

// The cover's portrait (the largest paint) and its two latin fonts are only
// found once the JavaScript runs. Preload them from index.html so the
// browser fetches them alongside the script. Build only (hashed names).
function preloadCover(): Plugin {
  const wanted: { pattern: RegExp; as: "image" | "font" }[] = [
    { pattern: /^assets\/portrait-[\w-]+\.webp$/, as: "image" },
    { pattern: /^assets\/space-grotesk-latin-wght[\w-]*\.woff2$/, as: "font" },
    { pattern: /^assets\/inter-latin-wght[\w-]*\.woff2$/, as: "font" },
  ];
  return {
    name: "preload-cover",
    apply: "build",
    transformIndexHtml(_html, ctx) {
      const files = Object.keys(ctx.bundle ?? {});
      return wanted.flatMap(({ pattern, as }): HtmlTagDescriptor[] => {
        const file = files.find((f) => pattern.test(f));
        if (!file) throw new Error(`preload-cover: no file for ${pattern}`);
        const attrs: Record<string, string> = {
          rel: "preload",
          href: `/${file}`,
          as,
        };
        if (as === "image") attrs.fetchpriority = "high";
        else Object.assign(attrs, { type: "font/woff2", crossorigin: "" });
        return [{ tag: "link", attrs, injectTo: "head" }];
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact({ reactAliasesEnabled: false }), preloadCover()],
  resolve: { alias: reactAliases },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    globalSetup: ["./scripts/profile-readme.ts"],
    // Stub CSS in tests, except fonts.css, which assets.test.ts reads.
    css: { include: [/fonts\.css/] },
    // Use the same ESM builds as the browser (Node would otherwise pick the
    // CommonJS ones, whose require("react") bypasses the aliases), and
    // bundle them through Vite so the aliases apply inside them.
    alias: [
      {
        find: /^styled-components$/,
        replacement: "styled-components/dist/styled-components.browser.esm.js",
      },
    ],
    server: {
      deps: {
        inline: ["react-router", "styled-components"],
      },
    },
  },
});
