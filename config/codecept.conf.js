const { devices } = require('playwright');
require('dotenv').config({ path: '.env' });
var moment = require('moment'); //Node library for date format https://momentjs.com/

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
      enabled: process.env.TESTRAIL_ISENABLED,
      require: 'codeceptjs-testrail',
      host: 'https://sidecarhealth.testrail.io',
      user: process.env.TESTRAIL_USERNAME,
      password: process.env.TESTRAIL_API_KEY,
      suiteId: 2,
      projectId: 2,
      runName:
        'sidecar_E2E_web test run ' +
        moment().format('MMMM Do YYYY, h:mm:ss a'),
      closeTestRun: true,
      debugLog: false,
    },
  },
};
