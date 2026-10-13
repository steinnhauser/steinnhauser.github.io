import { Link, Navigate, useParams } from "react-router";
import styled from "styled-components";
import { reveal } from "../components/reveal";
import Section from "../components/Section";
import { Eyebrow, GlassCard, Muted, Tag, TagList } from "../components/ui";
import { experiences } from "../content";
import { breakpoints, colors } from "../theme";

const Card = styled(GlassCard)`
  max-width: 820px;
  margin: 0 auto;
  padding: clamp(24px, 4vw, 48px);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 8px;

  img {
    width: 64px;
    height: 64px;
    object-fit: cover;
    border-radius: 12px;
    border: 1px solid ${colors.secondary};
    flex-shrink: 0;
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
    margin: 16px 0 0;
    padding-left: 1.2em;
  }
  li {
    line-height: 1.65;
    margin-bottom: 10px;
  }
`;

const Footer = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 40px;
  font-size: 0.9rem;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const NavLink = styled(Link)`
  color: ${colors.accent};

  &:hover {
    color: ${colors.text};
  }
`;

function Experience() {
  const { slug } = useParams();
  const index = experiences.findIndex((e) => e.slug === slug);
  if (index === -1) return <Navigate to="/" replace />;

  const exp = experiences[index];
  const prev = experiences[index - 1];
  const next = experiences[index + 1];

  return (
    <Section curves={exp.curves} tinted>
      {(visible) => (
        <Card style={reveal(visible)}>
          <Header>
            <img src={exp.logo} alt={`${exp.company} logo`} />
            <Muted>{exp.company}</Muted>
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

          <TagList style={{ marginTop: 28 }} aria-label="Technologies">
            {exp.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </TagList>

          <Footer aria-label="Other experience">
            {prev ? (
              <NavLink to={`/experience/${prev.slug}`}>
                ← {prev.tileTitle}, {prev.company}
              </NavLink>
            ) : (
              <NavLink to="/">← Home</NavLink>
            )}
            {next && (
              <NavLink to={`/experience/${next.slug}`}>
                {next.tileTitle}, {next.company} →
              </NavLink>
            )}
          </Footer>
        </Card>
      )}
    </Section>
  );
}

export default Experience;
