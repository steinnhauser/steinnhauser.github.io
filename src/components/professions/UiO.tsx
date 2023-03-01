import styled from "styled-components";
import { Curves4 } from "../../animations/SvgCurves";
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
function UiOAbout() {
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
        {/* <div
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
        </div> */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "left",
            maxWidth: "75%",
            margin: "auto",
            zIndex: 1,
            transition: "all 1s ease",
            padding: "5vh 5vw",
          }}
        >
          <h1>Cluster Project Manager</h1>
          Physics Dpt. of the University of Oslo.
          <br />
          February 2020 - August 2020
          <br />
          <p>
            <b>Responsibilities:</b>
            <ul style={{ marginTop: "5px" }}>
              <li
                className={isVisible0 ? "margin-faded-in" : "margin-faded-out"}
                style={{ transition: "transform 1000ms ease-in-out" }}
              >
                Built a cabinet of computational nodes for the physics
                department of the University of Oslo using hardware donated from
                the Abel supercomputer in Oslo.
              </li>
              <li
                className={isVisible0 ? "margin-faded-in" : "margin-faded-out"}
                style={{ transition: "transform 1200ms ease-in-out" }}
              >
                Set up cluster software and node connectivity using the ROCKS
                High Performance Computing ISO.
              </li>
              <li
                className={isVisible0 ? "margin-faded-in" : "margin-faded-out"}
                style={{ transition: "transform 1400ms ease-in-out" }}
              >
                Collaborated with members of USIT to assemble the cabinet using
                unused supercomputing parts, resulting in no additional costs.
              </li>
            </ul>
          </p>
        </div>
      </MPSection>
    </Body>
  );
}

export default UiOAbout;
