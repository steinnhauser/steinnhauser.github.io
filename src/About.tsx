import styled from "styled-components";
import { Curves4 } from "./animations/SvgCurves";
import config from "./components/Config";
import useElementOnScreen from "./hooks/UseElementOnScreen";
import TopNav from "./TopNav";

const primaryColor = config["primaryColor"];
const secondaryColor = config["secondaryColor"];
const Body = styled.div`
  background-color: ${primaryColor};
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  padding: 0;
  margin: 0;
`;

const MPSection = styled.div`
  display: grid;
  align-content: center;
  min-height: 100vh;
  position: relative;
`;
function About() {
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };
  const [containerRef0, isVisible0] = useElementOnScreen(options);

  return (
    <Body>
      <TopNav />
      <MPSection
        ref={containerRef0}
        className={isVisible0 ? "scroll-shown" : "scroll-hidden"}
      >
        {/* Separate div for background image overlay */}
        <div
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            zIndex: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Curves4 pathClassName={"draw"} strokeColor={secondaryColor} />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "75%",
            margin: "auto",
            zIndex: 1,
            transition: "gap 1s ease",
          }}
          className={
            isVisible0 ? "flex-faded-in-reduced" : "flex-faded-out-reduced"
          }
        >
          <h1>Welcome.</h1>
          <p>
            This is my page typ. andomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
        </div>
      </MPSection>
    </Body>
  );
}

export default About;
