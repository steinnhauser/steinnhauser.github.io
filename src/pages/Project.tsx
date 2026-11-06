import { Link, useParams } from "react-router";
import styled from "styled-components";
import ExternalLink from "../components/ExternalLink";
import { reveal } from "../components/reveal";
import Screenshot from "../components/Screenshot";
import Section from "../components/Section";
import {
  BackLink,
  BulletList,
  ButtonRow,
  Eyebrow,
  FieldLabel,
  insetTile,
  LiquidPanel,
  Pager,
  PillLink,
  Tag,
  TagList,
} from "../components/ui";
import { shortTitle } from "../content";
import { paths, projectPages as pages } from "../routes";
import NotFound from "./NotFound";
import { colors, fonts } from "../theme";

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

// Key figures, as in the hero's band but quieter.
const Figures = styled.dl`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(180px, 100%), 1fr));
  gap: 12px;
  margin: 28px 0 8px;

  div {
    ${insetTile}
    padding: 14px 16px;
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
`;

const Actions = styled(ButtonRow)`
  margin-top: 28px;
`;

function Project() {
  const { slug } = useParams();
  const index = pages.findIndex((p) => p.page.slug === slug);
  if (index === -1) return <NotFound />;

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
            <BackLink to={paths.section("work")}>← Selected work</BackLink>
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
              <BulletList>
                {part.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </BulletList>
            </Part>
          ))}

          <FieldLabel id="technologies">Technologies</FieldLabel>
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

          <Pager aria-label="Other projects">
            {prev && (
              <PillLink as={Link} to={paths.project(prev.page.slug)}>
                ← {shortTitle(prev.title)}
              </PillLink>
            )}
            {next && (
              <PillLink as={Link} to={paths.project(next.page.slug)}>
                {shortTitle(next.title)} →
              </PillLink>
            )}
          </Pager>
        </Card>
      )}
    </Section>
  );
}

export default Project;
