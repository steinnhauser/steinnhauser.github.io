// Image budget: keeps the site fast to load. Bundled images must be WebP,
// small individually and small in total. Resize and re-encode new images
// before adding them (see README, "Images").
import { describe, expect, it } from "vitest";

// Every bundled image, inlined as a data URL so its size can be measured.
// The raw camera originals in src/assets/ are git-ignored and not bundled.
const images = import.meta.glob<string>(
  "./assets/{photos,logos}/**/*.{webp,png,jpg,jpeg,gif,svg}",
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
