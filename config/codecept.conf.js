const { devices } = require('playwright');
require('dotenv').config({ path: '.env' });

exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: process.env.ENVIRONMENT_URL,
      show: false,
      browser: 'chromium',
      waitForTimeout: 25000,
      waitForNavigation: 'domcontentloaded',
      waitForAction: 500,
      video: true,
      trace: true,
    },
  },
  bootstrap: null,
  mocha: {},
  name: 'sidecar',
  gherkin: {
    features: '../features/*.feature',
    steps: '../src/step_definitions/*.js',
  },
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
    testrail: {
      require: 'codeceptjs-testrail',
      host: 'https://peternguyentr.testrail.io',
      user: 'arashid@sidecarhealth.com',
      password: process.env.TESTRAIL_API_KEY,
      suiteId: 1,
      projectId: 1,
      runName: 'Testing test rail with sidecar_E2E_web integration',
      runId: 123,
    },
  },
};
