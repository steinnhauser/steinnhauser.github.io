// The site ships Preact, not React (see vite.config.ts). If an alias breaks,
// "react" would silently resolve to the real package again and the bundle
// would grow by ~60 KB; these checks catch that.
import { describe, expect, it } from "vitest";

describe("react → preact/compat aliasing", () => {
  it("resolves react to preact/compat", async () => {
    const react = await import("react");
    const compat = await import("preact/compat");
    expect(react.createElement).toBe(compat.createElement);
  });

  it("resolves react-dom/client to Preact", async () => {
    const client = await import("react-dom/client");
    const compatClient = await import("preact/compat/client");
    expect(client.createRoot).toBe(compatClient.createRoot);
  });
});
