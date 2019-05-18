import * as release from "./index";

const npmRelease = {
  ...release,
  plugins: [...release.plugins, "@semantic-release/npm"],
};

export = npmRelease;
