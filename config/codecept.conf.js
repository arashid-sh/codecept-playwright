const { devices } = require('playwright');
require('dotenv').config({ path: '.env' });

exports.config = {
  output: '../output/web',
  helpers: {
    Playwright: {
      url: process.env.ENVIRONMENT_URL,
      show: true,
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
      enabled: true,
      require: 'codeceptjs-testrail',
      host: 'https://sidecarhealth.testrail.io',
      user: 'arashid@sidecarhealth.com',
      password: process.env.TESTRAIL_API_KEY,
      suiteId: 2,
      projectId: 2,
      runName: 'Testing test rail with sidecar_E2E_web integration',
      // runId: 123,
      closeTestRun: true,
      debugLog: false,
    },
  },
};
