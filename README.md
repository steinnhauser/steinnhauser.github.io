# steinnhm.com

Personal portfolio website of Steinn Hauser Magnússon, served at
<https://steinnhm.com>.

Built with [Vite](https://vite.dev), [React](https://react.dev),
TypeScript and styled-components, and deployed to GitHub Pages from the
`gh-pages` branch.

## Getting started

Requires Node 24 (see `.nvmrc`).

```sh
nvm use
npm ci
npm run dev        # http://localhost:5173
```

## Scripts

| Command                | What it does                                                    |
| ---------------------- | --------------------------------------------------------------- |
| `npm run dev`          | Start the dev server with hot reload.                           |
| `npm run build`        | Type-check and build the production site into `dist/`.          |
| `npm run preview`      | Serve the production build locally.                             |
| `npm run format`       | Format everything with Prettier.                                |
| `npm run format:check` | Check formatting without changing files.                        |
| `npm run lint`         | Lint with ESLint (no warnings allowed).                         |
| `npm run typecheck`    | Type-check with `tsc`.                                          |
| `npm test`             | Run the Vitest test suite once (`npm run test:watch` to watch). |
| `npm run check`        | Format check, lint, typecheck and tests: everything CI runs.    |

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
The local hooks use the tools from `node_modules`, so run `npm ci` first.

## Project structure

```text
src/
  content.ts          All site content (the CV is the source of truth)
  theme.ts            Colours, breakpoints, frosted-glass mixin
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
