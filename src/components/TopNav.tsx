import { Link, NavLink, useLocation } from "react-router";
import styled, { css } from "styled-components";
import { socials } from "../content";
import { paths, type SectionId } from "../routes";
import { breakpoints, colors, fonts, NAV_HEIGHT } from "../theme";
import { GithubIcon, LinkedInIcon, Mark, StackOverflowIcon } from "./Icons";
import ExternalLink from "./ExternalLink";
import useActiveSection from "../hooks/useActiveSection";
import { useSectionClick } from "./scrollToSection";

const icons = {
  github: GithubIcon,
  linkedin: LinkedInIcon,
  stackoverflow: StackOverflowIcon,
};

const Bar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: ${NAV_HEIGHT};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 clamp(16px, 3vw, 48px);
  /* Liquid-glass bar: tinted, strongly blurred, with a light rim along its
     bottom edge that warms towards the right. */
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent),
    ${colors.primary}99;
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);

  &::after {
    content: "";
    position: absolute;
    inset: auto 0 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.04),
      rgba(255, 255, 255, 0.18) 40%,
      ${colors.sun}59 85%,
      rgba(255, 255, 255, 0.04)
    );
  }
`;

const Brand = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 12px;

  svg {
    width: 41px;
    height: 23px;
    flex-shrink: 0;
  }
  /* The gold dot lifts a little on hover, like a prompt waiting. */
  .mark-dot {
    transition: transform 400ms ease;
  }
  a:hover & .mark-dot,
  a:focus-visible & .mark-dot {
    transform: translateY(-5px);
  }

  /* Phones: the mark alone stands for Home, to make room for the
     section links. */
  @media (max-width: ${breakpoints.mobile}) {
    span {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip-path: inset(50%);
      white-space: nowrap;
    }
  }
`;

// Thin gold line along the bottom of the bar showing how far down the page
// you are. Pure CSS (scroll-driven animation); hidden where unsupported.
const Progress = styled.div`
  position: absolute;
  inset: auto 0 0;
  height: 2px;
  background: linear-gradient(90deg, ${colors.sun}, ${colors.sun}66);
  transform-origin: left;
  transform: scaleX(0);
  display: none;

  @supports (animation-timeline: scroll()) {
    display: block;
    animation: nav-progress linear both;
    animation-timeline: scroll(root block);
  }
`;

const Links = styled.nav`
  display: flex;
  align-items: center;
  gap: clamp(12px, 1.4vw, 20px);
`;

const linkStyle = css`
  position: relative;
  color: ${colors.text};
  font-size: clamp(1rem, 1.7vw, 1.3rem);
  font-family: ${fonts.display};
  font-weight: 700;
  letter-spacing: -0.02em;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -4px;
    height: 2px;
    border-radius: 2px;
    background: ${colors.sun};
    transform: scaleX(0);
    transition: transform 300ms ease;
  }
  &:hover {
    color: ${colors.text};
  }
  &:hover::after,
  &.active::after {
    transform: scaleX(1);
  }
`;

const PageLink = styled(NavLink)`
  ${linkStyle}
`;

// Home and section links set their "active" class themselves.
const PlainLink = styled(Link)`
  ${linkStyle}
`;

// Link to a section of the home page (/#work): scrolls there smoothly when
// already home, otherwise opens home at that section (see Layout).
function SectionLink({
  id,
  active,
  children,
}: {
  id: SectionId;
  active: boolean;
  children: string;
}) {
  const onClick = useSectionClick();
  return (
    <PlainLink
      to={paths.section(id)}
      onClick={onClick(id)}
      className={active ? "active" : undefined}
      aria-current={active ? "location" : undefined}
    >
      {children}
    </PlainLink>
  );
}

const IconLink = styled(ExternalLink)`
  display: block;
  width: 32px;
  height: 32px;
  color: ${colors.text};
  transition:
    color 250ms ease,
    transform 250ms ease;

  &:hover {
    color: ${colors.accent};
    transform: translateY(-2px);
  }

  /* Phones: the profiles stay in the footer and the About contact card. */
  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

// The home page sections the nav links to.
const sections: readonly SectionId[] = ["experience", "work"];

function TopNav() {
  const { pathname } = useLocation();
  const home = pathname === paths.home;
  const active = useActiveSection(sections, home);
  // Home on the home page goes back to the top.
  const onClick = useSectionClick();
  return (
    <Bar>
      {/* Home is underlined on the home page unless a linked section is in
          view. */}
      <PlainLink
        to={paths.home}
        onClick={onClick(null)}
        className={home && !active ? "active" : undefined}
      >
        <Brand>
          <Mark />
          <span>Home</span>
        </Brand>
      </PlainLink>
      <Links>
        <SectionLink id="experience" active={active === "experience"}>
          Experience
        </SectionLink>
        <SectionLink id="work" active={active === "work"}>
          Work
        </SectionLink>
        <PageLink to="/about">About Me</PageLink>
        {socials.map(({ label, href, icon }) => {
          const Icon = icons[icon];
          return (
            <IconLink key={label} href={href} aria-label={label} title={label}>
              <Icon />
            </IconLink>
          );
        })}
      </Links>
      <Progress aria-hidden="true" />
    </Bar>
  );
}

export default TopNav;
