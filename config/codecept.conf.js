require('ts-node/register');
const { devices } = require('playwright');
require('dotenv').config({ path: '.env' });
var moment = require('moment'); //Node library for date format https://momentjs.com/

exports.config = {
  output: '../output/web',
  helpers: {
    //https://codecept.io/helpers/Playwright/#configuration
    Playwright: {
      url: process.env.ENVIRONMENT_URL,
      show: false,
      browser: 'chromium',
      waitForTimeout: 25000,
      getPageTimeout: 180000,
      timeout: 180000,
      waitForNavigation: 'domcontentloaded',
      waitForAction: 500,
      video: true,
      trace: true,
      restart: true,
      chromium: {
        args: [
          '--disable-notifications',
          '--deny-permission-prompts',
          '--disable-web-security',
        ],
      },
    },
    ShortCutStepsHelper: {
      require: './../src/helpers/ShortCutStepsHelper.ts',
    },
  },
  bootstrap: null,
  mocha: {},
  name: 'sidecar',
  gherkin: {
    features: '../features/*.feature',
    steps: '../src/step_definitions/*.ts',
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
      closeTestRun: false,
      debugLog: false,
    },
  },
};
