import homePage from '../pages/HomePage';
import accountPage from '../pages/AccountPage';
import Card from '../factories/CreditCardFactory';

Given('I navigate to account page', async () => {
  await homePage.navigateToAccountPage();
});

Then(
  'I should see account {string} and {string} on account page',
  async (element: string, tabs: string) => {
    await accountPage.verifyProfilePage(element, tabs);
  }
);

Then('I add a valid payment card', async () => {
  const card = Card.createCreditCard();
  await accountPage.getPaymentInfo(card);
});
