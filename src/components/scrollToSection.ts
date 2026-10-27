// Smoothly scrolls a home page section into view (instantly for reduced
// motion). Sections carry `scroll-margin-top`, so they clear the nav.
export function scrollToSection(id: string) {
  const reduce = window.matchMedia?.(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
}
