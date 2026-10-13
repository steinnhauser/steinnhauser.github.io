import type { ReactNode } from "react";
import styled from "styled-components";
import useElementOnScreen from "../hooks/useElementOnScreen";
import { colors, NAV_HEIGHT } from "../theme";
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

// Fades in/out as a whole. The curves live inside this element so that
// frosted-glass cards (backdrop-filter) can still blur them: an ancestor
// with `filter` becomes the backdrop root.
const Inner = styled.div`
  position: relative;
  display: grid;
  align-content: center;
  padding: calc(${NAV_HEIGHT} + 40px) clamp(16px, 4vw, 48px) 72px;
`;

const CurveLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
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
  id?: string;
  children: (visible: boolean) => ReactNode;
};

function Section({
  curves,
  tinted = false,
  dividerColor,
  id,
  children,
}: Props) {
  const [ref, visible] = useElementOnScreen<HTMLElement>();
  return (
    <Wrapper ref={ref} $tinted={tinted} id={id}>
      {dividerColor && <SectionDivider color={dividerColor} />}
      <Inner className={visible ? "scroll-shown" : "scroll-hidden"}>
        <CurveLayer>
          <Curves variant={curves} visible={visible} color={colors.secondary} />
        </CurveLayer>
        <Content>{children(visible)}</Content>
      </Inner>
    </Wrapper>
  );
}

export default Section;
