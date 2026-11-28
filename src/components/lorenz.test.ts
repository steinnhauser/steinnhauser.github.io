import { describe, expect, it } from "vitest";
import { CENTRE, distance, project, step, trace, type Vec3 } from "./lorenz";

describe("Lorenz attractor", () => {
  it("stays on the attractor's familiar bounds", () => {
    const points = trace(4000);
    for (const [x, y, z] of points) {
      expect(Math.abs(x)).toBeLessThan(25);
      expect(Math.abs(y)).toBeLessThan(32);
      expect(z).toBeGreaterThan(0);
      expect(z).toBeLessThan(55);
    }
    // Both wings are visited.
    expect(points.some(([x]) => x > 10)).toBe(true);
    expect(points.some(([x]) => x < -10)).toBe(true);
  });

  it("parts two comets launched a hair's width apart", () => {
    let a = trace(1)[0];
    let b: Vec3 = [a[0] + 1e-3, a[1], a[2]];
    // Together at first...
    for (let i = 0; i < 500; i++) [a, b] = [step(a, 0.004), step(b, 0.004)];
    expect(distance(a, b)).toBeLessThan(0.5);
    // ...and on different parts of the attractor well within a comet's life.
    for (let i = 0; i < 6000; i++) [a, b] = [step(a, 0.004), step(b, 0.004)];
    expect(distance(a, b)).toBeGreaterThan(5);
  });

  it("projects the centre to the middle of the picture", () => {
    const [x, y, depth] = project(CENTRE, 1.2, 0.3);
    expect(Math.abs(x)).toBeLessThan(1e-9);
    expect(Math.abs(y)).toBeLessThan(1e-9);
    expect(Math.abs(depth)).toBeLessThan(1e-9);
  });

  it("shows the classic butterfly from the front without rotation", () => {
    // Yaw 0, pitch 0: x across, z up, y into the screen.
    const [x, up] = project([10, 0, CENTRE[2] + 5], 0, 0);
    expect(x).toBeCloseTo(10, 0);
    expect(up).toBeCloseTo(5, 0);
  });
});
