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

- Node 24 LTS (`.nvmrc`). Vite 8, React 19 and TypeScript 6.
- styled-components 6 for component styles. `src/index.css` holds the global
  styles and the keyframe animations.
- react-router 8 with `HashRouter` (URLs look like `/#/about`), so GitHub
  Pages needs no SPA fallback.
- Prettier (format), ESLint 10 with typescript-eslint, react-hooks and
  react-refresh (lint), Vitest with Testing Library and jsdom (tests).
- Fonts: Poppins (text and headings) and JetBrains Mono (eyebrows, tags,
  figures), loaded from Google Fonts in `index.html`.
- `Makefile` wraps the common tasks (`make run`, `make validate`, ...). All
  Node commands go through `scripts/node-env.sh`, which switches to the
  `.nvmrc` Node via nvm. The owner's shell defaults to Node 22.9, and the
  tests crash on that version (`ERR_REQUIRE_ESM`).
- TypeScript stays on 6.x until typescript-eslint supports 7.

## Project map

| Path                              | Purpose                                                                                                                                            |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/content.ts`                  | **All site content**: profile text, experiences, skills, certifications, languages, education, volunteering, social links.                         |
| `src/theme.ts`                    | Colour tokens (incl. the `sun` accent), fonts, breakpoint, nav height, and the `glass` frosted-glass mixin.                                        |
| `src/main.tsx`                    | Entry point: mounts `<App />` inside `HashRouter`.                                                                                                 |
| `src/App.tsx`                     | Layout and routes, plus redirects from the old `/#/senec`-style URLs.                                                                              |
| `src/components/Layout.tsx`       | Page shell: top nav, footer, scroll-to-top on navigation.                                                                                          |
| `src/components/Section.tsx`      | Full-height section with background curves, optional photo backdrop, tint and slanted divider. Children are a render function receiving `visible`. |
| `src/components/reveal.ts`        | `reveal(visible, index, offset)`: per-element scroll-reveal styles (short fade, long staggered slide).                                             |
| `src/components/Curves.tsx`       | The eight hand-drawn background curve variants (`variant={1..8}`).                                                                                 |
| `src/components/Icons.tsx`        | Social icons and the slanted `SectionDivider`.                                                                                                     |
| `src/components/ui.tsx`           | Shared primitives: `GlassCard`, `SectionTitle`, `SectionLabel`, `Dot`, `Tag`/`TagList`, `PillLink` (`$primary`), `Eyebrow`, `TwoColumn`.           |
| `src/assets/photos/`              | Web-optimized portrait and landscape backdrops. The raw originals stay out of git (`.gitignore`).                                                  |
| `src/pages/Home.tsx`              | Welcome → Professional Experience → Skills & Certifications → Academic Background.                                                                 |
| `src/pages/Experience.tsx`        | One template for every `/#/experience/:slug` page, driven by `content.ts`.                                                                         |
| `src/pages/About.tsx`             | About text, contact card, volunteering & open source.                                                                                              |
| `src/hooks/useElementOnScreen.ts` | IntersectionObserver hook that drives every scroll animation.                                                                                      |
| `src/content.test.ts`             | Data-integrity tests for `content.ts` (unique slugs, valid curves, https links, and so on).                                                        |
| `src/App.test.tsx`                | Rendering and routing tests for every page.                                                                                                        |
| `src/test/`                       | Vitest setup (IntersectionObserver/scroll mocks) and the `renderAt` helper.                                                                        |
| `.pre-commit-config.yaml`         | Git hooks: file hygiene, Prettier, ESLint, `tsc`, Vitest.                                                                                          |
| `Makefile`, `scripts/node-env.sh` | Local task runner and the Node-version wrapper it (and the hooks) use.                                                                             |
| `.github/workflows/ci.yml`        | PR checks (the same pre-commit hooks), build, and deploy to `gh-pages`.                                                                            |
| `.github/dependabot.yml`          | Weekly npm and GitHub Actions update PRs.                                                                                                          |

## Design language (preserve it)

These details are the site's character. Don't remove them without asking the owner:

- **Palette** (from the owner's landscape photos: basalt, slate sea and sky,
  low sun): `#131316` near-black and `#3f5787` muted blue, `#8fa8dc` light
  blue for links, and `#f0b860` "sun" gold. Use the gold sparingly, only for
  eyebrows, the full stops in headings, key figures, the primary button and
  active/hover states. Sections alternate between plain and a 20% blue tint
  (`colors.tint`).
- **Photography:** the owner's own photos. A lava/snow field sits behind the
  home hero and a coastal sunset behind the About intro, both darkened and
  vignetted so they read as texture (`Section photo={...}`). A fixed SVG
  sand-grain overlay covers the page (`Layout`). The portrait sits in a
  sun-to-blue ring.
- **Developer-portfolio conventions:** a monospace headline
  (`profile.headline`), CV-backed key figures (`highlights`), numbered
  section labels ("01 / experience"), monospace tags and year ranges.
- **Background curves:** thin blue SVG curves that draw themselves in
  (`.draw`, a stroke-dashoffset animation) when a section enters the middle of
  the viewport, and fade out (`.fade-out`) when it leaves. Each section and
  experience page uses its own curve variant.
- **Section motion:** every title, card and tile reveals itself with
  `reveal()` (fades quickly, slides in with a staggered duration). Flex gaps
  "breathe" (`.flex-faded-in/out`) and list items slide in (`.slide-in`).
  Animations replay when you scroll back.
- **Slanted dividers** between sections, filled with the colour of the
  section above.
- **Frosted glass** (`glass` in `theme.ts`) for the nav bar, cards, tiles,
  pills and key figures. **Never put `opacity` or `filter` (or a transition
  of them) on an ancestor of a glass element.** Browsers skip the backdrop
  blur while it runs, so the curves show sharp through the cards until the
  fade ends. That was a real bug, fixed in October 2026. Fade the glass
  element itself with `reveal()`.
- Bold, large Poppins headings ending in a gold full stop ("Welcome.",
  "About me." via `<Dot>`).
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

- `make install` once, then `make run` (dev server on port 5173).
- Before committing, run `make validate` (format check, lint, typecheck,
  tests, build), or let the pre-commit hooks do it (`pre-commit install`
  once; `make precommit` runs them on all files). CI runs exactly the same
  hooks, so local and PR results match.
- Add or extend tests in `src/*.test.ts(x)` for new behaviour. Content
  changes are covered by `content.test.ts` and the page tests automatically.
- Check desktop (~1440px) and mobile (~390px) widths in a browser. There must
  be no horizontal scroll, and the curves must still draw. When changing
  motion, look at frames mid-transition too: the curves must be blurred
  behind cards while they slide in.
- New photos: export a resized copy (at most about 1920px wide, WebP for
  backgrounds) into `src/assets/photos/`. Never commit camera originals.
- Deployment: the `CI` workflow deploys `dist/` to the `gh-pages` branch on
  every push to `master`, or on a manual run from any branch, once the checks
  and the build pass. GitHub Pages serves that branch at the domain in
  `public/CNAME`. There is no local deploy command; use a manual workflow run.

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
- All dependencies upgraded to their latest versions (Vite 8, React 19,
  react-router 8, styled-components 6, TypeScript 6). Moved to
  `@vitejs/plugin-react` and dropped the `gh-pages` CLI (the source of five
  high `npm audit` findings). `npm audit`: 0 vulnerabilities.
- Prettier, ESLint, Vitest (18 tests) and pre-commit hooks, all run in CI on
  every PR. Weekly updates via Dependabot.
- Dependabot alert #5 (jQuery 3.3.1, XSS): the flagged file
  `assets/js/vendor/jquery/jquery-3.3.1.min.js` was removed from `master` in
  2021 (`4872f14`), so the alert is stale and can be dismissed. The React
  site contains no jQuery.

- Redesign inspired by the owner's photography (October 2026): new
  portrait from a 2023 conference-booth photo, lava-field hero and sunset
  About backdrops, sun-gold accent, JetBrains Mono detail type, sand grain,
  key-figure strip, numbered section labels, year ranges on tiles, and
  contact links in the footer.
- Fixed the glass blur dropping out while cards faded in. Sections no longer
  fade as a whole, and each element reveals itself (`reveal()`).
- `Makefile` (`run`, `validate`, `fix`, `build`, `preview`, `precommit`,
  `clean`, `install`), plus `scripts/node-env.sh` so `make` and the hooks
  always use the `.nvmrc` Node. 20 tests.

### Open / next steps

- Merge `react-app` into `master`. This replaces the old static site, which
  still loads jQuery 2.1.3 (known XSS issues) from Google's CDN, and turns
  on automatic deploys.
- Dismiss Dependabot alert #5 once that merge is done.
- In repo Settings → Pages, confirm the source is "Deploy from a branch:
  `gh-pages` / root". In Settings → Branches, consider requiring the CI
  checks before merging into `master`.
- Move to TypeScript 7 when typescript-eslint supports it.
- Consider code-splitting the experience/about pages (bundle is about
  104 KB gzipped).
- Consider a downloadable CV (PDF) link on the About page.
- Consider an Open Graph preview image and a proper favicon set.
