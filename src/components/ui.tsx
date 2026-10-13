import styled from "styled-components";
import { breakpoints, colors, glass } from "../theme";

export const GlassCard = styled.div`
  ${glass}
  padding: 20px 24px;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  line-height: 1.1;
  margin: 0 0 32px;
`;

export const Muted = styled.span`
  color: ${colors.muted};
`;

export const Eyebrow = styled.div`
  color: ${colors.accent};
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
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
  font-size: 0.82rem;
  padding: 4px 12px;
  border-radius: 999px;
  border: 1px solid ${colors.secondary};
  background: ${colors.secondary}2e;
  white-space: nowrap;
`;

export const PillLink = styled.a`
  ${glass}
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  border-radius: 999px;
  color: ${colors.text};
  font-weight: 400;
  cursor: pointer;
  transition: border-color 250ms ease, transform 250ms ease;

  &:hover {
    color: ${colors.text};
    border-color: ${colors.accent};
    transform: translateY(-2px);
  }
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
