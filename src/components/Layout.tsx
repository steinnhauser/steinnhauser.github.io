import { type ReactNode, useEffect } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { profile, socials } from "../content";
import { colors, fonts } from "../theme";
import TopNav from "./TopNav";
import ExternalLink from "./ExternalLink";

// Fine sand-like grain over the whole page (inspired by the owner's photo of
// beach ripples). Pure SVG noise, so it costs no image request.
const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

const Body = styled.div`
  min-height: 100vh;
  background-color: ${colors.primary};
  color: ${colors.text};
  font-family: ${fonts.body};

  &::after {
    content: "";
    position: fixed;
    inset: 0;
    z-index: 200;
    pointer-events: none;
    background-image: ${GRAIN};
    opacity: 0.045;
    mix-blend-mode: overlay;
  }
`;

const Footer = styled.footer`
  padding: 40px 16px;
  text-align: center;
  font-size: 0.85rem;
  color: ${colors.muted};
  border-top: 1px solid rgba(255, 255, 255, 0.06);

  nav {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px 20px;
    margin-bottom: 14px;
    font-family: ${fonts.mono};
    font-size: 0.78rem;
  }
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
        <nav aria-label="Contact">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          {socials.map((s) => (
            <ExternalLink key={s.label} href={s.href}>
              {s.label}
            </ExternalLink>
          ))}
        </nav>
        Made using Vite + React + TypeScript.
        <br />
        {profile.name} {new Date().getFullYear()}.
      </Footer>
    </Body>
  );
}

export default Layout;
