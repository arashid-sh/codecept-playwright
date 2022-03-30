const { devices } = require('playwright');
require('dotenv').config();

exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: `https://${process.env.ENVIRONMENT}.sidecarhealth.com`,
      show: true,
      browser: 'chromium',
      waitForTimeout: 20000,
      waitForNavigation: "domcontentloaded",
      waitForAction: 500,
    }
  },
  bootstrap: null,
  mocha: {},
  name: 'sidecar',
  gherkin: {
    features: './features/**/*.feature',
    steps: './step_definitions/*.js',
  },
  plugins:{
    screenshotOnFail: {
      enabled: true
    }
  }
}