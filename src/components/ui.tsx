import styled, { css } from "styled-components";
import { breakpoints, colors, fonts, glass } from "../theme";

export const GlassCard = styled.div`
  ${glass}
  padding: 20px 24px;
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

export const PillLink = styled.a<{ $primary?: boolean }>`
  ${glass}
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  border-radius: 999px;
  color: ${colors.text};
  font-weight: 400;
  cursor: pointer;
  transition:
    border-color 250ms ease,
    background-color 250ms ease,
    transform 250ms ease;

  &:hover {
    color: ${colors.text};
    border-color: ${colors.accent};
    transform: translateY(-2px);
  }

  ${(p) =>
    p.$primary &&
    css`
      border-color: ${colors.sun}b3;
      background: ${colors.sun}1f;

      &:hover {
        border-color: ${colors.sun};
        background: ${colors.sun}33;
      }
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
