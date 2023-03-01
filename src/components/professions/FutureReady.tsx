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
function FutureReadyAbout() {
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
            maxWidth: "50%",
            margin: "auto",
            zIndex: 1,
            transition: "all 1s ease",
            padding: "10vw 10vh",
          }}
        >
          <h1>Senior Data Scientist</h1>
          Future Ready AS
          <br />
          January 2022 - February 2023
          <br />
          <p>
            <b>Responsibilities:</b>
            <ul style={{ marginTop: "5px" }}>
              <li
                className={isVisible0 ? "margin-faded-in" : "margin-faded-out"}
                style={{ transition: "margin-left 1000ms ease-in-out" }}
              >
                Manage UX and developer teams to design and build an interactive
                learning platform online.
              </li>
              <li
                className={isVisible0 ? "margin-faded-in" : "margin-faded-out"}
                style={{ transition: "margin-left 1200ms ease-in-out" }}
              >
                Develop and maintain an architecture for interactive
                conversation simulation with feedback. Extensive use of Docker,
                Flask APIs, Azure, MongoDB, Github Workflows, Nginx, Natural
                Language Processing models using Rasa.
              </li>
              <li
                className={isVisible0 ? "margin-faded-in" : "margin-faded-out"}
                style={{ transition: "margin-left 1400ms ease-in-out" }}
              >
                Leadership experience: Onboarding and training new Data Science
                team members.
              </li>
            </ul>
          </p>
          <h1>Data Scientist</h1>
          Future Ready AS
          <br />
          November 2020 - December 2021
          <br />
          <p>
            <b>Responsibilities:</b>
            <ul style={{ marginTop: "5px" }}>
              <li
                className={isVisible0 ? "margin-faded-in" : "margin-faded-out"}
                style={{ transition: "margin-left 1000ms ease-in-out" }}
              >
                Provide sales analytics of telecommunications data to identify
                trends in customer sales and strengths in sales representatives.
              </li>
              <li
                className={isVisible0 ? "margin-faded-in" : "margin-faded-out"}
                style={{ transition: "margin-left 1200ms ease-in-out" }}
              >
                Develop software for transcribing calls and identifying
                successful sales techniques. Extensive use of Python (Rasa,
                Pandas, Django), JavaScript, Azure, Weka, HTML/CSS.
              </li>
            </ul>
          </p>
        </div>
      </MPSection>
    </Body>
  );
}

export default FutureReadyAbout;
