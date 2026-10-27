import { Link, Navigate, useParams } from "react-router";
import styled from "styled-components";
import ExternalLink from "../components/ExternalLink";
import { reveal } from "../components/reveal";
import Screenshot from "../components/Screenshot";
import Section from "../components/Section";
import { Eyebrow, LiquidPanel, PillLink, Tag, TagList } from "../components/ui";
import { projects } from "../content";
import { breakpoints, colors, fonts } from "../theme";

// Projects that have their own page, in Selected Work order.
const pages = projects.flatMap((p) => (p.page ? [{ ...p, page: p.page }] : []));

const Card = styled(LiquidPanel)`
  max-width: 920px;
  margin: 0 auto;
  padding: clamp(24px, 4vw, 48px);

  h1 {
    font-size: clamp(1.9rem, 4.4vw, 2.8rem);
    line-height: 1.12;
    margin: 10px 0 18px;
  }
  > p {
    line-height: 1.75;
    margin: 0 0 28px;
    max-width: 72ch;
  }
`;

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 18px;
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

  @media (max-width: ${breakpoints.mobile}) {
    order: -1;
    flex-basis: 100%;
    margin: 0 0 4px;
  }
`;

// Key figures, as in the hero's band but quieter.
const Figures = styled.dl`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(180px, 100%), 1fr));
  gap: 12px;
  margin: 28px 0 8px;

  div {
    padding: 14px 16px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.04);
    box-shadow:
      inset 0 0 0 1px rgba(255, 255, 255, 0.09),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }
  dt {
    font-family: ${fonts.mono};
    font-size: clamp(1.3rem, 2.4vw, 1.7rem);
    font-weight: 500;
    color: ${colors.sun};
    white-space: nowrap;
  }
  dd {
    margin: 4px 0 0;
    font-size: 0.84rem;
    line-height: 1.4;
    color: ${colors.muted};
  }
`;

const Part = styled.section`
  margin-top: 34px;
  padding-top: 26px;
  border-top: 1px solid ${colors.secondary}66;

  h2 {
    font-size: clamp(1.25rem, 2.4vw, 1.55rem);
    margin: 0;
  }
  ul {
    margin: 14px 0 0;
    padding-left: 1.15em;
  }
  li {
    color: rgba(255, 255, 255, 0.86);
    line-height: 1.7;
    margin-bottom: 10px;
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

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;

  @media (max-width: ${breakpoints.mobile}) {
    > * {
      flex: 1 1 auto;
      justify-content: center;
    }
  }
`;

// Previous / next project, as on the experience pages.
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

// Back to the Selected Work section of the home page.
const toWork = { pathname: "/" } as const;
const workState = { section: "work" };

// Short name for prev/next links: the part of the title before the colon.
const shortTitle = (title: string) => title.split(":")[0];

function Project() {
  const { slug } = useParams();
  const index = pages.findIndex((p) => p.page.slug === slug);
  if (index === -1) return <Navigate to="/" replace />;

  const project = pages[index];
  const { page } = project;
  const prev = pages[index - 1];
  const next = pages[index + 1];

  return (
    <Section curves={page.curves} tinted aurora="tide">
      {(visible) => (
        <Card as="article" style={reveal(visible)}>
          <Header>
            <Eyebrow>{project.context}</Eyebrow>
            <BackLink to={toWork} state={workState}>
              ← Selected work
            </BackLink>
          </Header>
          <h1>{project.title}</h1>
          <p>{page.intro}</p>

          {project.image && <Screenshot {...project.image} />}

          <Figures aria-label="Key figures">
            {page.figures.map((f) => (
              <div key={f.value}>
                <dt>{f.value}</dt>
                <dd>{f.label}</dd>
              </div>
            ))}
          </Figures>

          {page.sections.map((part) => (
            <Part key={part.title}>
              <h2>{part.title}</h2>
              <ul>
                {part.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Part>
          ))}

          <TagsLabel id="technologies">Technologies</TagsLabel>
          <TagList aria-labelledby="technologies">
            {project.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </TagList>

          {project.links && (
            <Actions>
              {project.links.map((l, i) => (
                <PillLink
                  key={l.href}
                  as={ExternalLink}
                  href={l.href}
                  $primary={i === 0}
                >
                  {l.label} ↗
                </PillLink>
              ))}
            </Actions>
          )}

          <Footer aria-label="Other projects">
            {prev && (
              <PillLink as={Link} to={`/project/${prev.page.slug}`}>
                ← {shortTitle(prev.title)}
              </PillLink>
            )}
            {next && (
              <PillLink as={Link} to={`/project/${next.page.slug}`}>
                {shortTitle(next.title)} →
              </PillLink>
            )}
          </Footer>
        </Card>
      )}
    </Section>
  );
}

export default Project;
