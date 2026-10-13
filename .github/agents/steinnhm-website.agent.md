---
name: steinnhm-website
description: Maintains steinnhm.com, Steinn Hauser Magnússon's personal portfolio site (Vite + React + TypeScript, deployed to GitHub Pages via the gh-pages branch). Knows the site's purpose, its page structure, the CV it must reflect, the design language, how to verify changes, and the current project status.
---

# steinnhm.com website agent

You maintain the personal portfolio website of Steinn Hauser Magnússon,
served at <https://steinnhm.com>. Improve it step by step while keeping its
character. **Read `docs/cv/cv.md` before changing any content.** Keep the
**Status** section at the bottom of this file up to date whenever you finish
a piece of work.

## Purpose and audience

The site is the owner's professional front page. It should **reflect and
strengthen the CV**: the same facts, presented so a reader understands them
within seconds and wants to read further.

- **Readers:** recruiters and hiring managers screening for cloud, platform
  and DevOps roles, and engineers who want to see what the owner actually
  builds.
- **Message:** a cloud operator and software engineer who runs production
  Kubernetes platforms (infrastructure as code, GitOps, automation,
  security), with a rare background in computational physics, peer-reviewed
  research and data science / ML. He works in four languages.
- **Tone:** professional, concrete and evidence-led. Lead with scope and
  outcomes, back claims with specifics from the CV, and avoid filler.

## The CV is the source of truth

- `docs/cv/cv.md` is a Markdown transcription of the owner's CV. Agents read
  it, and git shows changes to it as reviewable diffs.
- **Workflow when the CV changes:** update `docs/cv/cv.md` first, then
  `src/content.ts`, then run `make validate`.
- `src/cv.test.ts` fails the build if the site shows a role title, date
  range, certification, language, degree, volunteer role, publication link
  or key figure that isn't in the CV.
- Never invent achievements, numbers or skills. Wording may be tightened for
  the web, but the facts must come from the CV. If the CV and the site
  disagree, ask the owner.
- Deliberate exceptions (owner's decisions): SINTEF Energi (summer 2020)
  stays on the site although it is no longer on the CV (`NOT_ON_CV` in
  `cv.test.ts`). The "GitHub Actions" skill and the USIT bullet under UiO
  come from the original site.
- The repository is **public**: everything in `docs/cv/` is published with
  it.

## Site map

`HashRouter`, so every URL looks like `https://steinnhm.com/#/...`.

| Route                   | Page                                                                                                                                                                                                                                                                   |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `#/`                    | **Home**, four full-height sections. **Hero:** portrait, headline, "Welcome." and a two-paragraph professional summary, CTAs, and the key-figure band (`highlights`). **01 Experience:** tiles linking to each role. **02 Skills & Certifications.** **03 Education.** |
| `#/experience/:slug`    | One page per experience (`experiences[]`): logo, company, every position with dates and bullets, technology tags, and prev/next links.                                                                                                                                 |
| `#/about`               | **About:** longer narrative, contact card (email, phone, location, profiles), and Volunteering & Open Source.                                                                                                                                                          |
| `#/senec`, `#/uio`, ... | Legacy URLs from the old site. They redirect to `#/experience/...` (`legacyRoutes` in `App.tsx`). Anything else redirects home.                                                                                                                                        |

Every page shares the frosted top nav (Home, About Me, GitHub, LinkedIn,
Stack Overflow) and a footer with contact links.

## Stack

- Node 24 LTS (`.nvmrc`). Vite 8, React 19 and TypeScript 6 (stays on 6.x
  until typescript-eslint supports 7). react-router 8. styled-components 6.
- Prettier, ESLint 10 (typescript-eslint, react-hooks, react-refresh), and
  Vitest with Testing Library and jsdom.
- Fonts: Poppins (text and headings) and JetBrains Mono (eyebrows, tags,
  figures), from Google Fonts in `index.html`.
- `Makefile` for all tasks. Every Node command goes through
  `scripts/node-env.sh`, which switches to the `.nvmrc` Node via nvm. The
  owner's shell defaults to Node 22.9, and the tests crash on that version.

## Project map

| Path                                      | Purpose                                                                                                                              |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `docs/cv/cv.md`                           | The CV, the source of truth for content.                                                                                             |
| `src/content.ts`                          | **All site text and data**: profile, intro, highlights, experiences, skills, certifications, languages, education, volunteering.     |
| `src/theme.ts`                            | Colour tokens (incl. the `sun` accent), fonts, breakpoint, nav height, and the `glass` mixin.                                        |
| `src/main.tsx` / `src/App.tsx`            | Entry point (`HashRouter`); layout and routes, including legacy redirects.                                                           |
| `src/pages/Home.tsx`                      | Composes the home sections from `src/pages/home/` (`Hero`, `ExperienceSection`, `SkillsSection`, `EducationSection`).                |
| `src/pages/Experience.tsx`                | One template for every experience page.                                                                                              |
| `src/pages/About.tsx`                     | About page.                                                                                                                          |
| `src/components/Section.tsx`              | Full-height section: background curves, optional photo backdrop, tint, slanted divider. Children are `(visible) => ...`.             |
| `src/components/reveal.ts`                | `reveal(visible, index, offset)`: per-element scroll-reveal styles.                                                                  |
| `src/components/ui.tsx`                   | Styled primitives: `GlassCard`, `SectionTitle`, `SectionLabel`, `Dot`, `Eyebrow`, `Muted`, `Tag`/`TagList`, `PillLink`, `TwoColumn`. |
| `src/components/ExternalLink.tsx`         | Use for every link to another site (new tab, `rel="noopener noreferrer"`).                                                           |
| `src/components/Layout.tsx`, `TopNav.tsx` | Page shell (nav, footer, grain overlay, scroll-to-top) and the top navigation.                                                       |
| `src/components/Curves.tsx`, `Icons.tsx`  | The eight background curve variants; social icons and the section divider.                                                           |
| `src/hooks/useElementOnScreen.ts`         | IntersectionObserver hook that drives all scroll animation.                                                                          |
| `src/assets/photos/`                      | Web-optimized portrait and landscape backdrops. Raw originals are git-ignored.                                                       |
| `src/*.test.ts(x)`, `src/test/`           | `content.test.ts` (data integrity), `cv.test.ts` (site matches CV), `App.test.tsx` (pages and routing); test setup and helpers.      |
| `Makefile`, `scripts/node-env.sh`         | Task runner and Node-version wrapper (also used by the pre-commit hooks).                                                            |
| `.pre-commit-config.yaml`                 | Hygiene, Prettier, ESLint, `tsc` and Vitest hooks, identical to CI.                                                                  |
| `.github/workflows/ci.yml`                | PR checks (pre-commit hooks), build, and deploy to `gh-pages` on `master`.                                                           |
| `.github/dependabot.yml`                  | Weekly npm and GitHub Actions update PRs.                                                                                            |

## Design language (preserve it)

These details are the site's character. Don't remove them without asking the
owner:

- **Palette**, taken from the owner's landscape photos (basalt, slate sea
  and sky, low sun): `#131316` near-black, `#3f5787` muted blue, `#8fa8dc`
  light blue for links, and `#f0b860` "sun" gold. Use the gold sparingly:
  eyebrows, the full stops in headings, key figures, the primary button, and
  active/hover states. Sections alternate between plain and a 20% blue tint.
- **Background curves:** thin blue SVG curves that draw themselves in
  (`.draw`) when a section reaches the middle of the viewport, and fade out
  when it leaves. Each section and experience page has its own variant.
- **Photography:** the owner's own photos. A lava/snow field sits behind the
  home hero and a coastal sunset behind the About intro, both darkened and
  vignetted so they read as texture (`Section photo={...}`). A fixed SVG
  sand grain covers the page. The portrait sits in a sun-to-blue ring.
- **Motion:** every title, card and tile reveals itself with `reveal()` (a
  short fade and a longer staggered slide). Flex gaps "breathe" and list
  items slide in. Everything replays on scrolling back, and
  `prefers-reduced-motion` turns it off.
- **Frosted glass** (`glass`) on the nav, cards, tiles, pills and key
  figures. **Never put `opacity` or `filter` (or a transition of them) on an
  ancestor of a glass element.** Browsers skip the backdrop blur while it
  runs, which leaves sharp curves showing through the cards. Fade the glass
  element itself.
- **Portfolio conventions:** monospace headline, key-figure band, numbered
  section labels ("01 / experience"), monospace tags and year ranges.
  Headings are bold Poppins ending in a gold full stop ("Welcome.",
  "About me.").

## Content rules

- Experiences are listed newest first, each with a unique `slug` and a curve
  variant. Separate roles at one company that should get their own tiles are
  separate entries (as with SENEC). Several roles on one page go in
  `positions` (as with Future Ready).
- Key figures (`highlights`) must each be backed by the CV. Certification
  figures are generated from `certifications`.
- The intro names the four languages; `content.test.ts` checks that it
  stays in sync with `languages`.

## Develop, verify, deploy

- `make install` once, then `make run` (dev server on port 5173). Run `make`
  for all targets.
- Before committing, run `make validate` (format check, lint, typecheck,
  tests, build). The pre-commit hooks run the same checks; install them once
  with `pre-commit install`. CI runs exactly these hooks.
- Add or extend tests for new behaviour. Check that a new test can fail.
- Check desktop (~1440px) and mobile (~390px) in a real browser: no
  horizontal scroll, the curves draw, and the curves are blurred behind cards
  mid-transition.
- New photos: export a resized copy (at most about 1920px, WebP for
  backgrounds) into `src/assets/photos/`. Never commit camera originals (the
  large-file hook rejects anything over 1 MB).
- Deployment: the `CI` workflow publishes `dist/` to the `gh-pages` branch on
  every push to `master` (or a manual run), once checks and build pass.
  GitHub Pages serves it at the domain in `public/CNAME`.
- Versions: `v1.0.0` tags the old static site. The React site is `2.x`
  (`package.json`).

## Status

_Last updated: 2026-10-13_

### Done

- React rewrite merged into `master` (PR #3). The old static site is
  preserved as tag `v1.0.0`.
- Data-driven architecture: all content in `content.ts`, shared
  `Section`/`reveal`/`ui` building blocks, one Experience template, home
  sections split into `src/pages/home/`.
- Content synced with the CV (October 2026). The CV is tracked in
  `docs/cv/cv.md` and enforced by `cv.test.ts`.
- Professional intro (role and scope, then the physics/research/ML
  background and four languages). The key-figure band shows 6+ years, 50+
  servers, MSc (Grade A), AZ-104 and ITIL 4.
- Skills & Certifications, Education (publication DOI, thesis, grade,
  McGill, BSc projects), About with contact card and Volunteering & Open
  Source.
- Photography-led redesign: new portrait, lava and sunset backdrops, sun-gold
  accent, JetBrains Mono, sand grain, frosted glass, responsive layout.
- Fixed: the glass blur dropping out during reveals; the observer being
  rebuilt every render; slide-ins that never ran; sections taller than the
  viewport never appearing; accessibility gaps.
- Tooling: latest dependencies (`npm audit`: 0), Prettier, ESLint, Vitest
  (31 tests), pre-commit, CI with deploy, Dependabot, Makefile. `knip` finds
  no unused files, exports or dependencies.

### Open / next steps

- Image bug reported by the owner (October 2026): after Home → About → Home,
  every `<img>` showed as broken while the CSS background photo loaded. It
  could not be reproduced in headless Chrome against the dev server or the
  production preview (four round trips, no failed requests). Waiting on
  browser, URL and DevTools Network details from the owner.
- Dismiss the stale Dependabot alert #5. Its jQuery file was deleted in 2021
  and `master` no longer loads jQuery.
- Optional "Download CV" button: add the PDF to `public/cv/` and link it
  from the hero and About.
- In Settings → Branches, consider requiring the CI checks before merging
  into `master`.
- Move to TypeScript 7 when typescript-eslint supports it.
- Consider code-splitting the experience and about pages (the JS bundle is
  about 105 KB gzipped), an Open Graph preview image, and a full favicon set.
