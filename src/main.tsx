import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import App from "./App";

import SENECAbout from "./components/professions/Senec";
import FutureReadyAbout from "./components/professions/FutureReady";
import SINTEFAbout from "./components/professions/Sintef";
import UiOAbout from "./components/professions/UiO";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path={"/"} element={<App />} />
        <Route path={"/about"} element={<About />} />

        <Route path={"/senec"} element={<SENECAbout />} />
        <Route path={"/future-ready"} element={<FutureReadyAbout />} />
        <Route path={"/sintef"} element={<SINTEFAbout />} />
        <Route path={"/uio"} element={<UiOAbout />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
