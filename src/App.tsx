import { Navigate, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Home from "./pages/Home";

// Experience pages used to live at the top level; keep old links working.
const legacyRoutes: Record<string, string> = {
  senec: "senec-software-developer",
  "future-ready": "future-ready",
  sintef: "sintef",
  uio: "uio",
};

function App() {
  return (
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
  );
}

export default App;
