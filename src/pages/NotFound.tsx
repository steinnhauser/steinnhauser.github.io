import { Link } from "react-router";
import styled from "styled-components";
import { reveal } from "../components/reveal";
import Section from "../components/Section";
import {
  ButtonRow,
  Dot,
  Eyebrow,
  LiquidPanel,
  PillLink,
} from "../components/ui";
import { paths } from "../routes";

const Card = styled(LiquidPanel)`
  max-width: 620px;
  margin: 0 auto;

  h1 {
    font-size: clamp(2.4rem, 6vw, 3.6rem);
    line-height: 1.05;
    margin: 10px 0 18px;
  }
  p {
    line-height: 1.7;
    margin: 0 0 28px;
  }
`;

// Shown for any path that isn't a page (GitHub Pages serves it as 404.html).
function NotFound() {
  return (
    <Section curves={3} aurora="dusk">
      {(visible) => (
        <Card style={reveal(visible)}>
          <Eyebrow>404 · page not found</Eyebrow>
          <h1>
            Nothing here<Dot>.</Dot>
          </h1>
          <p>
            This page doesn&apos;t exist, or it has moved. Everything on the
            site is a click away from the home page.
          </p>
          <ButtonRow>
            <PillLink as={Link} to={paths.home} $primary>
              Home
            </PillLink>
            <PillLink as={Link} to={paths.section("experience")}>
              Experience
            </PillLink>
            <PillLink as={Link} to={paths.section("work")}>
              Selected work
            </PillLink>
          </ButtonRow>
        </Card>
      )}
    </Section>
  );
}

export default NotFound;
