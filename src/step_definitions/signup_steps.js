const signupPage = require('../pages/SignupPage');
const contextProvider_1 = require('../store/contextProvider');
let sharedStore;
const { I } = inject();
require('dotenv').config();

Before((test) => {
  sharedStore = contextProvider_1.default.getInstance(test.id).sharedStore;
});

Given('I register an EB user with {string} package', async (package) => {
  sharedStore.setState({
    firstName: await signupPage.registerEbUser(package),
  });
});

Then('I validate order summary page appears', async () => {
  await signupPage.verifySingupOrderSummary();
});
