import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { profile } from "../content";
import { colors } from "../theme";
import TopNav from "./TopNav";

const Body = styled.div`
  min-height: 100vh;
  background-color: ${colors.primary};
  color: ${colors.text};
  font-family: "Poppins", sans-serif;
`;

const Footer = styled.footer`
  padding: 32px 16px;
  text-align: center;
  font-size: 0.9rem;
  color: ${colors.muted};
`;

function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  // HashRouter keeps the scroll position between pages; start each at the top.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Body>
      <TopNav />
      <main>{children}</main>
      <Footer>
        Made using Vite + React + TypeScript.
        <br />
        {profile.name} {new Date().getFullYear()}.
      </Footer>
    </Body>
  );
}

export default Layout;
