import { css } from "styled-components";

// Palette taken from the owner's landscape photography: basalt black, slate
// blue sky and sea, and the warm low sun of a coastal sunset.
export const colors = {
  primary: "#131316",
  secondary: "#3f5787",
  // Secondary at ~20% opacity, used for alternating section backgrounds.
  tint: "#3f578733",
  text: "#ffffff",
  muted: "rgba(255, 255, 255, 0.68)",
  accent: "#8fa8dc",
  // Warm sunlight. Used sparingly: eyebrows, highlights, primary actions.
  sun: "#f0b860",
};

export const fonts = {
  body: `"Poppins", system-ui, sans-serif`,
  mono: `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace`,
};

export const breakpoints = {
  mobile: "760px",
};

export const NAV_HEIGHT = "72px";

// Frosted-glass surface. Sits on top of the background curves so they show
// through softly blurred. Never fade an *ancestor* of a glass element with
// `opacity` or `filter`: browsers skip the backdrop blur while that runs.
// Fade the glass element itself instead (see `reveal`).
export const glass = css`
  background: rgba(255, 255, 255, 0.045);
  backdrop-filter: blur(14px) saturate(140%);
  -webkit-backdrop-filter: blur(14px) saturate(140%);
  border: 1px solid ${colors.secondary}99;
  border-radius: 14px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
`;
