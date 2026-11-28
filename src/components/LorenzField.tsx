import { useEffect, useRef } from "react";
import styled from "styled-components";
import { breakpoints, fonts, SLANT } from "../theme";
import { BETA, project, RHO, SIGMA, step, trace, type Vec3 } from "./lorenz";

// The cover's background: the Lorenz attractor, turning slowly in three
// dimensions. The attractor is one fine thread, shaded by depth. Over it
// run pairs of comets, gold and ivory, launched a hair's width apart: they
// trace the same path for a while, then part ways (sensitive dependence on
// initial conditions). The pointer tilts and turns the attractor. One still
// frame for reduced motion; paused while the cover is off screen.

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
    /* Fade towards the text on the left. */
    mask-image: linear-gradient(to right, transparent 26%, #000 62%);
  }

  /* Phones: the attractor sits behind the text, so keep it faint. */
  @media (max-width: ${breakpoints.mobile}) {
    canvas {
      opacity: 0.32;
      mask-image: none;
    }
  }
`;

// "LORENZ SYSTEM  σ 10  ρ 28  β 8/3", like the legend of a figure.
const Legend = styled.div`
  position: absolute;
  right: clamp(16px, 4vw, 48px);
  bottom: calc(${SLANT} + 22px);
  font-family: ${fonts.mono};
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.42);

  span {
    margin-left: 1.4em;
    text-transform: none;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

const THREAD = "226, 230, 240";
const GOLD = "240, 184, 96";
const IVORY = "244, 238, 226";

const DT = 0.004; // integration step
const STEPS_PER_FRAME = 3; // at 60 frames per second
const TRAIL = 110; // frames of trail behind each comet
const LIFE = 34; // time units before a pair fades and relaunches
const FADE = 3; // time units to fade in or out
const PAIRS = 3;

type Pair = { a: Vec3; b: Vec3; trailA: Vec3[]; trailB: Vec3[]; age: number };

function launch(thread: Vec3[], age = 0): Pair {
  const a = thread[Math.floor(Math.random() * thread.length)];
  const b: Vec3 = [a[0] + 1e-3, a[1], a[2]];
  return { a, b, trailA: [a], trailB: [b], age };
}

function LorenzField({ visible }: { visible: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Kept across pauses, so the motion resumes where it stopped.
  const state = useRef<{
    thread: Vec3[];
    pairs: Pair[];
    yaw: number;
    pitch: number;
    target: { yaw: number; pitch: number };
    spin: number;
  } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    if (!state.current) {
      const thread = trace(7500, 0.005, 3);
      state.current = {
        thread,
        // Staggered, so the pairs don't all part at once.
        pairs: Array.from({ length: PAIRS }, (_, i) =>
          launch(thread, (i * LIFE) / PAIRS),
        ),
        yaw: 0.5,
        pitch: 0.28,
        target: { yaw: 0, pitch: 0.28 },
        spin: 0.5,
      };
    }
    const s = state.current;
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const finePointer = window.matchMedia?.(
      "(hover: hover) and (pointer: fine)",
    ).matches;

    let width = 0;
    let height = 0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduce) draw();
    };

    const layout = () => {
      const phone = width < 760;
      const cx = width * (phone ? 0.5 : 0.71);
      const cy = height * (phone ? 0.5 : 0.44);
      const scale = phone
        ? (width * 1.15) / 50
        : Math.min((height * 0.74) / 50, (width * 0.5) / 50);
      return { cx, cy, scale };
    };

    const draw = () => {
      const { cx, cy, scale } = layout();
      ctx.clearRect(0, 0, width, height);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // The attractor: one thread, drawn in depth bands so the near wing
      // is brighter than the far one.
      const BANDS = 6;
      const pts = s.thread.map((p) => project(p, s.yaw, s.pitch));
      const band = (d: number) =>
        Math.max(0, Math.min(BANDS - 1, Math.floor(((d + 26) / 52) * BANDS)));
      ctx.lineWidth = 0.6;
      for (let k = 0; k < BANDS; k++) {
        ctx.strokeStyle = `rgba(${THREAD}, ${0.03 + (k / (BANDS - 1)) * 0.15})`;
        ctx.beginPath();
        let open = false;
        for (let i = 1; i < pts.length; i++) {
          const [x0, y0, d0] = pts[i - 1];
          const [x1, y1, d1] = pts[i];
          if (band((d0 + d1) / 2) !== k) {
            open = false;
            continue;
          }
          if (!open) ctx.moveTo(cx + x0 * scale, cy - y0 * scale);
          ctx.lineTo(cx + x1 * scale, cy - y1 * scale);
          open = true;
        }
        ctx.stroke();
      }
      if (reduce) return;

      // The comets: trails that brighten towards the head.
      const comet = (trail: Vec3[], color: string, fade: number) => {
        const p = trail.map((q) => project(q, s.yaw, s.pitch));
        const CHUNK = 10;
        ctx.lineWidth = 1.1;
        for (let i = 0; i < p.length - 1; i += CHUNK) {
          const t = (i + CHUNK) / p.length;
          ctx.strokeStyle = `rgba(${color}, ${0.75 * t * t * fade})`;
          ctx.beginPath();
          ctx.moveTo(cx + p[i][0] * scale, cy - p[i][1] * scale);
          for (let j = i + 1; j <= Math.min(i + CHUNK, p.length - 1); j++)
            ctx.lineTo(cx + p[j][0] * scale, cy - p[j][1] * scale);
          ctx.stroke();
        }
        const [hx, hy] = p[p.length - 1];
        const x = cx + hx * scale;
        const y = cy - hy * scale;
        ctx.fillStyle = `rgba(${color}, ${0.14 * fade})`;
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(${color}, ${0.95 * fade})`;
        ctx.beginPath();
        ctx.arc(x, y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      };
      for (const pair of s.pairs) {
        const fade = Math.min(1, pair.age / FADE, (LIFE - pair.age) / FADE);
        comet(pair.trailB, IVORY, Math.max(0, fade) * 0.8);
        comet(pair.trailA, GOLD, Math.max(0, fade));
      }
    };

    const advance = (frames: number) => {
      const n = Math.max(1, Math.round(frames * STEPS_PER_FRAME));
      for (let i = 0; i < s.pairs.length; i++) {
        let pair = s.pairs[i];
        if (pair.age >= LIFE) pair = s.pairs[i] = launch(s.thread);
        for (let k = 0; k < n; k++) {
          pair.a = step(pair.a, DT);
          pair.b = step(pair.b, DT);
        }
        pair.age += n * DT;
        pair.trailA.push(pair.a);
        pair.trailB.push(pair.b);
        if (pair.trailA.length > TRAIL) pair.trailA.shift();
        if (pair.trailB.length > TRAIL) pair.trailB.shift();
      }
      // A slow turn, plus the pointer's tilt, eased.
      s.spin += 0.0008 * frames;
      s.yaw += (s.spin + s.target.yaw - s.yaw) * 0.04;
      s.pitch += (s.target.pitch - s.pitch) * 0.04;
    };

    const onPointer = (e: PointerEvent) => {
      s.target.yaw = (e.clientX / window.innerWidth - 0.5) * 0.9;
      s.target.pitch = 0.28 + (e.clientY / window.innerHeight - 0.5) * 0.4;
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();
    if (reduce || !visible) {
      draw();
      return () => observer.disconnect();
    }

    if (finePointer) window.addEventListener("pointermove", onPointer);
    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      // Frames at 60 Hz since the last one, so the speed doesn't depend on
      // the display's refresh rate; capped after a stall.
      const frames = Math.min(3, (now - last) / (1000 / 60));
      last = now;
      advance(frames);
      draw();
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("pointermove", onPointer);
    };
  }, [visible]);

  return (
    <Layer $visible={visible} aria-hidden="true">
      <canvas ref={canvasRef} />
      <Legend>
        Lorenz system
        <span>σ = {SIGMA}</span>
        <span>ρ = {RHO}</span>
        <span>β = {BETA === 8 / 3 ? "8/3" : BETA}</span>
      </Legend>
    </Layer>
  );
}

export default LorenzField;
