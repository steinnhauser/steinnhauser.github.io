import { describe, expect, it } from "vitest";
import { limitCycle, step, velocity, type Point } from "./vanDerPol";

const settle = (p: Point, steps = 6000) => {
  for (let i = 0; i < steps; i++) p = step(p, 0.01);
  return p;
};
const amplitude = (p: Point) => {
  // Largest |x| over one more period from p.
  let max = 0;
  for (let i = 0; i < 800; i++) {
    p = step(p, 0.01);
    max = Math.max(max, Math.abs(p[0]));
  }
  return max;
};

describe("Van der Pol flow", () => {
  it("has its fixed point at the origin", () => {
    expect(velocity([0, 0]).map(Math.abs)).toEqual([0, 0]);
  });

  it("draws trajectories from inside and outside onto one cycle", () => {
    // The limit cycle's amplitude is close to 2 for moderate μ.
    const inside = amplitude(settle([0.05, 0]));
    const outside = amplitude(settle([3.5, 3]));
    expect(inside).toBeCloseTo(2, 0);
    expect(outside).toBeCloseTo(inside, 2);
  });

  it("returns one closed loop of the limit cycle", () => {
    const loop = limitCycle(300);
    expect(loop.length).toBeGreaterThan(200);
    const [first, last] = [loop[0], loop[loop.length - 1]];
    expect(Math.hypot(first[0] - last[0], first[1] - last[1])).toBeLessThan(
      0.15,
    );
    expect(Math.max(...loop.map(([x]) => Math.abs(x)))).toBeCloseTo(2, 0);
  });
});
