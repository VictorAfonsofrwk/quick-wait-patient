const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const singleSpa = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "frwk",
    projectName: "quick-wait-react",
    webpackConfigEnv,
    argv,
  });

  const mapConfig = singleSpa({
    orgName: "frwk",
    projectName: "quick-wait-map",
    webpackConfigEnv,
    argv,
  });

  const reminderConfig = singleSpa({
    orgName: "frwk",
    projectName: "quick-wait-add-view-reminder",
    webpackConfigEnv,
    argv,
  });

  defaultConfig;
  Object.assign(defaultConfig, {
    entry: {
      "frwk-quick-wait-react": defaultConfig.entry,
      "frwk-quick-wait-map": mapConfig.entry,
      "frwk-quick-wait-add-view-reminder": reminderConfig.entry,
    },
    output: {
      ...defaultConfig.output,
      filename: "[name].js",
      path: __dirname + "/dist",
    },
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
  });
};
