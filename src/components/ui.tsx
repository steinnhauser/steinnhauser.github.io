import { Link } from "react-router";
import styled, { css } from "styled-components";
import {
  aurora,
  breakpoints,
  colors,
  fonts,
  glass,
  hoverLift,
  pointerLight,
} from "../theme";

// `data-light` opts a surface into the cursor light (usePointerLight).
type LightProps = { "data-light"?: string };
const lightAttrs: LightProps = { "data-light": "" };

export const GlassCard = styled.div.attrs<LightProps>(lightAttrs)`
  ${glass}
  ${hoverLift}
  padding: 20px 24px;
`;

// The most refined glass in the project, for large reading panels: deeper
// blur, a larger radius, and a soft caustic sheen across the top-left as if
// light were bending through a thick pane.
export const LiquidPanel = styled.div.attrs<LightProps>(lightAttrs)`
  ${glass}
  border-radius: 26px;
  padding: clamp(24px, 4vw, 44px);
  background:
    ${pointerLight(520, 0.11)},
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

// The gold punctuation in "I'm Steinn," / "About me.", lit like the low sun.
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

// Monospace technology tag. `$core` marks the core stack with a sunlit rim.
export const Tag = styled.li<{ $core?: boolean }>`
  font-family: ${fonts.mono};
  font-size: 0.76rem;
  padding: 4px 11px;
  border-radius: 999px;
  border: 1px solid ${colors.secondary};
  background: ${colors.secondary}2e;
  white-space: nowrap;

  ${(p) =>
    p.$core &&
    css`
      border-color: ${colors.sun}b3;
      background: ${colors.sun}1a;
      color: ${colors.text};
      font-weight: 500;
    `}
`;

// Glass pill button/link. `$primary` tints it with sunset colours.
export const PillLink = styled.a.attrs<LightProps>(lightAttrs)<{
  $primary?: boolean;
}>`
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
        ${pointerLight(200, 0.18)},
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

// A quiet inset tile inside a glass panel: the flow steps of a featured
// project and the key figures on project pages.
export const insetTile = css`
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.04);
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.09),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
`;

// A row of pill buttons; full width on phones.
export const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  @media (max-width: ${breakpoints.mobile}) {
    > * {
      flex: 1 1 auto;
      justify-content: center;
    }
  }
`;

// The pieces shared by the experience and project pages.

// "← All roles" / "← Selected work": back to a home section, at the right
// of the page header (on its own line above it on phones).
export const BackLink = styled(Link)`
  margin-left: auto;
  font-family: ${fonts.mono};
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${colors.muted};
  white-space: nowrap;

  &:hover {
    color: ${colors.sun};
  }

  @media (max-width: ${breakpoints.mobile}) {
    order: -1;
    flex-basis: 100%;
    margin: 0 0 4px;
  }
`;

// Small label above a group, such as "Technologies".
export const FieldLabel = styled.div`
  margin: 32px 0 12px;
  font-family: ${fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${colors.muted};
`;

// Reading list with gold triangle markers.
export const BulletList = styled.ul`
  margin: 16px 0 0;
  padding-left: 1.15em;

  li {
    color: rgba(255, 255, 255, 0.86);
    line-height: 1.7;
    margin-bottom: 11px;
    padding-left: 4px;
  }
  li::marker {
    content: "▸";
    color: ${colors.sun};
  }
`;

// Previous / next pills at the foot of a page.
export const Pager = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 40px;
  padding-top: 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.9rem;

  > :only-child {
    margin-left: auto;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;

    > * {
      justify-content: center;
    }
  }
`;
