import { act, render } from "@testing-library/preact";
import { afterEach, describe, expect, it, vi } from "vitest";
import usePointerLight from "./usePointerLight";

function Harness() {
  usePointerLight();
  return (
    <div data-light="" data-testid="card">
      <a data-light="" data-testid="button" href="#x">
        button
      </a>
    </div>
  );
}

const setMedia = (matches: boolean) =>
  vi.stubGlobal(
    "matchMedia",
    vi.fn(() => ({ matches }) as MediaQueryList),
  );

const pointAt = async (target: Element) => {
  await act(async () => {
    target.dispatchEvent(
      new PointerEvent("pointermove", {
        bubbles: true,
        clientX: 40,
        clientY: 12,
      }),
    );
    await new Promise((r) => requestAnimationFrame(() => r(null)));
  });
};

describe("usePointerLight", () => {
  afterEach(() => vi.unstubAllGlobals());

  it("lights the surface under the pointer and its glass ancestors", async () => {
    setMedia(true);
    const { getByTestId } = render(<Harness />);
    await pointAt(getByTestId("button"));
    for (const id of ["button", "card"]) {
      expect(getByTestId(id).style.getPropertyValue("--lx")).toBe("40px");
      expect(getByTestId(id).style.getPropertyValue("--ly")).toBe("12px");
    }
  });

  it("does nothing on touch devices or with reduced motion", async () => {
    setMedia(false);
    const { getByTestId } = render(<Harness />);
    await pointAt(getByTestId("button"));
    expect(getByTestId("button").style.getPropertyValue("--lx")).toBe("");
  });
});
