const signupPage = require("../pages/SignupPage");
const { I } = inject();
require("dotenv").config();


Given("I register an EB user with {string} package", async (package) => {
    await signupPage.registerEbUser(package);
  });

Then("I validate order summary page appears", async () => {
    await signupPage.verifySingupOrderSummary();
  });
  