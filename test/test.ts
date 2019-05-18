import { assert } from "chai";
import * as release from "../lib/index";

describe("Release config", () => {
  it("exports a release config file", () => {
    assert.isDefined(release);
  });
});
