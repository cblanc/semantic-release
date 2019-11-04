import * as release from "./index";

const npmRelease = {
  ...release,
  plugins: [
    ...release.plugins,
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "package-lock.json"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};

export = npmRelease;
