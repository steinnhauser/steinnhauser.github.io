// The Lorenz system behind the cover:
//   ẋ = σ(y − x),  ẏ = x(ρ − z) − y,  ż = xy − βz
// with the classic chaotic parameters. Pure functions, so the maths can be
// tested without a canvas.

export type Vec3 = [number, number, number];

export const SIGMA = 10;
export const RHO = 28;
export const BETA = 8 / 3;

function derivative([x, y, z]: Vec3): Vec3 {
  return [SIGMA * (y - x), x * (RHO - z) - y, x * y - BETA * z];
}

// One fourth-order Runge-Kutta step of size `dt`.
export function step(p: Vec3, dt: number): Vec3 {
  const add = (a: Vec3, b: Vec3, h: number): Vec3 => [
    a[0] + b[0] * h,
    a[1] + b[1] * h,
    a[2] + b[2] * h,
  ];
  const k1 = derivative(p);
  const k2 = derivative(add(p, k1, dt / 2));
  const k3 = derivative(add(p, k2, dt / 2));
  const k4 = derivative(add(p, k3, dt));
  return [
    p[0] + (dt / 6) * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0]),
    p[1] + (dt / 6) * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1]),
    p[2] + (dt / 6) * (k1[2] + 2 * k2[2] + 2 * k3[2] + k4[2]),
  ];
}

// `count` points along the attractor, `every` steps apart, after the
// transient from the starting point has died away.
export function trace(
  count: number,
  dt = 0.005,
  every = 2,
  start: Vec3 = [0.1, 0, 0],
): Vec3[] {
  let p = start;
  for (let i = 0; i < 2000; i++) p = step(p, dt);
  const points: Vec3[] = [];
  for (let i = 0; i < count; i++) {
    for (let j = 0; j < every; j++) p = step(p, dt);
    points.push(p);
  }
  return points;
}

export const distance = (a: Vec3, b: Vec3) =>
  Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);

// The attractor's centre: the system is symmetric under (x, y) → (−x, −y)
// and its wings sit around z ≈ ρ − 1.
export const CENTRE: Vec3 = [0, 0, RHO - 4];

// Rotate about the attractor's vertical (z) axis by `yaw`, then tilt by
// `pitch`, and project: screen x, screen y (up is +z) and depth (larger is
// nearer the viewer).
export function project(
  [x, y, z]: Vec3,
  yaw: number,
  pitch: number,
): [number, number, number] {
  const dx = x - CENTRE[0];
  const dy = y - CENTRE[1];
  const dz = z - CENTRE[2];
  const cy = Math.cos(yaw);
  const sy = Math.sin(yaw);
  const rx = dx * cy - dy * sy;
  const ry = dx * sy + dy * cy;
  const cp = Math.cos(pitch);
  const sp = Math.sin(pitch);
  const up = dz * cp - ry * sp;
  const depth = dz * sp + ry * cp;
  // A gentle perspective, so the near wing reads as nearer.
  const f = 120 / (120 - depth);
  return [rx * f, up * f, depth];
}
