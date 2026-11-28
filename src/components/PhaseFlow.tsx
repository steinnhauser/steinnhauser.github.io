import { useEffect, useRef } from "react";
import styled from "styled-components";
import { breakpoints, fonts, SLANT } from "../theme";
import { limitCycle, MU, velocity, vortex, type Point } from "./vanDerPol";

// The cover's background: the phase plane of a Van der Pol oscillator.
// Fine silver streamlines show the flow, the gold loop is the limit cycle
// every trajectory settles onto, and a few slow particles drift along the
// flow towards it. The pointer stirs a gentle vortex that the streamlines
// and particles bend around; it fades when the pointer leaves the cover.
// A still frame for reduced motion; paused while the cover is off screen.

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
    mask-image: linear-gradient(to right, transparent 30%, #000 64%);
  }

  /* Phones: the flow sits behind the text, so keep it faint. */
  @media (max-width: ${breakpoints.mobile}) {
    canvas {
      opacity: 0.4;
      mask-image: none;
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
  color: rgba(255, 255, 255, 0.42);

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

const SPEED = 0.16; // phase-time units per second for the particles
const PARTICLES = 70;
const TRAIL = 22; // points of trail behind each particle
const VORTEX = 28000; // vortex strength at full stir

type Particle = { p: Point; trail: Point[]; age: number; life: number };

function PhaseFlow({ visible }: { visible: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Kept across pauses, so the motion resumes where it stopped.
  const state = useRef<{
    particles: Particle[];
    cycle: Point[];
    stir: { at: Point; target: Point; strength: number; on: boolean };
  } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const cache = document.createElement("canvas");
    const cacheCtx = cache.getContext("2d");
    if (!cacheCtx) return;

    if (!state.current)
      state.current = {
        particles: [],
        cycle: limitCycle(500),
        stir: { at: [0, 0], target: [0, 0], strength: 0, on: false },
      };
    const s = state.current;
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const finePointer = window.matchMedia?.(
      "(hover: hover) and (pointer: fine)",
    ).matches;

    // Screen layout: the phase plane's origin, and pixels per unit of x
    // and of y = ẋ.
    let width = 0;
    let height = 0;
    let dpr = 1;
    let cx = 0;
    let cy = 0;
    let sx = 1;
    let sy = 1;
    const toScreen = ([x, y]: Point): Point => [cx + x * sx, cy - y * sy];
    const toPhase = ([X, Y]: Point): Point => [(X - cx) / sx, (cy - Y) / sy];

    // Screen-space velocity (pixels per phase-time unit), with the vortex.
    const flow = (X: number, Y: number): Point => {
      const [u, v] = velocity(toPhase([X, Y]));
      let vx = u * sx;
      let vy = -v * sy;
      if (s.stir.strength > 0.002) {
        const [wx, wy] = vortex([X, Y], s.stir.at, VORTEX * s.stir.strength);
        vx += wx;
        vy += wy;
      }
      return [vx, vy];
    };

    // Streamlines from a staggered grid of seeds, drawn into the cache.
    // Each line brightens along its length, so the flow reads directional.
    const drawStreamlines = () => {
      cacheCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cacheCtx.clearRect(0, 0, width, height);
      cacheCtx.lineCap = "round";
      cacheCtx.lineWidth = 0.7;
      const gap = Math.max(32, Math.min(44, width / 34));
      const left = width < 760 ? 0 : width * 0.3;
      const STEPS = 56;
      const BANDS = 4;
      for (let row = 0, Y = gap / 2; Y < height; row++, Y += gap) {
        for (let X = left + (row % 2) * (gap / 2); X < width; X += gap) {
          const line: Point[] = [[X, Y]];
          let x = X;
          let y = Y;
          for (let i = 0; i < STEPS; i++) {
            const [u, v] = flow(x, y);
            const m = Math.hypot(u, v) || 1;
            x += (u / m) * 2.6;
            y += (v / m) * 2.6;
            if (x < -10 || x > width + 10 || y < -10 || y > height + 10) break;
            line.push([x, y]);
          }
          const per = Math.ceil(line.length / BANDS);
          for (let b = 0; b < BANDS; b++) {
            const from = b * per;
            const to = Math.min(line.length - 1, from + per);
            if (to <= from) break;
            cacheCtx.strokeStyle = `rgba(${SILVER}, ${0.05 + b * 0.075})`;
            cacheCtx.beginPath();
            cacheCtx.moveTo(...line[from]);
            for (let i = from + 1; i <= to; i++) cacheCtx.lineTo(...line[i]);
            cacheCtx.stroke();
          }
        }
      }
    };

    const spawn = (): Particle => {
      const left = width < 760 ? 0 : width * 0.35;
      const p = toPhase([
        left + Math.random() * (width - left),
        Math.random() * height,
      ]);
      return { p, trail: [], age: 0, life: 6 + Math.random() * 8 };
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      for (const c of [canvas, cache]) {
        c.width = Math.round(width * dpr);
        c.height = Math.round(height * dpr);
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const phone = width < 760;
      cx = width * (phone ? 0.5 : 0.72);
      cy = height * (phone ? 0.55 : 0.45);
      sx = phone ? width * 0.21 : Math.min(width * 0.092, height * 0.15);
      sy = height * (phone ? 0.075 : 0.082);
      if (s.particles.length === 0)
        s.particles = Array.from({ length: PARTICLES }, () => {
          const q = spawn();
          q.age = Math.random() * q.life; // staggered
          return q;
        });
      drawStreamlines();
      draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(cache, 0, 0, width, height);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // The limit cycle, in gold.
      ctx.strokeStyle = `rgba(${GOLD}, 0.5)`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      s.cycle.forEach((q, i) => {
        const [X, Y] = toScreen(q);
        if (i === 0) ctx.moveTo(X, Y);
        else ctx.lineTo(X, Y);
      });
      ctx.closePath();
      ctx.stroke();
      if (reduce) return;

      // The particles: short trails that brighten towards the head; one in
      // seven is gold.
      s.particles.forEach((q, n) => {
        if (q.trail.length < 2) return;
        const fade = Math.max(0, Math.min(1, q.age, q.life - q.age));
        const color = n % 7 === 0 ? GOLD : IVORY;
        ctx.lineWidth = 1;
        for (let i = 1; i < q.trail.length; i++) {
          const t = i / q.trail.length;
          ctx.strokeStyle = `rgba(${color}, ${0.55 * t * t * fade})`;
          ctx.beginPath();
          ctx.moveTo(...q.trail[i - 1]);
          ctx.lineTo(...q.trail[i]);
          ctx.stroke();
        }
      });
    };

    const advance = (seconds: number) => {
      // Ease the vortex towards the pointer, and its strength in or out.
      const st = s.stir;
      const before = st.strength;
      const moved = Math.hypot(
        st.target[0] - st.at[0],
        st.target[1] - st.at[1],
      );
      st.at = [
        st.at[0] + (st.target[0] - st.at[0]) * 0.08,
        st.at[1] + (st.target[1] - st.at[1]) * 0.08,
      ];
      st.strength += ((st.on ? 1 : 0) - st.strength) * 0.05;
      if (st.strength < 0.002 && !st.on) st.strength = 0;
      if (
        (st.strength > 0.002 && moved > 0.3) ||
        Math.abs(st.strength - before) > 0.002
      )
        drawStreamlines();

      const dt = seconds * SPEED;
      for (let i = 0; i < s.particles.length; i++) {
        let q = s.particles[i];
        q.age += seconds;
        if (q.age > q.life) q = s.particles[i] = spawn();
        // Move in screen space, so the vortex applies to the particles too.
        let [X, Y] = toScreen(q.p);
        for (let k = 0; k < 2; k++) {
          const [u, v] = flow(X, Y);
          X += (u * dt) / 2;
          Y += (v * dt) / 2;
        }
        q.p = toPhase([X, Y]);
        q.trail.push([X, Y]);
        if (q.trail.length > TRAIL) q.trail.shift();
      }
    };

    const onPointer = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const inside = x >= 0 && y >= 0 && x <= r.width && y <= r.height;
      if (inside && !s.stir.on && s.stir.strength === 0) s.stir.at = [x, y];
      s.stir.target = [x, y];
      s.stir.on = inside;
    };
    const onLeave = () => {
      s.stir.on = false;
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();
    if (reduce || !visible) return () => observer.disconnect();

    if (finePointer) {
      window.addEventListener("pointermove", onPointer);
      document.addEventListener("pointerleave", onLeave);
    }
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
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("pointerleave", onLeave);
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
