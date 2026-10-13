import { Link } from "react-router";
import styled from "styled-components";
import { reveal } from "../../components/reveal";
import Section from "../../components/Section";
import { Eyebrow, SectionLabel, SectionTitle } from "../../components/ui";
import { experiences, experienceYears } from "../../content";
import { breakpoints, colors, glass } from "../../theme";

// One even row of tiles spanning the content width, aligned with the title.
const Tiles = styled.ul`
  display: grid;
  grid-template-columns: repeat(${experiences.length}, minmax(0, 1fr));
  gap: clamp(14px, 2vw, 28px);
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Tile = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  color: ${colors.text};

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
    transform: scale(1.04);
    border-color: ${colors.sun}cc;
    box-shadow: 0 12px 40px ${colors.sun}26;
  }
  ${Tile}:hover & img {
    opacity: 1;
  }
`;

const Caption = styled.div`
  font-size: 0.98rem;
  font-weight: 500;
  line-height: 1.3;

  small {
    display: block;
    margin-top: 3px;
    font-size: 0.8rem;
    font-weight: 400;
    color: ${colors.muted};
  }
  ${Eyebrow} {
    margin-top: 8px;
    font-size: 0.7rem;
  }
`;

function ExperienceSection() {
  return (
    <Section id="experience" curves={2} tinted slant compact>
      {(visible) => (
        <>
          <div style={reveal(visible)}>
            <SectionLabel>01 / experience</SectionLabel>
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
                    <small>{exp.shortCompany ?? exp.company}</small>
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
