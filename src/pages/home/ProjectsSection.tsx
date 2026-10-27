import type { CSSProperties } from "react";
import styled from "styled-components";
import ExternalLink from "../../components/ExternalLink";
import { reveal } from "../../components/reveal";
import Section from "../../components/Section";
import {
  Eyebrow,
  LiquidPanel,
  SectionLabel,
  SectionTitle,
  Tag,
  TagList,
} from "../../components/ui";
import { projects, type Project } from "../../content";
import { breakpoints, colors, fonts } from "../../theme";

// Featured projects span the full width; the others sit three to a row,
// two on tablets (an odd one out spans the row) and one on phones.
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 18px;

  > * {
    grid-column: span 2;
  }
  > [data-featured] {
    grid-column: 1 / -1;
  }

  @media (max-width: 1000px) {
    > * {
      grid-column: span 3;
    }
    > :not([data-featured]):last-child:nth-child(odd) {
      grid-column: 1 / -1;
    }
  }
  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: minmax(0, 1fr);

    > *,
    > :not([data-featured]):last-child:nth-child(odd) {
      grid-column: 1 / -1;
    }
  }
`;

const Links = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 18px;
  font-size: 0.92rem;
`;

const Card = styled(LiquidPanel)<{ $featured: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: clamp(22px, 3vw, 34px);

  h3 {
    margin: 0;
    font-size: ${(p) =>
      p.$featured ? "clamp(1.4rem, 2.4vw, 1.9rem)" : "1.3rem"};
    line-height: 1.2;
  }
  p {
    margin: 0;
    line-height: 1.7;
    max-width: 72ch;
  }
  /* Links and tags sit at the bottom, so cards in a row line up. */
  ${Links}, ${TagList} {
    margin-top: auto;
  }
  ${TagList} {
    padding-top: 6px;
  }
  ${Links} + ${TagList} {
    margin-top: 0;
  }
`;

// "How it fits together": the featured project's parts as connected steps.
const Flow = styled.ol`
  display: grid;
  grid-template-columns: repeat(var(--steps), minmax(0, 1fr));
  gap: 28px;
  list-style: none;
  margin: 6px 0;
  padding: 0;

  li {
    position: relative;
    padding: 14px 16px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.04);
    box-shadow:
      inset 0 0 0 1px rgba(255, 255, 255, 0.09),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }
  /* Arrow to the next step. */
  li + li::before {
    content: "→";
    position: absolute;
    left: -21px;
    top: 50%;
    translate: 0 -50%;
    color: ${colors.sun};
    font-family: ${fonts.mono};
  }
  strong {
    display: block;
    font-family: ${fonts.mono};
    font-size: 0.86rem;
    font-weight: 500;
    color: ${colors.text};
  }
  span {
    display: block;
    margin-top: 2px;
    font-size: 0.8rem;
    line-height: 1.4;
    color: ${colors.muted};
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;

    li + li::before {
      content: none;
    }
  }
`;

function ProjectCard({
  project,
  index,
  visible,
}: {
  project: Project;
  index: number;
  visible: boolean;
}) {
  const { title, context, summary, flow, tags, links, featured } = project;
  return (
    <Card
      as="article"
      $featured={!!featured}
      data-featured={featured || undefined}
      style={reveal(visible, index)}
    >
      <Eyebrow>{context}</Eyebrow>
      <h3>{title}</h3>
      <p>{summary}</p>
      {flow && (
        <Flow
          aria-label={`${title}: how it fits together`}
          style={{ "--steps": flow.length } as CSSProperties}
        >
          {flow.map((step) => (
            <li key={step.label}>
              <strong>{step.label}</strong>
              <span>{step.detail}</span>
            </li>
          ))}
        </Flow>
      )}
      {links && (
        <Links>
          {links.map((l) => (
            <ExternalLink key={l.href} href={l.href}>
              {l.label} ↗
            </ExternalLink>
          ))}
        </Links>
      )}
      <TagList aria-label={`${title}: technologies`}>
        {tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </TagList>
    </Card>
  );
}

function ProjectsSection() {
  return (
    <Section id="work" curves={7} aurora="tide" slant compact>
      {(visible) => (
        <>
          <div style={reveal(visible)}>
            <SectionLabel>02 / selected work</SectionLabel>
            <SectionTitle>Selected Work</SectionTitle>
          </div>
          <Grid>
            {projects.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i + 1}
                visible={visible}
              />
            ))}
          </Grid>
        </>
      )}
    </Section>
  );
}

export default ProjectsSection;
