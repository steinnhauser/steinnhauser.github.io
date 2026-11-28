// The Van der Pol oscillator behind the cover:
//   ẍ − μ(1 − x²)ẋ + x = 0,  or as a flow in the phase plane (x, y = ẋ):
//   ẋ = y,  ẏ = μ(1 − x²)y − x.
// Every trajectory except the fixed point at the origin settles onto one
// closed orbit, the limit cycle. Pure functions, so the maths can be tested
// without a canvas.

export const MU = 1.2;

export type Point = [number, number];

export function velocity([x, y]: Point, mu = MU): Point {
  return [y, mu * (1 - x * x) * y - x];
}

// One fourth-order Runge-Kutta step of size `dt`.
export function step(p: Point, dt: number, mu = MU): Point {
  const k1 = velocity(p, mu);
  const k2 = velocity([p[0] + (k1[0] * dt) / 2, p[1] + (k1[1] * dt) / 2], mu);
  const k3 = velocity([p[0] + (k2[0] * dt) / 2, p[1] + (k2[1] * dt) / 2], mu);
  const k4 = velocity([p[0] + k3[0] * dt, p[1] + k3[1] * dt], mu);
  return [
    p[0] + (dt / 6) * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0]),
    p[1] + (dt / 6) * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1]),
  ];
}

// One loop of the limit cycle, `count` points, after the transient.
export function limitCycle(count = 600, mu = MU): Point[] {
  const dt = 0.01;
  let p: Point = [2, 0];
  for (let i = 0; i < 4000; i++) p = step(p, dt, mu);
  // Integrate a little more than one period (about 6.9 for μ = 1.2), then
  // keep one loop: from one crossing of y = 0 at x > 0 to the next (the
  // flow turns clockwise, so y falls through zero there).
  const loop: Point[] = [];
  let started = false;
  for (let i = 0; i < 4000; i++) {
    const next = step(p, dt, mu);
    const crossing = p[1] > 0 && next[1] <= 0 && next[0] > 0;
    if (crossing && started) break;
    if (crossing) started = true;
    if (started) loop.push(next);
    p = next;
  }
  const every = Math.max(1, Math.floor(loop.length / count));
  return loop.filter((_, i) => i % every === 0);
}
