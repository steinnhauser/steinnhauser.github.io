import { Link, Navigate, useParams } from "react-router";
import styled from "styled-components";
import { reveal } from "../components/reveal";
import Section from "../components/Section";
import {
  Eyebrow,
  LiquidPanel,
  Muted,
  PillLink,
  Tag,
  TagList,
} from "../components/ui";
import { experiences } from "../content";
import { breakpoints, colors, fonts } from "../theme";

const Card = styled(LiquidPanel)`
  max-width: 820px;
  margin: 0 auto;
  padding: clamp(24px, 4vw, 48px);
`;

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 18px;
  margin-bottom: 22px;

  img {
    width: 64px;
    height: 64px;
    object-fit: cover;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    flex-shrink: 0;
  }
`;

const BackLink = styled(Link)`
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

  /* Phones: on its own line above the logo. */
  @media (max-width: ${breakpoints.mobile}) {
    order: -1;
    flex-basis: 100%;
    margin: 0 0 4px;
  }
`;

const Position = styled.div`
  & + & {
    margin-top: 36px;
    padding-top: 28px;
    border-top: 1px solid ${colors.secondary}66;
  }

  h1,
  h2 {
    font-size: clamp(1.8rem, 4vw, 2.6rem);
    line-height: 1.15;
    margin: 0 0 4px;
  }
  ul {
    margin: 18px 0 0;
    padding-left: 1.15em;
  }
  li {
    color: rgba(255, 255, 255, 0.86);
    line-height: 1.7;
    margin-bottom: 12px;
    padding-left: 4px;
  }
  li::marker {
    content: "▸";
    color: ${colors.sun};
  }
`;

const TagsLabel = styled.div`
  margin: 32px 0 12px;
  font-family: ${fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${colors.muted};
`;

// Previous / next role, as glass pills.
const Footer = styled.nav`
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

// Link back to the Experience section of the home page.
const toExperience = { pathname: "/" } as const;
const experienceState = { section: "experience" };

function Experience() {
  const { slug } = useParams();
  const index = experiences.findIndex((e) => e.slug === slug);
  if (index === -1) return <Navigate to="/" replace />;

  const exp = experiences[index];
  const prev = experiences[index - 1];
  const next = experiences[index + 1];

  return (
    <Section curves={exp.curves} tinted aurora="tide">
      {(visible) => (
        <Card style={reveal(visible)}>
          <Header>
            <img src={exp.logo} alt={`${exp.company} logo`} />
            <Muted>{exp.company}</Muted>
            <BackLink to={toExperience} state={experienceState}>
              ← All roles
            </BackLink>
          </Header>

          {exp.positions.map((pos, p) => {
            const Heading = p === 0 ? "h1" : "h2";
            return (
              <Position key={pos.title}>
                <Heading>{pos.title}</Heading>
                <Eyebrow>{pos.period}</Eyebrow>
                <ul>
                  {pos.bullets.map((b, i) => (
                    <li
                      key={b}
                      className={visible ? "slide-in" : "slide-out"}
                      style={{
                        transition: `transform ${1000 + 200 * i}ms ease-in-out`,
                      }}
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </Position>
            );
          })}

          <TagsLabel id="technologies">Technologies</TagsLabel>
          <TagList aria-labelledby="technologies">
            {exp.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </TagList>

          <Footer aria-label="Other experience">
            {prev && (
              <PillLink as={Link} to={`/experience/${prev.slug}`}>
                ← {prev.tileTitle}
              </PillLink>
            )}
            {next && (
              <PillLink as={Link} to={`/experience/${next.slug}`}>
                {next.tileTitle} →
              </PillLink>
            )}
          </Footer>
        </Card>
      )}
    </Section>
  );
}

export default Experience;
