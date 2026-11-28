import { useEffect, useRef } from "react";
import styled from "styled-components";
import { breakpoints, fonts, SLANT } from "../theme";
import { limitCycle, MU, step, velocity, type Point } from "./vanDerPol";

// The cover's background: the phase plane of a Van der Pol oscillator,
// drawn like a figure in a physics book. Fine silver streamlines inside a
// soft oval, faint axes with ticks, the gold limit cycle every trajectory
// settles onto, and a few slow particles drifting towards it. The figure
// itself is still; only the particles move. A still frame for reduced
// motion; paused while the cover is off screen.

const Layer = styled.div<{ $visible: boolean }>`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transition: opacity 1.6s ease;

  canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  /* Phones: the figure sits behind the text, so keep it faint. */
  @media (max-width: ${breakpoints.mobile}) {
    canvas {
      opacity: 0.45;
    }
  }
`;

// "ẍ − μ(1 − x²)ẋ + x = 0   μ = 1.2", like the legend of a figure.
const Legend = styled.div`
  position: absolute;
  right: clamp(16px, 4vw, 48px);
  bottom: calc(${SLANT} + 22px);
  font-family: ${fonts.mono};
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.4);

  span {
    margin-left: 1.6em;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

const SILVER = "226, 230, 240";
const GOLD = "240, 184, 96";
const IVORY = "244, 238, 226";

const SPEED = 0.14; // phase-time units per second for the particles
const PARTICLES = 26;
const TRAIL = 40; // points of trail behind each particle

// The figure's extent in phase units: the oval the streamlines fill.
const EXTENT_X = 3.3;
const EXTENT_Y = 5;

type Particle = { p: Point; trail: Point[]; age: number; life: number };

function PhaseFlow({ visible }: { visible: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Kept across pauses, so the motion resumes where it stopped.
  const state = useRef<{ particles: Particle[]; cycle: Point[] } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    // The still part of the figure, drawn once per size.
    const plate = document.createElement("canvas");
    const plateCtx = plate.getContext("2d");
    if (!plateCtx) return;

    if (!state.current) state.current = { particles: [], cycle: limitCycle() };
    const s = state.current;
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Screen layout: the phase plane's origin, and pixels per unit of x
    // and of y = ẋ.
    let width = 0;
    let height = 0;
    let cx = 0;
    let cy = 0;
    let sx = 1;
    let sy = 1;
    const toScreen = ([x, y]: Point): Point => [cx + x * sx, cy - y * sy];

    // 1 in the middle of the oval, easing to 0 at its edge.
    const weight = ([x, y]: Point) => {
      const d = Math.hypot(x / EXTENT_X, y / EXTENT_Y);
      const t = Math.max(0, Math.min(1, (1 - d) / 0.45));
      return t * t * (3 - 2 * t);
    };

    const drawPlate = (dpr: number) => {
      const g = plateCtx;
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      g.clearRect(0, 0, width, height);
      g.lineCap = "round";
      g.lineJoin = "round";

      // Axes, with ticks at the integers and their names.
      g.strokeStyle = `rgba(${SILVER}, 0.14)`;
      g.lineWidth = 0.6;
      g.beginPath();
      g.moveTo(...toScreen([-EXTENT_X, 0]));
      g.lineTo(...toScreen([EXTENT_X, 0]));
      g.moveTo(...toScreen([0, -EXTENT_Y * 0.92]));
      g.lineTo(...toScreen([0, EXTENT_Y * 0.92]));
      for (let i = -3; i <= 3; i++) {
        if (i === 0) continue;
        const [X, Y] = toScreen([i, 0]);
        g.moveTo(X, Y - 3);
        g.lineTo(X, Y + 3);
      }
      for (let i = -4; i <= 4; i++) {
        if (i === 0) continue;
        const [X, Y] = toScreen([0, i]);
        g.moveTo(X - 3, Y);
        g.lineTo(X + 3, Y);
      }
      g.stroke();
      g.fillStyle = `rgba(${SILVER}, 0.38)`;
      g.font = `10px ${fonts.mono}`;
      const [ax, ay] = toScreen([EXTENT_X, 0]);
      g.fillText("x", ax + 6, ay + 3.5);
      const [bx, by] = toScreen([0, EXTENT_Y * 0.92]);
      g.fillText("ẋ", bx + 6, by + 4);

      // A direction field: from a staggered grid inside the oval, short
      // strokes of equal length along the flow, each brightening towards
      // its end so the direction reads.
      const gap = Math.max(20, Math.min(28, sx * 0.34));
      g.lineWidth = 0.6;
      const STEPS = 12;
      const STEP = 1.9; // pixels per step
      for (let row = 0, Y = cy - EXTENT_Y * sy; Y < cy + EXTENT_Y * sy; row++) {
        for (
          let X = cx - EXTENT_X * sx + (row % 2) * (gap / 2);
          X < cx + EXTENT_X * sx;
          X += gap
        ) {
          let p: Point = [(X - cx) / sx, (cy - Y) / sy];
          if (weight(p) <= 0) continue;
          const line: Point[] = [p];
          for (let i = 0; i < STEPS; i++) {
            const [u, v] = velocity(p);
            const m = Math.hypot(u * sx, v * sy) || 1;
            p = [p[0] + (u / m) * STEP, p[1] + (v / m) * STEP];
            line.push(p);
          }
          for (let i = 1; i < line.length; i++) {
            const a = (0.05 + 0.42 * (i / line.length)) * weight(line[i]);
            if (a < 0.01) continue;
            g.strokeStyle = `rgba(${SILVER}, ${a})`;
            g.beginPath();
            g.moveTo(...toScreen(line[i - 1]));
            g.lineTo(...toScreen(line[i]));
            g.stroke();
          }
        }
        Y += gap;
      }

      // The limit cycle, in gold.
      g.strokeStyle = `rgba(${GOLD}, 0.62)`;
      g.lineWidth = 1;
      g.beginPath();
      s.cycle.forEach((q, i) =>
        i === 0 ? g.moveTo(...toScreen(q)) : g.lineTo(...toScreen(q)),
      );
      g.closePath();
      g.stroke();
    };

    const spawn = (): Particle => {
      // Anywhere inside the inner part of the oval.
      let p: Point;
      do
        p = [
          (Math.random() * 2 - 1) * EXTENT_X,
          (Math.random() * 2 - 1) * EXTENT_Y,
        ];
      while (weight(p) < 0.5);
      return { p, trail: [], age: 0, life: 7 + Math.random() * 7 };
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      for (const c of [canvas, plate]) {
        c.width = Math.round(width * dpr);
        c.height = Math.round(height * dpr);
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const phone = width < 760;
      cx = width * (phone ? 0.5 : 0.75);
      cy = height * (phone ? 0.58 : 0.45);
      sx = phone ? width * 0.13 : Math.min(width * 0.058, height * 0.095);
      sy = sx * 0.6;
      if (s.particles.length === 0)
        s.particles = Array.from({ length: PARTICLES }, () => {
          const q = spawn();
          q.age = Math.random() * q.life; // staggered
          return q;
        });
      for (const q of s.particles) q.trail = [];
      drawPlate(dpr);
      draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(plate, 0, 0, width, height);
      if (reduce) return;
      ctx.lineCap = "round";
      ctx.lineWidth = 0.9;
      s.particles.forEach((q, n) => {
        if (q.trail.length < 2) return;
        const fade =
          Math.max(0, Math.min(1, q.age, q.life - q.age)) * weight(q.p);
        const color = n % 6 === 0 ? GOLD : IVORY;
        for (let i = 1; i < q.trail.length; i++) {
          const t = i / q.trail.length;
          ctx.strokeStyle = `rgba(${color}, ${0.6 * t * t * fade})`;
          ctx.beginPath();
          ctx.moveTo(...toScreen(q.trail[i - 1]));
          ctx.lineTo(...toScreen(q.trail[i]));
          ctx.stroke();
        }
      });
    };

    const advance = (seconds: number) => {
      for (let i = 0; i < s.particles.length; i++) {
        let q = s.particles[i];
        q.age += seconds;
        if (q.age > q.life) q = s.particles[i] = spawn();
        q.p = step(q.p, seconds * SPEED);
        q.trail.push(q.p);
        if (q.trail.length > TRAIL) q.trail.shift();
      }
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();
    if (reduce || !visible) return () => observer.disconnect();

    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      // Real seconds since the last frame, capped after a stall, so the
      // speed doesn't depend on the display's refresh rate.
      const seconds = Math.min(0.05, (now - last) / 1000);
      last = now;
      advance(seconds);
      draw();
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [visible]);

  return (
    <Layer $visible={visible} aria-hidden="true">
      <canvas ref={canvasRef} />
      <Legend>
        ẍ − μ(1 − x²)ẋ + x = 0<span>μ = {MU}</span>
      </Legend>
    </Layer>
  );
}

export default PhaseFlow;
