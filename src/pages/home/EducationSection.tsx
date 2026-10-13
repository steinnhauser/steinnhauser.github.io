import styled from "styled-components";
import ExternalLink from "../../components/ExternalLink";
import { reveal } from "../../components/reveal";
import Section from "../../components/Section";
import {
  Eyebrow,
  GlassCard,
  Muted,
  SectionLabel,
  SectionTitle,
  TwoColumn,
} from "../../components/ui";
import { academics } from "../../content";
import { breakpoints, NAV_HEIGHT } from "../../theme";

// Title stays in view while the cards scroll past (desktop only).
const Heading = styled.div`
  align-self: start;
  position: sticky;
  top: calc(${NAV_HEIGHT} + 40px);

  @media (max-width: ${breakpoints.mobile}) {
    position: static;
  }
`;

const Stack = styled.div`
  display: grid;
  gap: 14px;
`;

const Card = styled(GlassCard)`
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

function EducationSection() {
  return (
    <Section curves={3} tinted slant compact>
      {(visible) => (
        <TwoColumn>
          <Heading style={reveal(visible)}>
            <SectionLabel>03 / education</SectionLabel>
            <SectionTitle>
              My Academic <br /> Background
            </SectionTitle>
          </Heading>
          <Stack>
            {academics.map((a, i) => (
              <Card
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
                    <ExternalLink href={a.link.href}>
                      {a.link.label} ↗
                    </ExternalLink>
                  </p>
                )}
              </Card>
            ))}
          </Stack>
        </TwoColumn>
      )}
    </Section>
  );
}

export default EducationSection;
