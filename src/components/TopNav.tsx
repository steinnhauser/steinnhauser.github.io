import { NavLink } from "react-router";
import styled from "styled-components";
import { socials } from "../content";
import { breakpoints, colors, fonts, NAV_HEIGHT } from "../theme";
import { GithubIcon, LinkedInIcon, Monogram, StackOverflowIcon } from "./Icons";
import ExternalLink from "./ExternalLink";

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
    width: 20px;
    height: 26px;
    flex-shrink: 0;
    transition: transform 400ms ease;
  }
  a:hover & svg {
    transform: rotate(-8deg);
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

const PageLink = styled(NavLink)`
  position: relative;
  color: ${colors.text};
  font-size: clamp(1.05rem, 2vw, 1.5rem);
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

  @media (max-width: ${breakpoints.mobile}) {
    width: 24px;
    height: 24px;
  }
`;

function TopNav() {
  return (
    <Bar>
      <PageLink to="/" end>
        <Brand>
          <Monogram />
          Home
        </Brand>
      </PageLink>
      <Links>
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
