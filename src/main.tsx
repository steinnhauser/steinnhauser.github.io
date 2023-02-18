import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path={"/"} element={<App />} />
        <Route path={"/about"} element={<About />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
