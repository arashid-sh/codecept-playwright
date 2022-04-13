const homePage = require("../pages/HomePage");
const accountPage = require("../pages/AccountPage");
const Card = require('../factories/creditcard');

Given("I navigate to account page", async () => {
  await homePage.navigateToAccountPage();
});

Then(
  "I should see account {string} and {string} on account page",
  async (element, tabs) => {
    await accountPage.verifyProfilePage(element, tabs);
  }
);


Then("I add a valid payment card", async () => {
  const card = Card.build();
  await accountPage.getPaymentInfo(card);
});