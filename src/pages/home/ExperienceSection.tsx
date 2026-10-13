import { Link } from "react-router";
import styled from "styled-components";
import { reveal } from "../../components/reveal";
import Section from "../../components/Section";
import { Eyebrow, SectionLabel, SectionTitle } from "../../components/ui";
import { experiences, experienceYears } from "../../content";
import { colors, glass } from "../../theme";

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

const Caption = styled.div`
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

function ExperienceSection() {
  return (
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
                  <Caption>
                    {exp.tileTitle}
                    <small>{exp.company}</small>
                    <Eyebrow>{experienceYears(exp)}</Eyebrow>
                  </Caption>
                </Tile>
              </li>
            ))}
          </Tiles>
        </>
      )}
    </Section>
  );
}

export default ExperienceSection;
