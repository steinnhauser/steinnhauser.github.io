import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Home from "./pages/Home";

// Experience pages used to live at the top level; keep old links working.
const legacyRoutes = {
  senec: "senec-software-developer",
  "future-ready": "future-ready",
  sintef: "sintef",
  uio: "uio",
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience/:slug" element={<Experience />} />
          {Object.entries(legacyRoutes).map(([from, to]) => (
            <Route
              key={from}
              path={`/${from}`}
              element={<Navigate to={`/experience/${to}`} replace />}
            />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  </React.StrictMode>
);
