import { Fragment } from "react";
import { Link } from "react-router";
import styled from "styled-components";
import selfImg from "../assets/bio_img.jpg";
import Section from "../components/Section";
import {
  Eyebrow,
  GlassCard,
  Muted,
  PillLink,
  SectionTitle,
  Tag,
  TagList,
  TwoColumn,
} from "../components/ui";
import {
  academics,
  certifications,
  experiences,
  languages,
  profile,
  skillGroups,
} from "../content";
import { breakpoints, colors, glass } from "../theme";

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

const Portrait = styled.img`
  width: clamp(180px, 24vw, 340px);
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
  box-shadow:
    0 0 0 1px ${colors.secondary}99,
    0 20px 60px rgba(0, 0, 0, 0.5);
`;

const WelcomeText = styled.div`
  max-width: 620px;

  h1 {
    font-size: clamp(2.6rem, 6vw, 4rem);
    line-height: 1.1;
    margin: 0 0 24px;
  }
  p {
    line-height: 1.7;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;

  @media (max-width: ${breakpoints.mobile}) {
    justify-content: center;
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
    border-color 400ms ease;

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
    border-color: ${colors.accent};
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

// Staggered entrance shared by the cards and tiles below.
const enter = (visible: boolean, i: number, offset = "translateY(14px)") => ({
  transform: visible ? "none" : offset,
  transition: `transform ${600 + 120 * i}ms ease-in-out`,
});

function Home() {
  const scrollToExperience = () =>
    document
      .getElementById("experience")
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <Section curves={1}>
        {(visible) => (
          <Welcome className={visible ? "flex-faded-in" : "flex-faded-out"}>
            <Portrait src={selfImg} alt={`Portrait of ${profile.name}`} />
            <WelcomeText>
              <h1>Welcome.</h1>
              <p>{profile.welcome}</p>
              <Actions>
                <PillLink as="button" onClick={scrollToExperience}>
                  My experience ↓
                </PillLink>
                <PillLink as={Link} to="/about">
                  Get in touch
                </PillLink>
              </Actions>
            </WelcomeText>
          </Welcome>
        )}
      </Section>

      <Section id="experience" curves={2} tinted dividerColor={colors.primary}>
        {(visible) => (
          <>
            <SectionTitle style={{ textAlign: "center" }}>
              My Professional Experience
            </SectionTitle>
            <Tiles>
              {experiences.map((exp, i) => (
                <li
                  key={exp.slug}
                  style={enter(
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
            <SectionTitle>Skills &amp; Certifications</SectionTitle>
            <SkillGrid>
              {skillGroups.map((group, i) => (
                <GlassCard key={group.title} style={enter(visible, i)}>
                  <CardTitle>{group.title}</CardTitle>
                  <TagList>
                    {group.skills.map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </TagList>
                </GlassCard>
              ))}
              <GlassCard style={enter(visible, skillGroups.length)}>
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
              <GlassCard style={enter(visible, skillGroups.length + 1)}>
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
            <SectionTitle>
              My Academic <br /> Background
            </SectionTitle>
            <AcademicStack>
              {academics.map((a, i) => (
                <AcademicCard
                  key={a.title}
                  style={enter(visible, i, "translateX(15px)")}
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
