import styled, { css } from "styled-components";
import { aurora, breakpoints, colors, fonts, glass, hoverLift } from "../theme";

export const GlassCard = styled.div`
  ${glass}
  ${hoverLift}
  padding: 20px 24px;
`;

// The most refined glass in the project, for large reading panels: deeper
// blur, a larger radius, and a soft caustic sheen across the top-left as if
// light were bending through a thick pane.
export const LiquidPanel = styled.div`
  ${glass}
  border-radius: 26px;
  padding: clamp(24px, 4vw, 44px);
  background:
    radial-gradient(
      120% 70% at 0% 0%,
      rgba(255, 255, 255, 0.13),
      transparent 55%
    ),
    radial-gradient(
      80% 60% at 100% 100%,
      ${aurora.lavender}1f,
      transparent 60%
    ),
    linear-gradient(
      155deg,
      rgba(255, 255, 255, 0.07),
      rgba(255, 255, 255, 0.02) 50%,
      rgba(255, 255, 255, 0.05)
    ),
    rgba(19, 19, 22, 0.34);
  backdrop-filter: blur(26px) saturate(185%);
  -webkit-backdrop-filter: blur(26px) saturate(185%);
  box-shadow:
    0 24px 70px rgba(0, 0, 0, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.22),
    inset 0 -1px 0 rgba(255, 255, 255, 0.04),
    inset 0 0 40px rgba(255, 255, 255, 0.025);
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  line-height: 1.1;
  margin: 0 0 32px;
`;

// The full stop in "Welcome." / "About me.", lit like the low sun.
export const Dot = styled.span`
  color: ${colors.sun};
`;

export const Muted = styled.span`
  color: ${colors.muted};
`;

// Small monospace label above titles: dates, roles, section numbers.
export const Eyebrow = styled.div`
  font-family: ${fonts.mono};
  color: ${colors.sun};
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

// "01 / experience" style section marker, with a short rule after it.
export const SectionLabel = styled(Eyebrow)`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;

  &::after {
    content: "";
    width: 48px;
    height: 1px;
    background: ${colors.sun}99;
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Tag = styled.li`
  font-family: ${fonts.mono};
  font-size: 0.76rem;
  padding: 4px 11px;
  border-radius: 999px;
  border: 1px solid ${colors.secondary};
  background: ${colors.secondary}2e;
  white-space: nowrap;
`;

// Glass pill button/link. `$primary` tints it with sunset colours.
export const PillLink = styled.a<{ $primary?: boolean }>`
  ${glass}
  ${hoverLift}
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 11px 22px;
  border: 0;
  border-radius: 999px;
  color: ${colors.text};
  font-weight: 400;
  cursor: pointer;

  &:hover {
    color: ${colors.text};
  }
  svg {
    width: 18px;
    height: 18px;
  }

  ${(p) =>
    p.$primary &&
    css`
      background:
        linear-gradient(120deg, ${colors.sun}40, ${aurora.rose}33),
        rgba(19, 19, 22, 0.3);
      box-shadow:
        0 10px 32px ${aurora.peach}2e,
        inset 0 1px 0 rgba(255, 255, 255, 0.25);
    `}
`;

export const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.6fr);
  gap: clamp(24px, 5vw, 64px);
  align-items: center;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;
