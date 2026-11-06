import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import { legacyHashPath } from "./routes";
import "./fonts.css";
import "./index.css";

// Links from before November 2026 used hash URLs (steinnhm.com/#/about).
const legacy = legacyHashPath(window.location.hash);
if (legacy) window.history.replaceState(null, "", legacy);

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Every page is pre-rendered at build time (prerender.tsx). Take over that
// HTML when it was rendered for this path; otherwise (404.html, which GitHub
// Pages serves for unknown paths and old links, or the dev server) render
// from scratch.
const root = document.getElementById("root")!;
const rendered = document
  .querySelector('meta[name="prerendered-path"]')
  ?.getAttribute("content");
const path = window.location.pathname.replace(/\/+$/, "") || "/";
if (root.firstChild && rendered === path) {
  hydrateRoot(root, app);
} else {
  root.textContent = "";
  createRoot(root).render(app);
}
