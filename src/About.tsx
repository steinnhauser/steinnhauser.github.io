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
          <h1>About me.</h1>
          <p>
            I enjoy building architecures from scratch and contributing to
            projects in early stages of development. Projects in this phase have
            a high level of creative freedom and the dynamics allow for a lot of
            interesting possibilities. After the architecture is mapped and a
            thorough round of RND is completed I find that the POC development
            becomes a path of little resistance. After POC completion and
            pitching I also have experience in communications and leadership of
            UX&Design, UI, Frontend and Backend teams.
          </p>
          <p>
            I practice modular code for reusability in my projects, as well as
            proper testing conventions, code readability, documentation in
            Confluence, and ticket management in Jira. Github workflows which
            have manual CI/CD pipeline triggers in Azure are my preferred
            integration methods, where branch protection rules can manage
            changes in development/PG environments before a change on a
            production branch is approved.
          </p>
          <h2 style={{ marginBottom: "0" }}>
            For project inquiries feel free to contact me at:
          </h2>
          hausersteinn@gmail.com
          <br />
          (+49) 179 6047 257
        </div>
      </MPSection>
    </Body>
  );
}

export default About;
