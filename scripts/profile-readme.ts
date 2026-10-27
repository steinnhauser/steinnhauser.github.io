// Vitest global setup: reads the owner's GitHub profile README from the
// sibling `steinnhauser` repository, when it exists, and hands it to
// src/profile.test.ts. It is absent in CI, where that test is skipped.
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import type { TestProject } from "vitest/node";

declare module "vitest" {
  export interface ProvidedContext {
    profileReadme: string;
  }
}

const path = fileURLToPath(
  new URL("../../steinnhauser/README.md", import.meta.url),
);

export default function setup(project: TestProject) {
  const readme = existsSync(path) ? readFileSync(path, "utf8") : "";
  project.provide("profileReadme", readme);
}
