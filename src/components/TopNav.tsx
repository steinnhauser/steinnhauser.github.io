import { NavLink } from "react-router";
import styled from "styled-components";
import { socials } from "../content";
import { breakpoints, colors, NAV_HEIGHT } from "../theme";
import { GithubIcon, LinkedInIcon, StackOverflowIcon } from "./Icons";

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
  background: ${colors.primary}8c;
  backdrop-filter: blur(14px) saturate(140%);
  -webkit-backdrop-filter: blur(14px) saturate(140%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
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
  font-weight: 700;

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

const IconLink = styled.a`
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
        Home
      </PageLink>
      <Links>
        <PageLink to="/about">About Me</PageLink>
        {socials.map(({ label, href, icon }) => {
          const Icon = icons[icon];
          return (
            <IconLink
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
            >
              <Icon />
            </IconLink>
          );
        })}
      </Links>
    </Bar>
  );
}

export default TopNav;
