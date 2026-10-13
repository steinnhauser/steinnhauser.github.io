// "react" for this site: Preact's compatibility layer (about 60 KB lighter
// than React), aliased in vite.config.ts for both the build and the tests.
//
// preact/compat lacks `useOptimistic`. react-router imports it only for
// RouterProvider (data routers), which this site doesn't use (it uses
// HashRouter), so a pass-through keeps that import resolvable.
export * from "preact/compat";
export { default } from "preact/compat";

// Plain JS: this file exists only for the bundler; app code is typed
// against React's types.
export function useOptimistic(state) {
  return [state, () => {}];
}
