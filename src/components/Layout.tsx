import { type ReactNode, useEffect } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { profile, socials } from "../content";
import { colors, fonts, SLANT, slantTop } from "../theme";
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

// Slants over the last section, like the sections do over each other.
const Footer = styled.footer`
  ${slantTop}
  background: ${colors.primary};
  padding: calc(${SLANT} + 40px) 16px 40px;
  text-align: center;
  font-size: 0.85rem;
  color: ${colors.muted};

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
  const { pathname, state } = useLocation();
  const section = (state as { section?: string } | null)?.section;

  // HashRouter keeps the scroll position between pages: start each page at
  // the top, or at the section a link asked for (`state={{ section }}`).
  useEffect(() => {
    const target = section && document.getElementById(section);
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, section]);

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
        Made using Vite + Preact + TypeScript.
        <br />
        {profile.name} {new Date().getFullYear()}.
      </Footer>
    </Body>
  );
}

export default Layout;
