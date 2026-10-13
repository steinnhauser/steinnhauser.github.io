import { css } from "styled-components";

// Palette taken from the owner's landscape photography: basalt black, slate
// blue sky and sea, and the warm low sun of a coastal sunset.
export const colors = {
  primary: "#131316",
  secondary: "#3f5787",
  // Secondary at ~20% opacity, used for alternating section backgrounds.
  tint: "#3f578733",
  text: "#ffffff",
  muted: "rgba(255, 255, 255, 0.7)",
  accent: "#8fa8dc",
  // Warm sunlight. Used sparingly: eyebrows, highlights, primary actions.
  sun: "#f0b860",
};

// Aurora glows behind the glass (see Aurora.tsx): the colours of the
// coastal sunset, in the soft mesh-gradient style of modern product pages.
export const aurora = {
  peach: "#f2a46b",
  rose: "#e0708f",
  lavender: "#8f7ae6",
  blue: "#4f6fb8",
};

export const fonts = {
  body: `"Poppins", system-ui, sans-serif`,
  mono: `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace`,
};

export const breakpoints = {
  mobile: "760px",
};

export const NAV_HEIGHT = "72px";

// Liquid-glass surface: a strongly blurred and saturated view of whatever is
// behind it (curves, photos, aurora), a soft sheen from the top-left, and a
// specular rim drawn by ::before that is bright at the top-left and picks up
// the slate blue and sun gold at the bottom-right.
//
// Rules:
// - Never fade an *ancestor* of a glass element with `opacity` or `filter`;
//   browsers skip the backdrop blur while that runs. Fade the glass element
//   itself (see `reveal`).
// - The rim uses ::before. Components built on `glass` use ::after for their
//   own decoration.
export const glass = css`
  position: relative;
  background:
    linear-gradient(
      155deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.035) 40%,
      rgba(255, 255, 255, 0.02) 65%,
      rgba(255, 255, 255, 0.05) 100%
    ),
    rgba(19, 19, 22, 0.28);
  backdrop-filter: blur(18px) saturate(170%);
  -webkit-backdrop-filter: blur(18px) saturate(170%);
  border-radius: 16px;
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.38),
    inset 0 1px 0 rgba(255, 255, 255, 0.14),
    inset 0 -1px 0 rgba(255, 255, 255, 0.03);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: inherit;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.42),
      rgba(255, 255, 255, 0.1) 28%,
      rgba(255, 255, 255, 0.03) 55%,
      ${colors.secondary}cc 80%,
      ${colors.sun}80
    );
    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
`;

// Hover lift for glass on devices with a real pointer (avoids "sticky" hover
// states on touch screens). Uses `translate`, not `transform`, so it combines
// with reveal()'s inline transform; reveal() lists it in its transitions.
export const hoverLift = css`
  transition:
    translate 300ms ease,
    box-shadow 300ms ease;

  @media (hover: hover) {
    &:hover {
      translate: 0 -3px;
      box-shadow:
        0 18px 50px rgba(0, 0, 0, 0.45),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }
  }
`;
