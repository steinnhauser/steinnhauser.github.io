import styled from "styled-components";
import Section from "../components/Section";
import { Eyebrow, GlassCard, Muted, SectionTitle } from "../components/ui";
import { profile, socials, volunteering } from "../content";
import { breakpoints, colors } from "../theme";

const Intro = styled.div`
  max-width: 820px;
  margin: 0 auto;
  transition: gap 1s ease;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: clamp(2.6rem, 6vw, 4rem);
    line-height: 1.1;
    margin: 0 0 8px;
  }
  p {
    line-height: 1.75;
    margin: 0;
  }
`;

const Contact = styled(GlassCard)`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px 24px;
  margin-top: 16px;

  h2 {
    grid-column: 1 / -1;
    font-size: 1.3rem;
    margin: 0 0 8px;
  }
  dt {
    color: ${colors.muted};
  }
  dd {
    margin: 0;
    overflow-wrap: anywhere;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    dt {
      margin-top: 8px;
    }
  }
`;

const VolunteerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;

  h3 {
    margin: 6px 0 2px;
  }
  p {
    margin: 12px 0 0;
    line-height: 1.6;
  }
`;

function About() {
  return (
    <>
      <Section curves={4}>
        {(visible) => (
          <Intro
            className={
              visible ? "flex-faded-in-reduced" : "flex-faded-out-reduced"
            }
          >
            <h1>About me.</h1>
            {profile.about.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}

            <Contact as="section">
              <h2>For project inquiries feel free to contact me</h2>
              <dl style={{ display: "contents" }}>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </dd>
                <dt>Phone</dt>
                <dd>
                  <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                    {profile.phone}
                  </a>
                </dd>
                <dt>Location</dt>
                <dd>{profile.location}</dd>
                <dt>Elsewhere</dt>
                <dd>
                  {socials.map((s, i) => (
                    <span key={s.label}>
                      {i > 0 && " · "}
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {s.label}
                      </a>
                    </span>
                  ))}
                </dd>
              </dl>
            </Contact>
          </Intro>
        )}
      </Section>

      <Section curves={6} tinted dividerColor={colors.primary}>
        {(visible) => (
          <>
            <SectionTitle>Volunteering &amp; Open Source</SectionTitle>
            <VolunteerGrid>
              {volunteering.map((v, i) => (
                <GlassCard
                  key={v.title}
                  style={{
                    transform: visible ? "none" : "translateY(14px)",
                    transition: `transform ${600 + 150 * i}ms ease-in-out`,
                  }}
                >
                  <Eyebrow>{v.period}</Eyebrow>
                  <h3>{v.title}</h3>
                  <Muted>{v.organization}</Muted>
                  {v.description && <p>{v.description}</p>}
                  {v.link && (
                    <p>
                      <a
                        href={v.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {v.link.label} ↗
                      </a>
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
