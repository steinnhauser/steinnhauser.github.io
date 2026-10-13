import styled from "styled-components";
import sunsetLarge from "../assets/photos/coast-sunset.webp";
import sunsetSmall from "../assets/photos/coast-sunset-800.webp";
import ExternalLink from "../components/ExternalLink";
import {
  GithubIcon,
  LinkedInIcon,
  StackOverflowIcon,
} from "../components/Icons";
import { reveal } from "../components/reveal";
import Section from "../components/Section";
import {
  Dot,
  Eyebrow,
  GlassCard,
  LiquidPanel,
  Muted,
  PillLink,
  SectionLabel,
  SectionTitle,
} from "../components/ui";
import { profile, socials, volunteering } from "../content";
import { breakpoints, colors, fonts } from "../theme";

const socialIcons = {
  github: GithubIcon,
  linkedin: LinkedInIcon,
  stackoverflow: StackOverflowIcon,
};

// Story panel beside the contact card; one column on phones.
const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(0, 1fr);
  gap: clamp(16px, 2.5vw, 28px);
  align-items: start;
  transition: gap 1s ease;

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const Story = styled(LiquidPanel)`
  h1 {
    font-size: clamp(2.5rem, 6vw, 4rem);
    line-height: 1.05;
    margin: 10px 0 22px;
  }
  p {
    font-size: clamp(1rem, 1.2vw, 1.06rem);
    line-height: 1.8;
    margin: 0 0 16px;
  }
  p:last-child {
    margin-bottom: 0;
  }
`;

const Contact = styled(LiquidPanel)`
  padding: clamp(22px, 3vw, 32px);

  h2 {
    font-size: 1.35rem;
    margin: 8px 0 4px;
  }
  > p {
    margin: 0 0 22px;
    line-height: 1.6;
  }
`;

// Plain label/value rows separated by hairlines.
const ContactList = styled.dl`
  margin: 0 0 24px;

  div {
    padding: 12px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }
  div:last-child {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
  dt {
    font-family: ${fonts.mono};
    font-size: 0.7rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${colors.muted};
  }
  dd {
    margin: 2px 0 0;
    overflow-wrap: anywhere;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: ${breakpoints.mobile}) {
    > * {
      flex: 1 1 auto;
      justify-content: center;
    }
  }
`;

const VolunteerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: 16px;

  h3 {
    margin: 6px 0 2px;
  }
  p {
    margin: 12px 0 0;
    line-height: 1.65;
  }
`;

function About() {
  const tel = profile.phone.replace(/\s/g, "");

  return (
    <>
      <Section
        curves={4}
        photo={{ large: sunsetLarge, small: sunsetSmall }}
        aurora="dusk"
      >
        {(visible) => (
          <Layout
            className={
              visible ? "flex-faded-in-reduced" : "flex-faded-out-reduced"
            }
          >
            <Story style={reveal(visible, 0)}>
              <Eyebrow>{profile.headline}</Eyebrow>
              <h1>
                About me<Dot>.</Dot>
              </h1>
              {profile.about.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </Story>

            <Contact as="aside" style={reveal(visible, 2, "translateY(22px)")}>
              <Eyebrow>Contact</Eyebrow>
              <h2>Get in touch</h2>
              <p>
                <Muted>For project inquiries, feel free to reach out.</Muted>
              </p>
              <ContactList>
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  </dd>
                </div>
                <div>
                  <dt>Phone</dt>
                  <dd>
                    <a href={`tel:${tel}`}>{profile.phone}</a>
                  </dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>{profile.location}</dd>
                </div>
              </ContactList>
              <Actions>
                {socials.map(({ label, href, icon }) => {
                  const Icon = socialIcons[icon];
                  return (
                    <PillLink key={label} as={ExternalLink} href={href}>
                      <Icon />
                      {label}
                    </PillLink>
                  );
                })}
              </Actions>
            </Contact>
          </Layout>
        )}
      </Section>

      <Section curves={6} tinted aurora="tide" slant compact>
        {(visible) => (
          <>
            <div style={reveal(visible)}>
              <SectionLabel>beyond work</SectionLabel>
              <SectionTitle>Volunteering &amp; Open Source</SectionTitle>
            </div>
            <VolunteerGrid>
              {volunteering.map((v, i) => (
                <GlassCard key={v.title} style={reveal(visible, i + 1)}>
                  <Eyebrow>{v.period}</Eyebrow>
                  <h3>{v.title}</h3>
                  <Muted>{v.organization}</Muted>
                  {v.description && <p>{v.description}</p>}
                  {v.link && (
                    <p>
                      <ExternalLink href={v.link.href}>
                        {v.link.label} ↗
                      </ExternalLink>
                    </p>
                  )}
                </GlassCard>
              ))}
            </VolunteerGrid>
          </>
        )}
      </Section>
    </>
  );
}

export default About;
