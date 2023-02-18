import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  GithubSVG,
  LinkedInSVG,
  StackOverflowSVG,
} from "./animations/SvgCurves";

const TN = styled.div`
  height: 10%;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 99;

  background-color: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-right: 4vw;
  margin-left: 4vw;
`;

function TopNav() {
  return (
    <TN>
      <LinkContainer>
        <NavLink to={"/"}>
          <h3 style={{ margin: 0, color: "white" }}>Home</h3>
        </NavLink>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
            gap: "2vw",
          }}
        >
          <NavLink to={"/about"}>
            <h3 style={{ margin: 0, color: "white" }}>About Me</h3>
          </NavLink>
          <a target="_blank" href="https://github.com/steinnhauser/">
            <GithubSVG color={"#ffffff"} />
          </a>
          <a target="_blank" href="https://linkedin.com/in/steinnhauser/">
            <LinkedInSVG color={"#ffffff"} />
          </a>
          <a
            target="_blank"
            href="https://stackoverflow.com/users/13819183/steinn-hauser-magnusson/"
          >
            <StackOverflowSVG color={"#ffffff"} />
          </a>
        </div>
      </LinkContainer>
    </TN>
  );
}

export default TopNav;
