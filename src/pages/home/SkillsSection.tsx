import { Fragment } from "react";
import styled from "styled-components";
import { reveal } from "../../components/reveal";
import Section from "../../components/Section";
import {
  Eyebrow,
  GlassCard,
  SectionLabel,
  SectionTitle,
  Tag,
  TagList,
} from "../../components/ui";
import { certifications, languages, skillGroups } from "../../content";
import { colors } from "../../theme";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
`;

const CardTitle = styled.h3`
  margin: 0 0 14px;
  font-size: 1.05rem;
`;

const CertList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 14px;

  li {
    display: grid;
    gap: 2px;
  }
  small {
    color: ${colors.muted};
  }
`;

const LanguageList = styled.dl`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 6px 16px;
  margin: 0;

  dd {
    margin: 0;
    color: ${colors.muted};
  }
`;

function SkillsSection() {
  return (
    <Section curves={5} aurora="tide" slant compact>
      {(visible) => (
        <>
          <div style={reveal(visible)}>
            <SectionLabel>02 / skills</SectionLabel>
            <SectionTitle>Skills &amp; Certifications</SectionTitle>
          </div>
          <Grid>
            {skillGroups.map((group, i) => (
              <GlassCard key={group.title} style={reveal(visible, i)}>
                <CardTitle>{group.title}</CardTitle>
                <TagList>
                  {group.skills.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </TagList>
              </GlassCard>
            ))}
            <GlassCard style={reveal(visible, skillGroups.length)}>
              <CardTitle>Certifications</CardTitle>
              <CertList>
                {certifications.map((c) => (
                  <li key={c.code}>
                    <Eyebrow>{c.code}</Eyebrow>
                    {c.title}
                    <small>{c.issuer}</small>
                  </li>
                ))}
              </CertList>
            </GlassCard>
            <GlassCard style={reveal(visible, skillGroups.length + 1)}>
              <CardTitle>Languages</CardTitle>
              <LanguageList>
                {languages.map((l) => (
                  <Fragment key={l.language}>
                    <dt>{l.language}</dt>
                    <dd>{l.level}</dd>
                  </Fragment>
                ))}
              </LanguageList>
            </GlassCard>
          </Grid>
        </>
      )}
    </Section>
  );
}

export default SkillsSection;
