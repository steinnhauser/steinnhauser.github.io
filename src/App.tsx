import { Navigate, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";
import { paths, redirects } from "./routes";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={paths.home} element={<Home />} />
        <Route path={paths.about} element={<About />} />
        <Route path={paths.experience(":slug")} element={<Experience />} />
        <Route path={paths.project(":slug")} element={<Project />} />
        {Object.entries(redirects).map(([from, to]) => (
          <Route
            key={from}
            path={from}
            element={<Navigate to={to} replace />}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
