# steinnhm.com

Personal portfolio website of Steinn Hauser Magnússon, served at
<https://steinnhm.com>.

Built with [Vite](https://vite.dev), TypeScript and styled-components,
written as React code that runs on [Preact](https://preactjs.com) (about
60 KB smaller; see `vite.config.ts`), and deployed to GitHub Pages from the
`gh-pages` branch.

## What the site is for

The site is the web version of my CV: the same facts, presented for
recruiters, hiring managers and engineers. It shows a cloud operator and
software engineer running production Kubernetes platforms, with a
background in computational physics, research and data science. The CV in
[`docs/cv/cv.md`](docs/cv/cv.md) is the source of truth, and a test fails if
the site shows anything that isn't in it.

| Page                              | Contents                                                                                                                         |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Home (`/`)                        | Portrait and professional summary, key figures, then the career timeline, Selected Work, Skills & Certifications, and Education. |
| Experience (`/experience/<role>`) | One page per role: positions, dates, responsibilities and technologies.                                                          |
| Project (`/projects/<name>`)      | One page per open-source project: what it is, key figures, how it works, and links.                                              |
| About (`/about`)                  | Longer narrative, contact details, and volunteering & open-source work.                                                          |

Home sections have their own addresses (`/#experience`, `/#work`,
`/#skills`, `/#education`). Old links keep working: the hash URLs used
until November 2026 (`/#/about`), the pages of the first static site
(`/about.html`) and `/project/<name>` all redirect (`src/routes.ts`).
Anything else shows a not-found page.

## Getting started

Requires [nvm](https://github.com/nvm-sh/nvm) (or Node 24 from `.nvmrc`)
and `make`.

```sh
make install    # installs Node 24 via nvm, then npm dependencies
make run        # http://localhost:5173 with hot reload
make validate   # format, lint, typecheck, test and build
```

`make` alone lists every target. All Node commands run through
`scripts/node-env.sh`, which switches to the `.nvmrc` Node version, so they
work even when your shell defaults to an older Node.

## Make targets

| Command          | What it does                                                    |
| ---------------- | --------------------------------------------------------------- |
| `make install`   | Install the `.nvmrc` Node version (via nvm) and npm deps.       |
| `make run`       | Dev server with hot reload (`make run PORT=3000` to change it). |
| `make validate`  | Format check, lint, typecheck, tests, then a production build.  |
| `make fix`       | Auto-fix formatting and lint issues.                            |
| `make build`     | Type-check and build the production site into `dist/`.          |
| `make preview`   | Build, then serve the production site on port 4173.             |
| `make precommit` | Run every pre-commit hook on all files, exactly as CI does.     |
| `make clean`     | Remove build output and tool caches.                            |

The same tasks exist as npm scripts (`npm run dev`, `build`, `preview`,
`format`, `format:check`, `lint`, `lint:fix`, `typecheck`, `test`,
`test:watch`, `check`) if you prefer to call them directly on Node 24.

## Pre-commit hooks

The same checks run as git hooks via [pre-commit](https://pre-commit.com),
and CI runs exactly these hooks on every pull request:

```sh
pip install pre-commit
pre-commit install            # run the hooks on every commit
pre-commit run --all-files    # run them on the whole repo
```

The hooks cover file hygiene (trailing whitespace, final newlines, valid
YAML/JSON, merge markers, large files), Prettier, ESLint, `tsc` and Vitest.
The local hooks use the tools from `node_modules`, so run `make install`
first.

## Project structure

```text
docs/cv/cv.md         The CV: source of truth for all content
src/
  content.ts          All site text and data, derived from the CV
  theme.ts            Colours, fonts, breakpoints, glass and light mixins
  fonts.css           Self-hosted fonts (latin subsets)
  compat/             react → Preact shim (see vite.config.ts)
  routes.ts           Every URL: page paths, pre-rendered pages, redirects
  meta.ts             Each page's title, description and canonical URL
  App.tsx, main.tsx   Routes and the browser entry point (hydration)
  prerender.tsx       Build-time renderer for the static pages
  pages/              Home, Experience and Project (one template each),
                      About, NotFound
  pages/home/         Home sections: Hero, Experience, Selected Work,
                      Skills, Education
  components/         Layout, TopNav, Section, reveal, Curves, Icons,
                      ExternalLink, shared UI primitives
  hooks/              useElementOnScreen (scroll reveals), usePointerLight
                      (cursor light on glass)
  assets/photos/      Portrait and landscape backgrounds (web-optimized)
  *.test.ts(x), test/ Tests: content integrity, site-vs-CV, pages, routes
scripts/prerender.ts  Writes the static pages, 404.html and sitemap.xml
TODO.md               Planned improvements, numbered
```

To change the site's content:

1. Update [`docs/cv/cv.md`](docs/cv/cv.md) if the facts changed, and
   replace the downloadable PDF in `public/cv/`.
2. Update `src/content.ts`. The pages pick the changes up automatically.
3. Run `make validate`. `src/cv.test.ts` fails if a title, date,
   certification, language, degree or key figure on the site isn't in the
   CV.

### Images

Images in `src/assets/photos/`, `src/assets/logos/` and
`src/assets/projects/` are WebP copies of the originals, encoded at the size
they're displayed (logos 340px, portrait 480px, backdrops 1280px plus an
800px variant for phones, project screenshots 720-880px).
`src/assets.test.tsx` enforces the budget: WebP only, at most 100 KB per
image and 250 KB in total. Keep the raw camera files out of git (see
`.gitignore`).

The site mark (".sh": the initials as a shell script, with the gold full
stop of the headings) is `public/favicon.svg`;
the nav draws the same artwork (`Mark` in `src/components/Icons.tsx`), and
`src/assets.test.tsx` fails if the two differ. `favicon-32.png`,
`apple-touch-icon.png` (180px, full bleed) and `og-image.jpg` (1200×630)
are rendered from it; re-render them when the mark changes.

## Routing and pre-rendering

Pages have real paths (`steinnhm.com/about`). `npm run build` (and so
`make build`) runs in three steps:

1. `vite build`: the browser bundle and an empty `dist/index.html` shell.
2. `vite build --ssr src/prerender.tsx`: the same app, bundled for Node.
3. `node scripts/prerender.ts`: renders every page into the shell, with
   its title, description, canonical URL and link preview tags, the
   styles it needs inline, and preloads for the fonts (and on the home
   page, the portrait). It writes `about.html`, `experience/<role>.html`
   and so on, which GitHub Pages serves at `/about` without a redirect,
   plus `404.html` (served for any unknown path) and `sitemap.xml`.

The content is in the HTML before any JavaScript runs, which helps search
engines, link previews and slow connections. In the browser, `main.tsx`
hydrates the page it was rendered for, or renders from scratch on
`404.html` (where the router then shows the redirect or the not-found
page). `make preview` serves `dist/` the way GitHub Pages does.

## CI and deployment

`.github/workflows/ci.yml`:

- **Pull requests to `master`:** run the pre-commit hooks (format, lint,
  typecheck, test) and build the site.
- **Pushes to `master`, or a manual run** (Actions → CI → Run workflow):
  the same checks, then publish `dist/` to the `gh-pages` branch, which
  GitHub Pages serves at the custom domain in `public/CNAME`.

Dependabot (`.github/dependabot.yml`) opens weekly update PRs for npm
packages and GitHub Actions.
