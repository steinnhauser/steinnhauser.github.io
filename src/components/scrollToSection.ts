import type { MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router";
import { paths, type SectionId } from "../routes";

// Smoothly scrolls a home page section into view, or back to the top for
// `null` (instantly for reduced motion). Sections carry
// `scroll-margin-top`, so they clear the nav.
export function scrollToSection(id: SectionId | null) {
  const reduce = window.matchMedia?.(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const behavior = reduce ? "auto" : "smooth";
  if (id === null) window.scrollTo({ top: 0, behavior });
  else document.getElementById(id)?.scrollIntoView({ behavior });
}

// Click handler for links to a home page section (/#work) or to the top
// of home (`null`): on the home page it scrolls there smoothly and updates
// the address; elsewhere the link navigates and Layout scrolls on arrival.
export function useSectionClick() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (id: SectionId | null) => (e: MouseEvent) => {
    if (pathname !== paths.home) return;
    e.preventDefault();
    scrollToSection(id);
    navigate(id ? paths.section(id) : paths.home, { replace: true });
  };
}
