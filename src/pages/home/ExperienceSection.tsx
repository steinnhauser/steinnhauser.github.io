import { Link } from "react-router";
import styled, { css, keyframes } from "styled-components";
import { reveal } from "../../components/reveal";
import Section from "../../components/Section";
import {
  Dot,
  GlassCard,
  SectionLabel,
  SectionTitle,
} from "../../components/ui";
import {
  academics,
  type Experience,
  experiences,
  experienceYears,
  shortPeriod,
} from "../../content";
import { paths } from "../../routes";
import { breakpoints, colors, fonts } from "../../theme";

// Career timeline, newest first: one card per employer (consecutive roles
// at the same company share a card, so moves and promotions read as steps),
// on a spine that runs from the present (sun gold) back to the physics
// studies it started from (slate blue).

type Group = { company: string; logo: string; roles: Experience[] };

const groups = experiences.reduce<Group[]>((all, exp) => {
  const last = all.at(-1);
  if (last && last.company === exp.company) last.roles.push(exp);
  else all.push({ company: exp.company, logo: exp.logo, roles: [exp] });
  return all;
}, []);

// Where it started: the physics degrees at the University of Oslo.
const studies = academics.filter(
  (a) => a.institution.startsWith("University of Oslo") && /Sc\./.test(a.title),
);
const studyYears = experienceYears({
  positions: studies.map((a) => ({
    title: a.title,
    period: a.period,
    bullets: [],
  })),
});

// Widths of the year column and of the rail that carries the spine.
const YEARS = "116px";
const RAIL = "44px";
const RAIL_MOBILE = "26px";

const List = styled.ol<{ $grow: boolean }>`
  --years: ${YEARS};
  --rail: ${RAIL};
  position: relative;
  display: grid;
  gap: clamp(18px, 2.4vw, 26px);
  list-style: none;
  margin: 0;
  padding: 0;

  /* The spine: draws itself downwards when the section comes into view,
     like the background curves. */
  &::before {
    content: "";
    position: absolute;
    top: 14px;
    bottom: 10px;
    left: calc(var(--years) + var(--rail) / 2 - 1px);
    width: 2px;
    border-radius: 2px;
    background: linear-gradient(
      180deg,
      ${colors.sun},
      ${colors.accent} 30%,
      ${colors.secondary} 80%,
      ${colors.secondary}00
    );
    transform-origin: top;
    transform: scaleY(${(p) => (p.$grow ? 1 : 0)});
    transition: transform 1.6s cubic-bezier(0.2, 0.7, 0.2, 1);
  }

  @media (max-width: ${breakpoints.mobile}) {
    --years: 0px;
    --rail: ${RAIL_MOBILE};
  }
`;

// Year range | node on the spine | card. Each part has a fixed column,
// so hiding the years on phones doesn't shift the others.
const Item = styled.li`
  display: grid;
  grid-template-columns: var(--years) var(--rail) minmax(0, 1fr);
  align-items: start;

  > :nth-child(1) {
    grid-column: 1;
  }
  > :nth-child(2) {
    grid-column: 2;
  }
  > :nth-child(3) {
    grid-column: 3;
  }
`;

// Year range beside the node; inside the card on phones.
const Years = styled.div<{ $current?: boolean; $origin?: boolean }>`
  padding-top: ${(p) => (p.$origin ? "4px" : "22px")};
  text-align: right;
  font-family: ${fonts.mono};
  font-size: 0.8rem;
  letter-spacing: 0.03em;
  color: ${(p) => (p.$current ? colors.sun : colors.muted)};
  white-space: nowrap;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 ${colors.sun}66, 0 0 18px ${colors.sun}55; }
  50% { box-shadow: 0 0 0 7px ${colors.sun}00, 0 0 26px ${colors.sun}77; }
`;

// A node on the spine. The current role glows like the low sun.
const Node = styled.span<{ $current?: boolean; $hollow?: boolean }>`
  justify-self: center;
  margin-top: 24px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${colors.primary};
  border: 2px solid ${colors.accent};
  box-shadow: 0 0 0 4px ${colors.primary};

  ${(p) =>
    p.$current &&
    css`
      background: ${colors.sun};
      border-color: #f6cd85;
      animation: ${glow} 2.8s ease-in-out infinite;
    `}
  ${(p) =>
    p.$hollow &&
    css`
      margin-top: 6px;
      border-color: ${colors.secondary};
      border-style: dashed;
    `}
`;

const Card = styled(GlassCard)`
  padding: clamp(16px, 2.2vw, 22px) clamp(16px, 2.4vw, 26px);
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 6px;

  h3 {
    margin: 0;
    font-size: 1.05rem;
    font-weight: 600;
    letter-spacing: -0.01em;
  }
  /* Year range, on phones only (the column holds it on wider screens). */
  span {
    display: none;
    margin-left: auto;
    font-family: ${fonts.mono};
    font-size: 0.74rem;
    color: ${colors.muted};
    white-space: nowrap;
  }
  @media (max-width: ${breakpoints.mobile}) {
    span {
      display: block;
    }
  }
`;

// Company logo in the slate duotone of the old tiles; full colour while
// the card is hovered or a role in it has focus.
const Logo = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.14);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(1) contrast(1.05) brightness(0.8);
    transition: filter 500ms ease;
  }
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: ${colors.secondary};
    mix-blend-mode: color;
    opacity: 0.85;
    transition: opacity 500ms ease;
  }
  ${Card}:hover &::after,
  ${Card}:focus-within &::after {
    opacity: 0;
  }
  ${Card}:hover & img,
  ${Card}:focus-within & img {
    filter: none;
  }
`;

const Roles = styled.ol`
  display: grid;
  gap: 4px;
  list-style: none;
  margin: 0 -12px;
  padding: 0;
`;

// One experience page: its positions, summary and stack, as a link.
const Role = styled(Link)`
  position: relative;
  display: block;
  padding: 12px 40px 12px 12px;
  border-radius: 12px;
  color: ${colors.text};
  transition: background 250ms ease;

  &:hover,
  &:focus-visible {
    color: ${colors.text};
    background: rgba(255, 255, 255, 0.045);
  }
  p {
    margin: 6px 0 0;
    font-size: 0.92rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.78);
    max-width: 68ch;
  }
  /* Arrow to the details page. */
  &::after {
    content: "→";
    position: absolute;
    top: 12px;
    right: 14px;
    font-family: ${fonts.mono};
    color: ${colors.muted};
    transition:
      translate 250ms ease,
      color 250ms ease;
  }
  &:hover::after,
  &:focus-visible::after {
    translate: 4px 0;
    color: ${colors.sun};
  }
`;

// A position title and its dates. With several positions in a card, each
// gets a small step marker, so moves and promotions read as a sequence.
const Position = styled.div<{ $step: boolean }>`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 2px 12px;
  ${(p) =>
    p.$step &&
    css`
      padding-left: 18px;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.5em;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        border: 1.5px solid ${colors.accent};
      }
    `}

  strong {
    font-family: ${fonts.display};
    font-size: 1.12rem;
    font-weight: 600;
  }
  & + & {
    margin-top: 4px;
  }
`;

const Period = styled.span`
  font-family: ${fonts.mono};
  font-size: 0.76rem;
  color: ${colors.muted};
  white-space: nowrap;
`;

const Now = styled.span`
  font-family: ${fonts.mono};
  font-size: 0.66rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 1px 8px;
  border-radius: 999px;
  color: ${colors.sun};
  border: 1px solid ${colors.sun}80;
  background: ${colors.sun}14;
`;

const Stack = styled.div`
  margin-top: 8px;
  font-family: ${fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.02em;
  color: ${colors.accent};
`;

// The first point of the timeline: studies, linking to Education.
const Origin = styled(Link)`
  display: block;
  padding: 2px 0 0;
  color: ${colors.muted};
  font-size: 0.92rem;
  line-height: 1.6;

  strong {
    color: ${colors.text};
    font-weight: 500;
  }
  span {
    color: ${colors.accent};
    white-space: nowrap;
  }
  &:hover {
    color: ${colors.text};
  }
  &:hover span {
    color: ${colors.sun};
  }
`;

// "2020 - 2023" with an en dash, like the role periods.
const dash = (years: string) => years.replace(" - ", " – ");

const isCurrent = (exp: Experience) =>
  exp.positions.some((p) => /present/i.test(p.period));

function RoleLink({ exp, steps }: { exp: Experience; steps: boolean }) {
  return (
    <Role to={paths.experience(exp.slug)}>
      {exp.positions.map((pos) => (
        <Position key={pos.title} $step={steps}>
          <strong>{pos.title}</strong>
          {/present/i.test(pos.period) && <Now>now</Now>}
          <Period>{shortPeriod(pos.period)}</Period>
        </Position>
      ))}
      <p>{exp.summary}</p>
      <Stack aria-label="Stack">{exp.tags.slice(0, 4).join(" · ")}</Stack>
    </Role>
  );
}

function ExperienceSection() {
  return (
    <Section id="experience" curves={2} tinted slant compact>
      {(visible) => (
        <>
          <div style={reveal(visible)}>
            <SectionLabel>01 / experience</SectionLabel>
            <SectionTitle>
              From physics to platforms<Dot>.</Dot>
            </SectionTitle>
          </div>
          <List $grow={visible}>
            {groups.map((group, i) => {
              const positions = group.roles.flatMap((r) => r.positions);
              const current = group.roles.some(isCurrent);
              const years = dash(experienceYears({ positions }));
              const slide = reveal(visible, i + 1, "translateX(18px)");
              return (
                <Item key={group.company}>
                  <Years $current={current} style={reveal(visible, i + 1)}>
                    {years}
                  </Years>
                  <Node
                    $current={current}
                    style={reveal(visible, i + 1, "scale(0)")}
                  />
                  <Card as="article" style={slide}>
                    <Header>
                      <Logo>
                        <img src={group.logo} alt="" width={40} height={40} />
                      </Logo>
                      <h3>{group.company}</h3>
                      <span>{years}</span>
                    </Header>
                    <Roles>
                      {group.roles.map((exp) => (
                        <li key={exp.slug}>
                          <RoleLink exp={exp} steps={positions.length > 1} />
                        </li>
                      ))}
                    </Roles>
                  </Card>
                </Item>
              );
            })}
            <Item style={reveal(visible, groups.length + 1)}>
              <Years $origin>{dash(studyYears)}</Years>
              <Node $hollow />
              <Origin to={paths.section("education")}>
                <strong>Where it started:</strong> physics at the University of
                Oslo, a BSc in physics and astronomy and then an MSc in
                computational science. <span>Education ↓</span>
              </Origin>
            </Item>
          </List>
        </>
      )}
    </Section>
  );
}

export default ExperienceSection;
