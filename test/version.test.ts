import { describe, expect, it } from "vitest";
import { createRequire } from "node:module";
import { CLI_VERSION } from "../src/version";

const pkg = createRequire(import.meta.url)("../package.json");

describe("CLI_VERSION", () => {
  // Regression: this was a hardcoded literal and shipped 0.0.1 as 0.1.0.
  // The control plane gates on it, so drift is a real bug, not cosmetic.
  it("matches the published package.json version", () => {
    expect(CLI_VERSION).toBe(pkg.version);
  });

  it("is a semver string", () => {
    expect(CLI_VERSION).toMatch(/^\d+\.\d+\.\d+/);
  });
});
