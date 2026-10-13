import preact from "@preact/preset-vite";
import { fileURLToPath } from "node:url";
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

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact({ reactAliasesEnabled: false })],
  resolve: { alias: reactAliases },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
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
