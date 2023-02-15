import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route key={"app"} path={"/"} element={<App />} />
        <Route key={"about"} path={"/about"} element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
