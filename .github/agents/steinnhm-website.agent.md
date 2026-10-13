---
name: steinnhm-website
description: Maintains steinnhm.com, Steinn Hauser Magnússon's personal portfolio site (Vite + Preact (React-compatible) + TypeScript, deployed to GitHub Pages via the gh-pages branch). Knows the site's purpose, its page structure, the CV it must reflect, the design language, how to verify changes, and the current project status.
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
- **Workflow when the CV changes:** update `docs/cv/cv.md` first, replace
  the downloadable PDF at `public/cv/Steinn-Hauser-Magnusson-CV.pdf` (the
  owner's master copy is `~/personal/projects/cv_steinnhm.pdf`), then update
  `src/content.ts` and run `make validate`.
- `src/cv.test.ts` fails the build if the site shows a role title, date
  range, certification, language, degree, volunteer role, publication link
  or key figure that isn't in the CV.
- Never invent achievements, numbers or skills. Wording may be tightened for
  the web, but the facts must come from the CV. If the CV and the site
  disagree, ask the owner.
- Deliberate exceptions (owner's decisions): SINTEF Energi (summer 2020)
  stays on the site although it is no longer on the CV (`NOT_ON_CV` in
  `cv.test.ts`). The "GitHub Actions" skill and the USIT bullet under UiO
  come from the original site. The ENT3R tutoring description (students
  aged 16 to 18, final exams in advanced maths and sciences) was provided
  by the owner; the CV lists only the title and dates.
- The repository is **public**: everything in `docs/cv/` is published with
  it.

## Site map

`HashRouter`, so every URL looks like `https://steinnhm.com/#/...`.

| Route                   | Page                                                                                                                                                                                                                                                                                                                                |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `#/`                    | **Home**, four sections (a full-screen hero, then sections of at least 85% screen height). **Hero:** portrait, headline, "Hi, I'm Steinn." and a two-paragraph professional summary, CTAs, and the key-figure band (`highlights`). **01 Experience:** tiles linking to each role. **02 Skills & Certifications.** **03 Education.** |
| `#/experience/:slug`    | One page per experience (`experiences[]`): logo, company, every position with dates and bullets, technology tags, and prev/next links.                                                                                                                                                                                              |
| `#/about`               | **About:** longer narrative, contact card (email, phone, location, profiles), and Volunteering & Open Source.                                                                                                                                                                                                                       |
| `#/senec`, `#/uio`, ... | Legacy URLs from the old site. They redirect to `#/experience/...` (`legacyRoutes` in `App.tsx`). Anything else redirects home.                                                                                                                                                                                                     |

Every page shares the frosted top nav (Home, About Me, GitHub, LinkedIn,
Stack Overflow) and a footer with contact links.

## Stack

- Node 24 LTS (`.nvmrc`). Vite 8, TypeScript 6 (stays on 6.x until
  typescript-eslint supports 7), react-router 8, styled-components 6.
- **Preact 11 instead of React** (about 60 KB smaller). Code is written
  and typed as React (`@types/react`); `vite.config.ts` aliases every
  `react`/`react-dom` import, including inside dependencies, to
  `preact/compat`. `src/compat/react.js` adds a pass-through
  `useOptimistic` (missing from preact/compat; react-router imports it only
  for data routers, which this site doesn't use). `src/compat/compat.test.ts`
  fails if the aliasing breaks. Use `@testing-library/preact`, not
  `@testing-library/react`. A new dependency that needs a React feature
  Preact lacks must be checked first.
- Prettier, ESLint 10 (typescript-eslint, react-hooks, react-refresh), and
  Vitest with Testing Library (Preact) and jsdom.
- Fonts: Poppins (text and headings) and JetBrains Mono (eyebrows, tags,
  figures), from Google Fonts in `index.html`.
- `Makefile` for all tasks. Every Node command goes through
  `scripts/node-env.sh`, which switches to the `.nvmrc` Node via nvm. The
  owner's shell defaults to Node 22.9, and the tests crash on that version.

## Project map

| Path                                      | Purpose                                                                                                                                                                                   |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `docs/cv/cv.md`                           | The CV, the source of truth for content.                                                                                                                                                  |
| `src/content.ts`                          | **All site text and data**: profile, intro, highlights, experiences, skills, certifications, languages, education, volunteering.                                                          |
| `src/theme.ts`                            | Colour tokens (incl. the `sun` accent), fonts, breakpoint, nav height, and the `glass` mixin.                                                                                             |
| `src/main.tsx` / `src/App.tsx`            | Entry point (`HashRouter`); layout and routes, including legacy redirects.                                                                                                                |
| `src/pages/Home.tsx`                      | Composes the home sections from `src/pages/home/` (`Hero`, `ExperienceSection`, `SkillsSection`, `EducationSection`).                                                                     |
| `src/pages/Experience.tsx`                | One template for every experience page.                                                                                                                                                   |
| `src/pages/About.tsx`                     | About page.                                                                                                                                                                               |
| `src/components/Section.tsx`              | Page section: background curves, optional photo backdrop (`{ large, small }`), aurora, tint; `slant` (diagonal top edge) and `compact` (content height). Children are `(visible) => ...`. |
| `src/components/Aurora.tsx`               | Drifting colour glows behind the glass: `dusk` (About), `tide` (Skills, Volunteering, experience pages). None on the hero.                                                                |
| `src/components/reveal.ts`                | `reveal(visible, index, offset)`: per-element scroll-reveal styles.                                                                                                                       |
| `src/components/ui.tsx`                   | Styled primitives: `GlassCard`, `LiquidPanel`, `SectionTitle`, `SectionLabel`, `Dot`, `Eyebrow`, `Muted`, `Tag`/`TagList`, `PillLink`, `TwoColumn`.                                       |
| `src/components/ExternalLink.tsx`         | Use for every link to another site (new tab, `rel="noopener noreferrer"`).                                                                                                                |
| `src/components/Layout.tsx`, `TopNav.tsx` | Page shell (nav, footer, grain overlay, scroll-to-top) and the top navigation.                                                                                                            |
| `src/components/Curves.tsx`, `Icons.tsx`  | The eight background curve variants; social icons.                                                                                                                                        |
| `src/hooks/useElementOnScreen.ts`         | IntersectionObserver hook that drives all scroll animation.                                                                                                                               |
| `src/assets/photos/`, `src/assets/logos/` | WebP portrait, landscape backdrops (large + 800px variants) and company logos. Raw originals are git-ignored.                                                                             |
| `src/*.test.ts(x)`, `src/test/`           | `content.test.ts` (data integrity), `cv.test.ts` (site matches CV), `assets.test.ts` (image budget), `App.test.tsx` (pages and routing).                                                  |
| `Makefile`, `scripts/node-env.sh`         | Task runner and Node-version wrapper (also used by the pre-commit hooks).                                                                                                                 |
| `.pre-commit-config.yaml`                 | Hygiene, Prettier, ESLint, `tsc` and Vitest hooks, identical to CI.                                                                                                                       |
| `.github/workflows/ci.yml`                | PR checks (pre-commit hooks), build, and deploy to `gh-pages` on `master`.                                                                                                                |
| `.github/dependabot.yml`                  | Weekly npm and GitHub Actions update PRs.                                                                                                                                                 |

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
- **Diagonal section edges** (`slant`, and the footer): each block overlaps
  the one above by `SLANT` and is clipped along a diagonal (`slantTop` in
  `theme.ts`), so the wedge shows the previous section's real background
  (photo, aurora, curves) and the pages appear to slide over each other.
  Sections therefore have opaque backgrounds. Never go back to drawing a
  flat-coloured triangle; it can't match photo or aurora backgrounds.
- **Section rhythm:** the first section of a page fills the screen; every
  later one is `compact` (content height, generous padding), so there are
  no empty bands. All section headings are left-aligned. Sections use
  `overflow: clip` (not `hidden`) so `position: sticky` works inside them;
  the Education title sticks while its cards scroll.
- **Photography:** the owner's own photos. A lava/snow field sits behind the
  home hero and a coastal sunset behind the About intro, both darkened and
  vignetted so they read as texture (`Section photo={...}`), and fainter on
  phones. A fixed SVG sand grain covers the page. The portrait sits in a
  sun-to-blue ring.
- **Aurora** (`Section aurora=...`), inspired by GitLab's sign-in page but in
  dark mode: soft peach, rose, lavender and blue glows (`aurora` in
  `theme.ts`) that drift slowly behind the glass, so the panels pick up
  colour. `dusk` on About is the strongest and is the showpiece; keep the
  others subtler. The home hero has **no** aurora (owner's call: it looked
  out of place on the cover); the lava photo carries it.
- **Motion:** every title, card and tile reveals itself with `reveal()` (a
  short fade and a longer staggered slide). Flex gaps "breathe" and list
  items slide in. Everything replays on scrolling back, and
  `prefers-reduced-motion` turns it off.
- **Liquid glass** (`glass` in `theme.ts`) on the nav, cards, tiles, pills
  and key figures: strong blur and saturation, a soft sheen, and a specular
  rim (`::before`) that is bright at the top-left and picks up blue and gold
  at the bottom-right. `LiquidPanel` is the richest variant (deeper blur,
  caustic sheen, 26px radius), used for reading panels: the hero intro, the
  About story and contact cards, and experience pages. A panel that contains
  glass buttons reveals as one piece (its children don't fade separately).
  Rules:
  - **Never put `opacity` or `filter` (or a transition of them) on an
    ancestor of a glass element.** Browsers skip the backdrop blur while it
    runs, which leaves sharp curves showing through the cards. Fade the
    glass element itself with `reveal()`.
  - `::before` is the rim. Components built on `glass` decorate with
    `::after`.
  - Hover lifts use `hoverLift` (the `translate` property, and only on
    devices with hover), so they combine with `reveal()`'s inline transform.
- **Portfolio conventions:** monospace headline, key-figure band, numbered
  section labels ("01 / experience"), monospace tags and year ranges.
  Headings are bold Poppins ending in a gold full stop ("Hi, I'm Steinn.",
  "About me."). The hero has three actions: View experience (primary), Get
  in touch, and Download CV; the About contact card also offers the CV.

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
- Check desktop (~1440px), phone portrait (390px and 360px) and phone
  landscape (844×390) in a real browser: no horizontal scroll, the curves
  draw, and the curves are blurred behind cards mid-transition.
- **Mobile:** the `breakpoints.mobile` (760px) rules are for phones in
  portrait. Phone landscape (~844px wide) deliberately keeps the desktop
  layout; don't break it. In portrait, body text is left-aligned (never
  centre long paragraphs) and buttons go full width.
- **Images** must stay compact (`assets.test.ts`): WebP only, at most 100 KB
  each and 250 KB in total. Encode at the displayed size: logos 340px,
  portrait 480px (native pixels from the original, never upscaled, lightly sharpened), backdrops 1280px plus an 800px variant for phones (pass
  both via `photo={{ large, small }}`). Never commit camera originals.
- Deployment: the `CI` workflow publishes `dist/` to the `gh-pages` branch on
  every push to `master` (or a manual run), once checks and build pass.
  GitHub Pages serves it at the domain in `public/CNAME`.
- Git: this repository has a local identity (`steinnhauser
<hausersteinn@gmail.com>`), pushes over SSH with `~/.ssh/github_personal`
  (`core.sshCommand`), and GPG-signs commits and tags with key
  `F3B9E1AA2D4C4419`, which GitHub verifies. The owner's global git config
  is for work; don't change it.
- Versions: `v1.0.0` tags the old static site. The current site (React-style code on Preact) is `2.x`
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
  accent, JetBrains Mono, sand grain, responsive layout.
- Liquid-glass and aurora pass (October 2026): new `glass` with a specular
  rim, `LiquidPanel`, drifting `Aurora` glows, a liquid nav bar, and a
  redesigned About page (story panel, contact card with social buttons) as
  the showpiece. Phone portrait readability (left-aligned hero, full-width
  buttons) with landscape unchanged.
- Cover refinements: the hero intro sits on a `LiquidPanel`, the hero
  aurora was removed, the portrait was re-cut at native resolution (sharp
  instead of upscaled), and the contact card lost its icon chips in favour
  of plain hairline rows.
- Refinement pass: real diagonal section edges replacing the flat
  triangles (and a slanted footer), compact sections, a left-aligned
  Experience header with an even tile grid, a sticky Education title,
  experience pages with an "All roles" link (returns to the Experience
  section via router state), gold bullet markers, a labelled tag group and
  prev/next pills, typography tuning (`text-wrap`, softer body text), and
  a tighter About narrative.
- Hero heading "Hi, I'm Steinn." with an intro that now reads as a full
  sentence; "Download CV" buttons (hero and About; PDF in `public/cv/`);
  lower sections at least 85% of the screen tall; expanded ENT3R tutoring
  description.
- Moved from React to Preact: JavaScript 111.8 → 52.3 KB gzipped.
- Dismissed the stale Dependabot alert #5 (jQuery file deleted in 2021).
- Build size: images re-encoded to WebP at their displayed size (558 KB →
  184 KB, with 800px backdrops on phones), an unused font weight dropped,
  and an image budget test added. `dist/` is about 600 KB in total.
- Fixed: the glass blur dropping out during reveals; the observer being
  rebuilt every render; slide-ins that never ran; sections taller than the
  viewport never appearing; accessibility gaps.
- Tooling: latest dependencies (`npm audit`: 0), Prettier, ESLint, Vitest
  (48 tests), pre-commit, CI with deploy, Dependabot, Makefile.

### Open / next steps

- Image bug reported by the owner (October 2026): after Home → About → Home,
  every `<img>` showed as broken while the CSS background photo loaded. It
  could not be reproduced in headless Chrome against the dev server or the
  production preview (four round trips, no failed requests). Waiting on
  browser, URL and DevTools Network details from the owner.
- In Settings → Branches, consider requiring the CI checks before merging
  into `master`.
- Move to TypeScript 7 when typescript-eslint supports it.
- Consider an Open Graph preview image and a full favicon set.
