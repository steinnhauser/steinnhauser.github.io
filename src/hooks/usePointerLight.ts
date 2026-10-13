import { useEffect } from "react";

// Cursor light for glass surfaces (pointerLight in theme.ts). Every element
// marked `data-light` under the pointer, e.g. a button and the card it sits
// in, gets --lx/--ly: the pointer position inside that element. Only on
// devices with a fine pointer, not for reduced-motion users, and at most
// one update per animation frame.
export default function usePointerLight() {
  useEffect(() => {
    const ok = window.matchMedia?.(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    if (!ok?.matches) return;

    let lit: HTMLElement[] = [];
    let frame = 0;
    let last: PointerEvent | null = null;

    const clear = (els: HTMLElement[]) => {
      for (const el of els) {
        el.style.removeProperty("--lx");
        el.style.removeProperty("--ly");
      }
    };

    const update = () => {
      frame = 0;
      if (!last) return;
      const { clientX: x, clientY: y, target } = last;
      const next: HTMLElement[] = [];
      let el =
        target instanceof Element ? target.closest("[data-light]") : null;
      while (el instanceof HTMLElement) {
        next.push(el);
        el = el.parentElement?.closest("[data-light]") ?? null;
      }
      clear(lit.filter((e) => !next.includes(e)));
      for (const e of next) {
        const r = e.getBoundingClientRect();
        e.style.setProperty("--lx", `${x - r.left}px`);
        e.style.setProperty("--ly", `${y - r.top}px`);
      }
      lit = next;
    };

    const move = (e: PointerEvent) => {
      last = e;
      if (!frame) frame = requestAnimationFrame(update);
    };
    const leave = () => {
      last = null;
      clear(lit);
      lit = [];
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
      clear(lit);
    };
  }, []);
}
