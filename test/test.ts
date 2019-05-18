import { assert } from "chai";
import * as release from "../lib/index";
import * as npmRelease from "../lib/npm";

describe("Basic release config", () => {
  it("exports a release config file", () => {
    assert.isDefined(release);
  });
});

describe("Npm release config", () => {
  it("exports a config release file with npm plugin", () => {
    assert.isDefined(npmRelease);
    assert.include(npmRelease.plugins, "@semantic-release/npm");
  });
});
