import { Fragment } from "react";
import { Link } from "react-router";
import styled from "styled-components";
import lavaField from "../assets/photos/lava-field.webp";
import portrait from "../assets/photos/portrait.jpg";
import { reveal } from "../components/reveal";
import Section from "../components/Section";
import {
  Dot,
  Eyebrow,
  GlassCard,
  Muted,
  PillLink,
  SectionLabel,
  SectionTitle,
  Tag,
  TagList,
  TwoColumn,
} from "../components/ui";
import {
  academics,
  certifications,
  experiences,
  experienceYears,
  highlights,
  languages,
  profile,
  skillGroups,
} from "../content";
import { breakpoints, colors, fonts, glass } from "../theme";

/* ---------- Welcome ---------- */

const Welcome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: gap 1s ease;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

// Portrait in a thin ring that runs from sunlight into slate blue, with a
// soft warm glow behind it like the low sun in the coastal photo.
const PortraitFrame = styled.div`
  position: relative;
  flex-shrink: 0;
  width: clamp(190px, 24vw, 340px);
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 4px;
  background: conic-gradient(
    from 200deg,
    ${colors.sun},
    ${colors.secondary} 35%,
    ${colors.accent} 60%,
    ${colors.secondary} 80%,
    ${colors.sun}
  );
  box-shadow:
    0 0 80px ${colors.sun}2e,
    0 24px 60px rgba(0, 0, 0, 0.55);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid ${colors.primary};
  }
`;

const WelcomeText = styled.div`
  max-width: 640px;

  h1 {
    font-size: clamp(2.6rem, 6vw, 4rem);
    line-height: 1.1;
    margin: 10px 0 22px;
  }
  p {
    line-height: 1.7;
    margin: 0;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 26px;

  @media (max-width: ${breakpoints.mobile}) {
    justify-content: center;
  }
`;

const Highlights = styled.dl`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  margin: 32px 0 0;

  div {
    ${glass}
    border-radius: 12px;
    padding: 12px 14px;
  }
  dt {
    font-family: ${fonts.mono};
    font-size: clamp(1.3rem, 2.2vw, 1.7rem);
    font-weight: 500;
    color: ${colors.sun};
    line-height: 1.2;
  }
  dd {
    margin: 2px 0 0;
    font-size: 0.8rem;
    color: ${colors.muted};
    line-height: 1.3;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    text-align: left;
  }
`;

/* ---------- Experience ---------- */

const Tiles = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(16px, 2vw, 32px);
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Tile = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: clamp(120px, 14vw, 170px);
  color: ${colors.text};
  text-align: center;

  &:hover {
    color: ${colors.text};
  }
`;

const TileImage = styled.div`
  ${glass}
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  padding: 0;
  transition:
    transform 400ms ease,
    border-color 400ms ease,
    box-shadow 400ms ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
    transition: opacity 400ms ease;
  }

  ${Tile}:hover &,
  ${Tile}:focus-visible & {
    transform: scale(1.08);
    border-color: ${colors.sun}cc;
    box-shadow: 0 12px 40px ${colors.sun}26;
  }
  ${Tile}:hover & img {
    opacity: 1;
  }
`;

const TileCaption = styled.div`
  font-size: 0.9rem;
  line-height: 1.3;

  small {
    display: block;
    margin-top: 2px;
    font-size: 0.75rem;
    color: ${colors.muted};
  }
  ${Eyebrow} {
    margin-top: 6px;
    font-size: 0.7rem;
  }
`;

/* ---------- Skills ---------- */

const SkillGrid = styled.div`
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
  gap: 12px;

  li {
    display: grid;
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

/* ---------- Academic ---------- */

const AcademicStack = styled.div`
  display: grid;
  gap: 14px;
`;

const AcademicCard = styled(GlassCard)`
  h3 {
    margin: 4px 0 2px;
    font-size: 1.1rem;
  }
  p {
    margin: 8px 0 0;
    font-size: 0.92rem;
    line-height: 1.6;
  }
`;

function Home() {
  const scrollToExperience = () =>
    document
      .getElementById("experience")
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <Section curves={1} photo={lavaField}>
        {(visible) => (
          <Welcome className={visible ? "flex-faded-in" : "flex-faded-out"}>
            <PortraitFrame style={reveal(visible, 2, "scale(0.96)")}>
              <img src={portrait} alt={`Portrait of ${profile.name}`} />
            </PortraitFrame>
            <WelcomeText>
              <Eyebrow style={reveal(visible, 0)}>{profile.headline}</Eyebrow>
              <h1 style={reveal(visible, 0)}>
                Welcome<Dot>.</Dot>
              </h1>
              <p style={reveal(visible, 1)}>{profile.welcome}</p>
              <Actions style={reveal(visible, 2)}>
                <PillLink as="button" $primary onClick={scrollToExperience}>
                  My experience ↓
                </PillLink>
                <PillLink as={Link} to="/about">
                  Get in touch
                </PillLink>
              </Actions>
              <Highlights>
                {highlights.map((h, i) => (
                  <div key={h.label} style={reveal(visible, 3 + i)}>
                    <dt>{h.value}</dt>
                    <dd>{h.label}</dd>
                  </div>
                ))}
              </Highlights>
            </WelcomeText>
          </Welcome>
        )}
      </Section>

      <Section id="experience" curves={2} tinted dividerColor={colors.primary}>
        {(visible) => (
          <>
            <div style={{ ...reveal(visible), textAlign: "center" }}>
              <SectionLabel style={{ justifyContent: "center" }}>
                01 / experience
              </SectionLabel>
              <SectionTitle>My Professional Experience</SectionTitle>
            </div>
            <Tiles>
              {experiences.map((exp, i) => (
                <li
                  key={exp.slug}
                  style={reveal(
                    visible,
                    experiences.length - i,
                    `translateX(${-14 - 2 * i}px)`,
                  )}
                >
                  <Tile to={`/experience/${exp.slug}`}>
                    <TileImage>
                      <img src={exp.logo} alt="" />
                    </TileImage>
                    <TileCaption>
                      {exp.tileTitle}
                      <small>{exp.company}</small>
                      <Eyebrow>{experienceYears(exp)}</Eyebrow>
                    </TileCaption>
                  </Tile>
                </li>
              ))}
            </Tiles>
          </>
        )}
      </Section>

      <Section curves={5} dividerColor={colors.tint}>
        {(visible) => (
          <>
            <div style={reveal(visible)}>
              <SectionLabel>02 / skills</SectionLabel>
              <SectionTitle>Skills &amp; Certifications</SectionTitle>
            </div>
            <SkillGrid>
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
                    <li key={c.title}>
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
            </SkillGrid>
          </>
        )}
      </Section>

      <Section curves={3} tinted dividerColor={colors.primary}>
        {(visible) => (
          <TwoColumn>
            <div style={reveal(visible)}>
              <SectionLabel>03 / education</SectionLabel>
              <SectionTitle>
                My Academic <br /> Background
              </SectionTitle>
            </div>
            <AcademicStack>
              {academics.map((a, i) => (
                <AcademicCard
                  key={a.title}
                  style={reveal(visible, i, "translateX(15px)")}
                >
                  <Eyebrow>{a.period}</Eyebrow>
                  <h3>{a.title}</h3>
                  <Muted>{a.institution}</Muted>
                  {a.details.map((d) => (
                    <p key={d}>{d}</p>
                  ))}
                  {a.link && (
                    <p>
                      <a
                        href={a.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {a.link.label} ↗
                      </a>
                    </p>
                  )}
                </AcademicCard>
              ))}
            </AcademicStack>
          </TwoColumn>
        )}
      </Section>
    </>
  );
}

export default Home;
