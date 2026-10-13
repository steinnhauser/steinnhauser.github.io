import type { ReactNode } from "react";
import styled from "styled-components";
import useElementOnScreen from "../hooks/useElementOnScreen";
import { breakpoints, colors, NAV_HEIGHT } from "../theme";
import Aurora, { type AuroraVariant } from "./Aurora";
import Curves, { type CurveVariant } from "./Curves";
import { SectionDivider } from "./Icons";

const Wrapper = styled.section<{ $tinted: boolean }>`
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  display: grid;
  background: ${(p) => (p.$tinted ? colors.tint : "transparent")};
  overflow: hidden;
  scroll-margin-top: ${NAV_HEIGHT};
`;

// No opacity/filter here or on any ancestor of the content: the glass cards
// need an unfaded backdrop to blur. Content reveals itself via `reveal()`.
const Inner = styled.div`
  position: relative;
  display: grid;
  align-content: center;
  padding: calc(${NAV_HEIGHT} + 40px) clamp(16px, 4vw, 48px) 72px;
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
  // Colour of the section above, drawn as a slanted divider.
  dividerColor?: string;
  photo?: SectionPhoto;
  // Coloured glows behind the glass.
  aurora?: AuroraVariant;
  id?: string;
  children: (visible: boolean) => ReactNode;
};

function Section({
  curves,
  tinted = false,
  dividerColor,
  photo,
  aurora,
  id,
  children,
}: Props) {
  const [ref, visible] = useElementOnScreen<HTMLElement>();
  return (
    <Wrapper ref={ref} $tinted={tinted} id={id}>
      {dividerColor && <SectionDivider color={dividerColor} />}
      <Inner>
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
