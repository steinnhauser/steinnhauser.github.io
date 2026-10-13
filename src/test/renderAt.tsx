import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import App from "../App";

// Renders the whole app at the given route.
export function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}
