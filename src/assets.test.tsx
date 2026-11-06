// Static assets: the image budget keeps the site fast to load (bundled
// images must be WebP, small individually and small in total; resize and
// re-encode new images before adding them, see README, "Images"), the nav
// mark matches the favicon, and the fonts are self-hosted.
import { render } from "@testing-library/preact";
// Load the React compatibility layer, as the site does, so camelCase SVG
// props (strokeWidth) render as their attributes (stroke-width).
import "preact/compat";
import { describe, expect, it } from "vitest";
import { Mark } from "./components/Icons";

// Every bundled image, inlined as a data URL so its size can be measured.
// The raw camera originals in src/assets/ are git-ignored and not bundled.
const images = import.meta.glob<string>(
  "./assets/{photos,logos,projects}/**/*.{webp,png,jpg,jpeg,gif,svg}",
  { query: "?inline", import: "default", eager: true },
);

const bytes = (dataUrl: string) =>
  Math.floor((dataUrl.length - dataUrl.indexOf(",") - 1) * 0.75);

const KB = 1024;

describe("image budget", () => {
  const entries = Object.entries(images);

  it("finds the bundled images", () => {
    expect(entries.length).toBeGreaterThan(0);
  });

  it.each(entries)("%s is WebP and at most 100 KB", (path, dataUrl) => {
    expect(path).toMatch(/\.webp$/);
    expect(bytes(dataUrl)).toBeLessThanOrEqual(100 * KB);
  });

  it("keeps all images together at most 250 KB", () => {
    const total = entries.reduce((sum, [, url]) => sum + bytes(url), 0);
    expect(total).toBeLessThanOrEqual(250 * KB);
  });
});

describe("brand mark", () => {
  // The nav mark and the favicon are two copies of one drawing. Compare the
  // dot and the letters (the favicon's tile rects are left out; gradient
  // fills differ only in their ids).
  const shapes = (root: ParentNode) =>
    [...root.querySelectorAll("circle, path")].map((el) =>
      ["cx", "cy", "r", "d", "fill", "stroke", "stroke-width"]
        .map((a) => el.getAttribute(a)?.replace(/^url\(.*\)$/, "url"))
        .join(" "),
    );

  it("draws the same artwork in the nav as in favicon.svg", () => {
    const [svg] = Object.values(
      import.meta.glob<string>("../public/favicon.svg", {
        query: "?raw",
        import: "default",
        eager: true,
      }),
    );
    const favicon = new DOMParser().parseFromString(svg, "image/svg+xml");
    const { container } = render(<Mark />);
    expect(shapes(favicon)).toHaveLength(3);
    expect(shapes(container)).toEqual(shapes(favicon));
  });
});

describe("fonts", () => {
  it("self-hosts the three families, latin subsets only", () => {
    // Read as text (CSS imports are stubbed out in tests).
    const [css] = Object.values(
      import.meta.glob<string>("./fonts.css", {
        query: "?raw",
        import: "default",
        eager: true,
      }),
    );
    for (const family of [
      "Inter Variable",
      "Space Grotesk Variable",
      "JetBrains Mono Variable",
    ]) {
      expect(css, family).toMatch(new RegExp(`font-family: ["']${family}["']`));
    }
    const files = css.match(/url\([^)]+\)/g) ?? [];
    expect(files).toHaveLength(6);
    for (const f of files)
      expect(f).toMatch(/-latin(-ext)?-wght-normal\.woff2/);
  });
});
