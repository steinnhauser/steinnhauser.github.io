import styled from "styled-components";
import { Curves4, Curves6 } from "../../animations/SvgCurves";
import config from "../Config";
import useElementOnScreen from "../../hooks/UseElementOnScreen";
import TopNav from "../../TopNav";

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
function SENECAbout() {
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
        style={{ backgroundColor: secondaryColor + "33" }}
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
          <Curves6 pathClassName={"draw"} strokeColor={secondaryColor} />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "left",
            maxWidth: "50%",
            margin: "auto",
            zIndex: 1,
            transition: "all 1s ease",
            padding: "10vw 10vh",
          }}
        >
          <h1>Software Developer</h1>
          SENEC GmbH
          <br />
          March 2023 - Present
          <br />
          <b>Responsibilities:</b>
          <ul style={{ marginTop: "5px" }}>
            <li
              className={isVisible0 ? "margin-faded-in" : "margin-faded-out"}
              style={{ transition: "margin-left 1000ms ease-in-out" }}
            >
              TBD.
            </li>
          </ul>
        </div>
      </MPSection>
    </Body>
  );
}

export default SENECAbout;
