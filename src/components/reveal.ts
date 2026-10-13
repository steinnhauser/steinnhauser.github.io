import type { CSSProperties } from "react";

// Scroll-reveal styles for one element of a section. Each element fades and
// slides in on its own, staggered by `index`, rather than fading the whole
// section: fading an ancestor would switch off the frosted-glass blur of
// the cards inside it until the fade finished.
//
// The fade is short and the slide is long: a half-transparent glass card
// shows the sharp lines behind it, so cards become solid frosted glass
// quickly and spend the rest of the motion sliding into place.
export function reveal(
  visible: boolean,
  index = 0,
  offset = "translateY(14px)",
): CSSProperties {
  const slide = 600 + 120 * index;
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : offset,
    // translate/box-shadow keep the glass hover lift (hoverLift) animated,
    // since an inline transition replaces the stylesheet's.
    transition: `opacity 350ms ease-out, transform ${slide}ms ease-in-out, translate 300ms ease, box-shadow 300ms ease`,
  };
}
