import type { ReactNode } from "react";
import styled, { css } from "styled-components";
import useElementOnScreen from "../hooks/useElementOnScreen";
import { breakpoints, colors, NAV_HEIGHT, SLANT, slantTop } from "../theme";
import Aurora, { type AuroraVariant } from "./Aurora";
import Curves, { type CurveVariant } from "./Curves";

const Wrapper = styled.section<{
  $tinted: boolean;
  $slant: boolean;
  $compact: boolean;
}>`
  position: relative;
  display: grid;
  ${(p) =>
    !p.$compact &&
    css`
      min-height: 100vh;
      min-height: 100svh;
    `}
  /* Opaque, so a slanted section fully covers the strip it overlaps. */
  background-color: ${colors.primary};
  background-image: ${(p) =>
    p.$tinted ? `linear-gradient(${colors.tint}, ${colors.tint})` : "none"};
  /* clip (not hidden) keeps the curves contained without becoming a scroll
     container, so position: sticky still works inside sections. */
  overflow: hidden;
  overflow: clip;
  scroll-margin-top: ${NAV_HEIGHT};

  ${(p) => p.$slant && slantTop}
`;

// No opacity/filter here or on any ancestor of the content: the glass cards
// need an unfaded backdrop to blur. Content reveals itself via `reveal()`.
const Inner = styled.div<{ $compact: boolean }>`
  position: relative;
  display: grid;
  align-content: center;
  padding: ${(p) =>
    p.$compact
      ? `calc(${SLANT} + clamp(64px, 8vw, 112px)) clamp(16px, 4vw, 48px) clamp(64px, 8vw, 112px)`
      : `calc(${NAV_HEIGHT} + 40px) clamp(16px, 4vw, 48px) 72px`};
`;

// A background photo: a large source plus a small one for narrow screens
// (the browser only downloads the one its media query matches).
export type SectionPhoto = { large: string; small: string };

// One of the owner's landscape photos, darkened and partly desaturated so it
// reads as texture behind the curves rather than as a picture. Fainter on
// phones, where text sits directly on top of it.
const Photo = styled.div<{ $photo: SectionPhoto; $visible: boolean }>`
  position: absolute;
  inset: 0;
  z-index: 0;
  background: url(${(p) => p.$photo.large}) center / cover no-repeat;
  filter: grayscale(0.25) brightness(0.6) contrast(1.05);
  opacity: ${(p) => (p.$visible ? 0.27 : 0)};

  @media (max-width: ${breakpoints.mobile}) {
    background-image: url(${(p) => p.$photo.small});
    opacity: ${(p) => (p.$visible ? 0.2 : 0)};
  }
  transition: opacity 1.2s ease;
  mask-image: radial-gradient(
    ellipse 85% 80% at 50% 50%,
    #000 35%,
    transparent 100%
  );
  pointer-events: none;
`;

const CurveLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pointer-events: none;

  svg {
    width: 100%;
    min-width: 900px;
    flex-shrink: 0;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`;

type Props = {
  curves: CurveVariant;
  tinted?: boolean;
  // Diagonal top edge that overlaps the section above.
  slant?: boolean;
  // Height follows the content (with generous padding) instead of filling
  // the screen. For every section below the first on a page.
  compact?: boolean;
  photo?: SectionPhoto;
  // Coloured glows behind the glass.
  aurora?: AuroraVariant;
  id?: string;
  children: (visible: boolean) => ReactNode;
};

function Section({
  curves,
  tinted = false,
  slant = false,
  compact = false,
  photo,
  aurora,
  id,
  children,
}: Props) {
  const [ref, visible] = useElementOnScreen<HTMLElement>();
  return (
    <Wrapper
      ref={ref}
      id={id}
      $tinted={tinted}
      $slant={slant}
      $compact={compact}
    >
      <Inner $compact={compact}>
        {photo && (
          <Photo $photo={photo} $visible={visible} aria-hidden="true" />
        )}
        {aurora && <Aurora variant={aurora} visible={visible} />}
        <CurveLayer>
          <Curves variant={curves} visible={visible} color={colors.secondary} />
        </CurveLayer>
        <Content>{children(visible)}</Content>
      </Inner>
    </Wrapper>
  );
}

export default Section;
