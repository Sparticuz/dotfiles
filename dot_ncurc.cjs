/**
 * This is my ncu config file (npm-check-updates)
 */
module.exports = {
  interactive: true,
  format: "group,repo",
  /**
   *
   * @param name             The name of the dependency.
   * @param defaultGroup     The predefined group name which will be used by default.
   * @param currentSpec      The current version range in your package.json.
   * @param upgradedSpec     The upgraded version range that will be written to your package.json.
   * @param upgradedVersion  The upgraded version number returned by the registry.
   * @returns                A predefined group name ('major' | 'minor' | 'patch' | 'majorVersionZero' | 'none') or a custom string to create your own group.
   */
  groupFunction: (
    name,
    defaultGroup,
    currentSpec,
    upgradedSpec,
    upgradedVersion
  ) => {
    if (name.startsWith("@dazser/")) {
      return "DAZSER";
    }
    return defaultGroup;
  },
  /**
   * I don't want to do any major upgrade's \@types/node unless I move node versions
   * @param name The name of the dependency.
   * @param parsedVersion A parsed Semver object of the upgraded version.
   * (See: https://git.coolaj86.com/coolaj86/semver-utils.js#semverutils-parse-semverstring)
   * https://github.com/privatenumber/tsx/issues/433
   */
  target: (name) => (
    name === "@types/node" ||
    name === "serverless" ||
    name === "@sparticuz/eslint-config" ||
    name === "@types/eslint" ||
    name === "@eslint/js" ||
    name === "eslint"
      ? "minor" : "latest"),
};
