import type { CSSProperties } from "react";
import { Link } from "react-router";
import styled from "styled-components";
import ExternalLink from "../../components/ExternalLink";
import Screenshot from "../../components/Screenshot";
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

// Featured projects span the full width; the others sit two to a row, and
// one to a row on phones.
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  > [data-featured] {
    grid-column: 1 / -1;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const Links = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 18px;
  font-size: 0.92rem;
`;

// The internal "read more" link, in gold like the site's other actions.
const More = styled(Link)`
  font-family: ${fonts.mono};
  font-size: 0.82rem;
  letter-spacing: 0.03em;
  color: ${colors.sun};

  &:hover {
    color: ${colors.text};
  }
`;

// Title and summary, with the screenshot beside them on wide screens.
const Lead = styled.div<{ $image: boolean }>`
  display: grid;
  grid-template-columns: ${(p) =>
    p.$image ? "minmax(0, 1.25fr) minmax(0, 1fr)" : "minmax(0, 1fr)"};
  gap: 14px clamp(20px, 3vw, 36px);
  align-items: start;

  > div {
    display: grid;
    gap: 14px;
  }

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
  }
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
  const { title, context, summary, flow, tags, links, featured, image } =
    project;
  // The project's short name, so repeated link texts ("Code on GitHub")
  // stay distinct for screen readers.
  const name = title.split(":")[0];
  const more = project.page
    ? { to: `/project/${project.page.slug}`, label: "Read the full story" }
    : project.role
      ? { to: `/experience/${project.role}`, label: "More about the role" }
      : undefined;
  return (
    <Card
      as="article"
      $featured={!!featured}
      data-featured={featured || undefined}
      style={reveal(visible, index)}
    >
      <Lead $image={!!image}>
        <div>
          <Eyebrow>{context}</Eyebrow>
          <h3>{title}</h3>
          <p>{summary}</p>
          {more && (
            <More to={more.to} aria-label={`${more.label}: ${name}`}>
              {more.label} →
            </More>
          )}
        </div>
        {image && <Screenshot {...image} />}
      </Lead>
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
            <ExternalLink
              key={l.href}
              href={l.href}
              aria-label={`${l.label}: ${name}`}
            >
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
