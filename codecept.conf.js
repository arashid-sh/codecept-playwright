const { devices } = require("playwright");
require("dotenv").config();

exports.config = {
  output: "./output",
  helpers: {
    Playwright: {
      url: `https://${process.env.ENVIRONMENT}.sidecarhealth.com`,
      show: false,
      browser: "chromium",
      waitForTimeout: 25000,
      waitForNavigation: "domcontentloaded",
      waitForAction: 500,
    },
  },
  bootstrap: null,
  mocha: {},
  name: "sidecar",
  gherkin: {
    features: "./features/*.feature",
    steps: "./src/step_definitions/*.js",
  },
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
  },
};
