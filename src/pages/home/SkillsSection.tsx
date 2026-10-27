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
import ExternalLink from "../../components/ExternalLink";
import {
  certifications,
  coreSkills,
  languages,
  skillGroups,
} from "../../content";
import { colors, fonts } from "../../theme";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
`;

const CardTitle = styled.h3`
  margin: 0 0 14px;
  font-size: 1.05rem;
`;

// Core skills lead their group (a stable sort keeps the rest in order).
const coreFirst = (skills: string[]) =>
  [...skills].sort(
    (a, b) => Number(coreSkills.includes(b)) - Number(coreSkills.includes(a)),
  );

// Explains the gold-rimmed tags.
const Legend = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: -14px 0 24px;
  font-family: ${fonts.mono};
  font-size: 0.74rem;
  letter-spacing: 0.03em;
  color: ${colors.muted};

  ${Tag} {
    list-style: none;
  }
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

const VerifyLink = styled(ExternalLink)`
  font-size: 0.86rem;
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
    <Section curves={5} tinted slant compact>
      {(visible) => (
        <>
          <div style={reveal(visible)}>
            <SectionLabel>03 / skills</SectionLabel>
            <SectionTitle>Skills &amp; Certifications</SectionTitle>
            <Legend>
              <Tag as="span" $core>
                core
              </Tag>
              the core stack, used at an advanced level
            </Legend>
          </div>
          <Grid>
            {skillGroups.map((group, i) => (
              <GlassCard key={group.title} style={reveal(visible, i)}>
                <CardTitle>{group.title}</CardTitle>
                <TagList>
                  {coreFirst(group.skills).map((s) => (
                    <Tag key={s} $core={coreSkills.includes(s)}>
                      {s}
                    </Tag>
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
                    {c.verifyUrl && (
                      <VerifyLink href={c.verifyUrl}>
                        Verify credential ↗
                      </VerifyLink>
                    )}
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
