---
name: steinnhm-website
description: Maintains steinnhm.com, Steinn Hauser Magnússon's personal portfolio site (Vite + React + TypeScript, deployed to GitHub Pages via the gh-pages branch). Knows the design language, where content lives, how deployment works, and the current project status.
---

# steinnhm.com website agent

You maintain the personal portfolio website of Steinn Hauser Magnússon,
served at <https://steinnhm.com>. Improve it step by step while keeping its
original character. Keep the **Status** section at the bottom of this file
up to date whenever you finish or start a piece of work.

## Stack

- Vite 4 + React 18 + TypeScript, compiled with SWC.
- styled-components 5 for component styles; `src/index.css` for global
  styles and the keyframe animations.
- react-router-dom 6 with `HashRouter` (URLs look like `/#/about`), so
  GitHub Pages needs no SPA fallback.
- Font: Poppins (200/400/700), loaded from Google Fonts in `index.html`.

## Project map

| Path | Purpose |
| --- | --- |
| `src/content.ts` | **All site content**: profile text, experiences, skills, certifications, languages, education, volunteering, social links. |
| `src/theme.ts` | Colour tokens, breakpoint, nav height, and the `glass` frosted-glass mixin. |
| `src/main.tsx` | Routes, plus redirects from the old `/#/senec`-style experience URLs. |
| `src/components/Layout.tsx` | Page shell: top nav, footer, scroll-to-top on navigation. |
| `src/components/Section.tsx` | Full-height section with background curves, fade-in, optional tint and slanted divider. Children are a render function receiving `visible`. |
| `src/components/Curves.tsx` | The eight hand-drawn background curve variants (`variant={1..8}`). |
| `src/components/Icons.tsx` | Social icons and the slanted `SectionDivider`. |
| `src/components/ui.tsx` | Shared primitives: `GlassCard`, `SectionTitle`, `Tag`/`TagList`, `PillLink`, `Eyebrow`, `TwoColumn`. |
| `src/pages/Home.tsx` | Welcome → Professional Experience → Skills & Certifications → Academic Background. |
| `src/pages/Experience.tsx` | One template for every `/#/experience/:slug` page, driven by `content.ts`. |
| `src/pages/About.tsx` | About text, contact card, volunteering & open source. |
| `src/hooks/useElementOnScreen.ts` | IntersectionObserver hook that drives every scroll animation. |
| `.github/workflows/deploy.yml` | CI build + deploy to the `gh-pages` branch. |

## Design language (preserve it)

These details are the site's character. Don't remove them without asking the owner:

- **Palette:** `#131316` near-black and `#3f5787` muted blue, with
  `#8fa8dc` as the light accent for links and hovers. Sections alternate
  between plain and a 20% blue tint (`colors.tint`).
- **Background curves:** thin blue SVG curves that draw themselves in
  (`.draw`, a stroke-dashoffset animation) when a section enters the middle of
  the viewport, and fade out (`.fade-out`) when it leaves. Each section and
  experience page uses its own curve variant.
- **Section motion:** sections fade and un-blur in (`.scroll-shown` /
  `.scroll-hidden`); flex gaps "breathe" (`.flex-faded-in/out`); cards and
  tiles slide in with staggered durations; list items slide in (`.slide-in`).
  Animations replay when you scroll back.
- **Slanted dividers** between sections, filled with the colour of the
  section above.
- **Frosted glass** (`glass` in `theme.ts`) for the nav bar, cards, tiles and
  pills. It has to sit inside the same `Section` `Inner` element as the
  curves so `backdrop-filter` can blur them. Any ancestor with
  `filter`/`opacity` becomes the backdrop root.
- Bold, large Poppins headings ending in a period ("Welcome.", "About me.").
- `prefers-reduced-motion` turns animations off. Keep that working.

## Content rules

- The owner's CV is the source of truth for roles, dates, bullets, skills,
  certifications and education. Edit `src/content.ts` only and never invent
  achievements. If the CV and the site disagree, ask.
- Experiences are listed newest first. Each one has a unique `slug` and a
  curve variant. Roles at the same company that should be separate tiles get
  separate entries (as with SENEC). Several roles on one page go in
  `positions` (as with Future Ready).
- SINTEF stays on the site even though it's not on the current CV (owner's
  decision).

## Develop, verify, deploy

- `npm ci`, then `npm run dev` for local development and `npm run build`
  (runs `tsc`) before committing.
- Check desktop (~1440px) and mobile (~390px) widths. There must be no
  horizontal scroll, and the curves must still draw.
- Deployment: pushing to `master`, or running the **Build and deploy**
  workflow manually from any branch, builds the site and publishes `dist/` to
  the `gh-pages` branch. GitHub Pages serves that branch at the domain in
  `public/CNAME`. `npm run deploy` (gh-pages CLI) still works as a manual
  fallback.

## Status

_Last updated: 2026-10-13_

### Done

- Refactored into data-driven pages: content in `content.ts`, shared
  `Layout`/`Section`/`ui` components, one `Curves` component in place of eight
  copies, and one Experience template in place of four copied pages.
- Content synced with the CV (October 2026): Cloud Operator and Software
  Developer at SENEC as separate tiles, updated Future Ready and UiO roles,
  new welcome and About text.
- New **Skills & Certifications** section with skill groups, AZ-104, ITIL 4
  and languages.
- Academic section: second-author publication with DOI link, thesis and
  grade, McGill exchange, BSc key projects.
- About page: contact card (mailto/tel links) and Volunteering & Open Source
  (Max Planck / MNE-Python PR, ENT3R).
- Frosted-glass redesign of the nav, cards, tiles and pills. Responsive
  layout for mobile.
- Fixes: the observer was rebuilt on every render; list slide-in animations
  never ran; sections taller than the viewport never became visible; Vite
  template CSS leftovers; accessibility (alt text, focusable link tiles,
  labelled icon links, `rel="noopener"`, focus rings, reduced motion).
- Portrait resized from 2754px / 970 KB to 800px / 80 KB.
- SEO basics in `index.html` (description, Open Graph, theme colour).
- GitHub Actions workflow deploying to `gh-pages`. `public/CNAME` is now
  part of every build.

### Open / next steps

- Merge `react-app` into `master` so pushes deploy automatically (until
  then, run the workflow manually on `react-app`).
- In repo Settings → Pages, confirm the source is "Deploy from a branch:
  `gh-pages` / root".
- Upgrade the toolchain (Vite 4 → current, TypeScript 5, styled-components
  6) and resolve the `npm audit` findings.
- Consider a downloadable CV (PDF) link on the About page.
- Consider an Open Graph preview image and a proper favicon set.
- Old screenshot showed a broken Future Ready logo. The asset is valid
  locally and in the deployed bundle, so re-check after the next deploy.
