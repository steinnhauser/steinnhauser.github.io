import { Link } from "react-router";
import styled, { css } from "styled-components";
import lavaLarge from "../../assets/photos/lava-field.webp";
import lavaSmall from "../../assets/photos/lava-field-800.webp";
import portrait from "../../assets/photos/portrait.webp";
import ExternalLink from "../../components/ExternalLink";
import { DownloadIcon } from "../../components/Icons";
import { reveal } from "../../components/reveal";
import RichText from "../../components/RichText";
import { useSectionClick } from "../../components/scrollToSection";
import Section from "../../components/Section";
import {
  ButtonRow,
  Dot,
  Eyebrow,
  LiquidPanel,
  PillLink,
} from "../../components/ui";
import { highlights, profile } from "../../content";
import { paths } from "../../routes";
import { breakpoints, colors, fonts, glass, hoverLift } from "../../theme";

const Intro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: gap 1s ease;

  /* Phones (portrait): stack, with the portrait centred above
     left-aligned text, which reads far better than centred paragraphs. */
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

// Portrait in a thin ring that runs from sunlight into slate blue, with a
// soft warm glow behind it like the low sun in the coastal photo.
const ring = css`
  flex-shrink: 0;
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

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid ${colors.primary};
  }
`;

const PortraitFrame = styled.div`
  ${ring}
  position: relative;
  align-self: center;
  width: clamp(190px, 24vw, 320px);
  box-shadow:
    0 0 80px ${colors.sun}2e,
    0 24px 60px rgba(0, 0, 0, 0.55);

  /* Phones: the portrait moves into the panel, beside the heading (Avatar),
     so the introduction and its actions fit on the first screen. */
  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

// The phone-sized portrait beside "I'm Steinn," (same image file).
const Avatar = styled.div`
  ${ring}
  display: none;
  width: 72px;
  padding: 3px;
  box-shadow: 0 0 36px ${colors.sun}2e;

  img {
    border-width: 2px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    display: block;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 10px 0 22px;

  @media (max-width: ${breakpoints.mobile}) {
    margin: 14px 0 18px;
  }
`;

// The introduction sits on a liquid-glass panel, which lifts it off the
// lava photo and ties the cover to the glass used across the site.
const Text = styled(LiquidPanel)`
  max-width: 660px;
  padding: clamp(24px, 3.2vw, 40px);

  h1 {
    font-size: clamp(2.6rem, 6vw, 4rem);
    line-height: 1.1;
    margin: 0;
  }
  p {
    line-height: 1.7;
    margin: 0 0 14px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 22px 20px 24px;

    h1 {
      font-size: 2.3rem;
    }
    p {
      line-height: 1.6;
    }
  }
`;

const Actions = styled(ButtonRow)`
  margin-top: 26px;
`;

// Full-width band of key figures under the introduction.
const Highlights = styled.dl`
  display: grid;
  grid-template-columns: repeat(${highlights.length}, minmax(0, 1fr));
  gap: 14px;
  margin: clamp(40px, 6vh, 64px) 0 0;

  div {
    ${glass}
    ${hoverLift}
    overflow: hidden;
    border-radius: 14px;
    padding: 16px 18px 18px;

    /* Thin sunlit edge along the top of each figure. */
    &::after {
      content: "";
      position: absolute;
      inset: 0 0 auto;
      height: 2px;
      background: linear-gradient(90deg, ${colors.sun}, transparent 80%);
      opacity: 0.8;
    }
  }
  dt {
    font-family: ${fonts.mono};
    font-size: clamp(1.4rem, 2.4vw, 1.9rem);
    font-weight: 500;
    color: ${colors.sun};
    line-height: 1.15;
    white-space: nowrap;
  }
  dt a {
    color: inherit;
  }
  /* Small arrow on figures that link to their proof. */
  dt small {
    margin-left: 6px;
    font-size: 0.5em;
    vertical-align: super;
    color: ${colors.muted};
    transition: color 250ms ease;
  }
  dt a:hover small {
    color: ${colors.sun};
  }
  dd {
    margin: 6px 0 0;
    font-size: 0.82rem;
    color: ${colors.muted};
    line-height: 1.4;
  }

  /* Tablets: three on the first row, the rest share the second. */
  @media (max-width: 1000px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));

    div {
      grid-column: span 2;
    }
    div:nth-child(n + 4) {
      grid-column: span 3;
    }
  }
  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    div,
    div:nth-child(n + 4) {
      grid-column: auto;
    }
    /* An odd figure out spans the full row instead of sitting alone. */
    div:last-child:nth-child(odd) {
      grid-column: 1 / -1;
    }
  }
`;

function Hero() {
  const toSection = useSectionClick();
  return (
    <Section curves={1} photo={{ large: lavaLarge, small: lavaSmall }}>
      {(visible) => (
        <>
          <Intro className={visible ? "flex-faded-in" : "flex-faded-out"}>
            <PortraitFrame style={reveal(visible, 2, "scale(0.96)")}>
              <img
                src={portrait}
                alt={`Portrait of ${profile.name}`}
                width={480}
                height={480}
                fetchPriority="high"
              />
            </PortraitFrame>
            {/* The panel reveals as one piece; its contents don't fade on
                their own (a fading ancestor would switch off the pills'
                glass blur). */}
            <Text style={reveal(visible, 0)}>
              <Eyebrow>{profile.headline}</Eyebrow>
              <Title>
                <Avatar>
                  <img src={portrait} alt="" width={72} height={72} />
                </Avatar>
                <h1>
                  {profile.greeting}
                  <Dot>,</Dot>
                </h1>
              </Title>
              {profile.welcome.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>
                  <RichText text={paragraph} />
                </p>
              ))}
              <Actions>
                <PillLink
                  as={Link}
                  to={paths.section("experience")}
                  $primary
                  onClick={toSection("experience")}
                >
                  View experience ↓
                </PillLink>
                <PillLink as={Link} to={paths.about}>
                  Get in touch
                </PillLink>
                <PillLink href={profile.cvUrl} download>
                  <DownloadIcon />
                  Download CV
                </PillLink>
              </Actions>
            </Text>
          </Intro>

          <Highlights aria-label="Key figures">
            {highlights.map((h, i) => (
              <div key={h.value} data-light style={reveal(visible, 3 + i)}>
                <dt>
                  {h.link ? (
                    <ExternalLink
                      href={h.link.href}
                      aria-label={`${h.value}: ${h.link.label}`}
                      title={h.link.label}
                    >
                      {h.value}
                      <small aria-hidden="true">↗</small>
                    </ExternalLink>
                  ) : (
                    h.value
                  )}
                </dt>
                <dd>{h.label}</dd>
              </div>
            ))}
          </Highlights>
        </>
      )}
    </Section>
  );
}

export default Hero;
