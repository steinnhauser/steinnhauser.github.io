# TODO

Planned improvements to steinnhm.com, highest value first. Numbers stay
stable when items are done or added, so other notes can refer to them;
finished items move to "Done" with their date.

## Open

1. **Show proof on the Selected Work cards.** The open-source repos already
   prove things on every change: Minnumst's CI hardens a VM and needs a
   second run to change nothing, recipify only publishes a recipe at
   recall and precision 1.0, and coverage is gated. Show those results
   (with links to the CI runs) instead of describing them. Verify every
   figure against the repos before it goes on the site.
2. **Measured outcomes for the SENEC card** (owner to provide): the effect
   of the maintenance platform, in numbers that can be shared.
3. **Two or three short technical write-ups**, for example how recipify
   proves nothing was added to a recipe, or how Minnumst's CI checks that
   the hardening is idempotent. A `/notes/<slug>` page type would fit the
   pre-rendered routing as it is.
4. ~~Choose the site mark~~: done 2026-11-06, `.sh` (see Done).
5. **GitHub social card:** recapture the site screenshot after the next
   deploy (it still shows the old "S" in the nav; the nav now shows `.sh`) and upload it by hand
   (Settings → Social preview).
6. **Search Console:** after the routing change is deployed, submit
   `https://steinnhm.com/sitemap.xml` and check that the old hash links
   (`/#/about`, `/#/senec`) land on the right pages.
7. **Small phones:** at 360×740 the first hero button sits about 20 px
   below the first screen (at 390×844 all three fit).
8. **Key-figure band on tablets:** the 3 + 2 layout is written for exactly
   five figures (`Highlights` in `src/pages/home/Hero.tsx`); make it follow
   the number of figures.
9. **Second Minnumst screenshot:** the repo's
   `docs/assets/screenshot-admin.png` (the editorial desk with version
   history) is current again; add it to the project page if the image
   budget allows.
10. **Broken images after Home → About → Home** (reported October 2026, not
    reproducible in headless Chrome). Retest now that pages are
    pre-rendered; otherwise waiting on the browser, URL and DevTools
    Network details.
11. **Dependencies:** `npm audit` reports 10 moderate advisories in
    `minimatch`, used only by ESLint 10 during development (the site
    itself has none); the only fix offered is a downgrade to ESLint 9, so
    wait for an upstream release. TypeScript 7 waits for
    typescript-eslint support.
12. **Repository settings** (owner): require the CI checks before merging
    into `master`, and delete the stale branches (`react-app`,
    `refactor/clean-up-and-redisign-images`,
    `refactor/cleanup-and-refinement`, `rem_wellknown`).

## Done

- 2026-11-06: career timeline instead of logo tiles; real URLs with
  pre-rendered pages, per-page titles and link previews, a sitemap and a
  not-found page; inline critical CSS; phone hero with the actions on the
  first screen; consistent section headings; link preview re-rendered
  with the graded portrait; `.sh` site mark (the initials as a shell
  script, in the heading font with its gold full stop), chosen over the
  low sun.
