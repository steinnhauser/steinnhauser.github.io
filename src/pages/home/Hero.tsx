import { Link } from "react-router";
import styled from "styled-components";
import ExternalLink from "../../components/ExternalLink";
import LorenzField from "../../components/LorenzField";
import { DownloadIcon } from "../../components/Icons";
import { reveal } from "../../components/reveal";
import { useSectionClick } from "../../components/scrollToSection";
import Section from "../../components/Section";
import { Dot, PillLink } from "../../components/ui";
import { facts, profile } from "../../content";
import { paths } from "../../routes";
import { breakpoints, colors, fonts } from "../../theme";

// The cover: a discipline line, the name, one sentence, the actions, and a
// quiet strip of facts. Left-aligned and unboxed; the background carries it.
const Intro = styled.div`
  max-width: 760px;
`;

// "● CLOUD & PLATFORM ENGINEERING / COMPUTATIONAL PHYSICS"
const Discipline = styled.p`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;
  font-family: ${fonts.mono};
  font-size: 0.74rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${colors.muted};

  &::before {
    content: "";
    flex-shrink: 0;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${colors.sun};
    box-shadow: 0 0 12px ${colors.sun}99;
  }
`;

const Name = styled.h1`
  margin: clamp(18px, 3vh, 28px) 0 clamp(20px, 3vh, 28px);
  font-size: clamp(2.7rem, 7vw, 5.4rem);
  font-weight: 400;
  line-height: 1.02;
  letter-spacing: -0.025em;

  /* Given names on the first line, the surname on the second. */
  > span {
    display: block;
  }
`;

const Summary = styled.p`
  max-width: 34em;
  margin: 0;
  font-size: clamp(1.02rem, 1.35vw, 1.16rem);
  line-height: 1.7;
  color: ${colors.muted};
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px 30px;
  margin-top: clamp(28px, 4.5vh, 40px);

  @media (max-width: ${breakpoints.mobile}) {
    gap: 14px 24px;

    > :first-child {
      flex: 1 1 100%;
      justify-content: center;
    }
  }
`;

// Secondary actions: plain text links, so only one button asks for a click.
const QuietLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  color: ${colors.text};
  opacity: 0.78;
  transition:
    opacity 200ms ease,
    color 200ms ease;

  &:hover,
  &:focus-visible {
    opacity: 1;
    color: ${colors.sun};
  }
  svg {
    width: 16px;
    height: 16px;
  }
`;

// Four columns under a hairline, each with a mono label and two lines.
const Facts = styled.dl`
  display: grid;
  grid-template-columns: repeat(${facts.length}, minmax(0, 1fr));
  margin: clamp(56px, 11vh, 112px) 0 0;
  border-top: 1px solid rgba(255, 255, 255, 0.22);

  div {
    padding: 18px 20px 4px;
    border-left: 1px solid rgba(255, 255, 255, 0.08);
  }
  div:first-child {
    padding-left: 0;
    border-left: 0;
  }
  dt {
    margin-bottom: 10px;
    font-family: ${fonts.mono};
    font-size: 0.68rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${colors.muted};
  }
  dd {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.65;
    color: ${colors.text};
  }
  dd a {
    color: inherit;
    text-decoration: none;
  }
  dd a small {
    margin-left: 4px;
    font-size: 0.75em;
    color: ${colors.muted};
    transition: color 200ms ease;
  }
  dd a:hover,
  dd a:hover small {
    color: ${colors.sun};
  }

  /* Tablets and phones: two by two. */
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    div:nth-child(odd) {
      padding-left: 0;
      border-left: 0;
    }
    div:nth-child(n + 3) {
      margin-top: 8px;
    }
  }

  /* Phones: one row per fact, the label beside its lines. */
  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: minmax(0, 1fr);

    div,
    div:nth-child(odd) {
      display: grid;
      grid-template-columns: 96px minmax(0, 1fr);
      padding: 12px 0;
      margin: 0;
      border-left: 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }
    dt {
      grid-row: span 2;
      margin: 4px 0 0;
    }
    dd {
      grid-column: 2;
    }
  }
`;

function Hero() {
  const toSection = useSectionClick();
  const [first, ...rest] = profile.name.split(" ");
  return (
    <Section backdrop={(visible) => <LorenzField visible={visible} />}>
      {(visible) => (
        <>
          <Intro>
            <Discipline style={reveal(visible, 0)}>
              {profile.discipline}
            </Discipline>
            <Name style={reveal(visible, 1)}>
              <span>
                {first} {rest.slice(0, -1).join(" ")}{" "}
              </span>
              <span>
                {rest.at(-1)}
                <Dot>.</Dot>
              </span>
            </Name>
            <Summary style={reveal(visible, 2)}>{profile.summary}</Summary>
            <Actions style={reveal(visible, 3)}>
              <PillLink
                as={Link}
                to={paths.section("experience")}
                $primary
                onClick={toSection("experience")}
              >
                View experience ↓
              </PillLink>
              <QuietLink as={Link} to={paths.about}>
                Get in touch →
              </QuietLink>
              <QuietLink href={profile.cvUrl} download>
                <DownloadIcon />
                Download CV
              </QuietLink>
            </Actions>
          </Intro>

          <Facts aria-label="At a glance">
            {facts.map((f, i) => (
              <div key={f.label} style={reveal(visible, 4 + i)}>
                <dt>{f.label}</dt>
                {f.lines.map((line) => (
                  <dd key={line.text}>
                    {line.href ? (
                      <ExternalLink
                        href={line.href}
                        title={line.title}
                        aria-label={`${line.text}: ${line.title}`}
                      >
                        {line.text}
                        <small aria-hidden="true">↗</small>
                      </ExternalLink>
                    ) : (
                      line.text
                    )}
                  </dd>
                ))}
              </div>
            ))}
          </Facts>
        </>
      )}
    </Section>
  );
}

export default Hero;
