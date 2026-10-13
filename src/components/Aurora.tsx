import styled, { keyframes } from "styled-components";
import { aurora as a } from "../theme";

// Soft, slowly drifting colour glows that sit behind the liquid glass, in
// the style of a grainy mesh gradient (the page-wide grain overlay supplies
// the grain). Pure CSS, so it costs no image bytes. Only `transform` is
// animated, which stays cheap on the GPU; reduced-motion users get a
// still image (see index.css).

export type AuroraVariant = "dusk" | "tide";

// Each variant is two layers of radial gradients that drift in opposite
// directions, so the colours slowly shift against each other.
const VARIANTS: Record<AuroraVariant, [string, string]> = {
  // A sunset arc rising from the bottom edge, like the GitLab sign-in page
  // but at night. The About page's showpiece.
  dusk: [
    `radial-gradient(46% 52% at 22% 92%, ${a.peach}b3, transparent 70%),
     radial-gradient(40% 50% at 50% 84%, ${a.rose}a6, transparent 70%),
     radial-gradient(42% 52% at 80% 78%, ${a.lavender}a6, transparent 70%)`,
    `radial-gradient(36% 42% at 88% 26%, ${a.blue}99, transparent 70%),
     radial-gradient(30% 36% at 8% 40%, ${a.rose}66, transparent 70%),
     radial-gradient(34% 30% at 46% 10%, ${a.lavender}4d, transparent 70%)`,
  ],
  // Cool sea and sky with a single warm glint.
  tide: [
    `radial-gradient(36% 42% at 16% 80%, ${a.blue}80, transparent 70%),
     radial-gradient(34% 40% at 84% 22%, ${a.lavender}73, transparent 70%)`,
    `radial-gradient(26% 30% at 62% 92%, ${a.rose}4d, transparent 70%),
     radial-gradient(22% 26% at 30% 14%, ${a.peach}40, transparent 70%)`,
  ],
};

const drift = keyframes`
  from { transform: translate3d(-3%, 2%, 0) scale(1); }
  to   { transform: translate3d(3%, -3%, 0) scale(1.08); }
`;

const Wrapper = styled.div<{ $visible: boolean }>`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
  opacity: ${(p) => (p.$visible ? 1 : 0.35)};
  transition: opacity 1.4s ease;
`;

const Layer = styled.div<{ $background: string; $reverse?: boolean }>`
  position: absolute;
  inset: -12%;
  background: ${(p) => p.$background};
  animation: ${drift} ${(p) => (p.$reverse ? 26 : 19)}s ease-in-out infinite
    alternate${(p) => (p.$reverse ? "-reverse" : "")};
  will-change: transform;
`;

function Aurora({
  variant,
  visible,
}: {
  variant: AuroraVariant;
  visible: boolean;
}) {
  const [front, back] = VARIANTS[variant];
  return (
    <Wrapper $visible={visible} aria-hidden="true">
      <Layer $background={back} $reverse />
      <Layer $background={front} />
    </Wrapper>
  );
}

export default Aurora;
