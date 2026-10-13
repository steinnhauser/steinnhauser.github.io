# steinnhm.com

Personal portfolio website of Steinn Hauser Magnússon, served at
<https://steinnhm.com>.

Built with [Vite](https://vite.dev), [React](https://react.dev),
TypeScript and styled-components, and deployed to GitHub Pages from the
`gh-pages` branch.

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
src/
  content.ts          All site content (the CV is the source of truth)
  theme.ts            Colours, fonts, breakpoints, frosted-glass mixin
  assets/photos/      Portrait and landscape backgrounds (web-optimized)
  App.tsx             Layout and routes
  main.tsx            Entry point (HashRouter)
  components/         Layout, TopNav, Section, Curves, Icons, UI primitives
  pages/              Home, About, Experience (one template for all roles)
  hooks/              useElementOnScreen (drives the scroll animations)
  test/               Vitest setup and helpers
  *.test.ts(x)        Tests
```

To update the site's content (roles, skills, education and so on), edit
`src/content.ts`. The pages and tests pick the changes up automatically.

Photos in `src/assets/photos/` are resized copies of the originals. Keep the
raw camera files out of git (see `.gitignore`); they are several MB each and
the large-file hook rejects anything over 1 MB.

## CI and deployment

`.github/workflows/ci.yml`:

- **Pull requests to `master`:** run the pre-commit hooks (format, lint,
  typecheck, test) and build the site.
- **Pushes to `master`, or a manual run** (Actions → CI → Run workflow):
  the same checks, then publish `dist/` to the `gh-pages` branch, which
  GitHub Pages serves at the custom domain in `public/CNAME`.

Dependabot (`.github/dependabot.yml`) opens weekly update PRs for npm
packages and GitHub Actions.

## For agents

Project context, design rules and current status for AI agents are in
[`.github/agents/steinnhm-website.agent.md`](.github/agents/steinnhm-website.agent.md).
