import SignupPage from '../pages/SignupPage';
import ContextProvider from '../store/contextProvider';
import SharedStore from '../store/sharedStore';

let sharedStore: SharedStore;
const { I } = inject();
require('dotenv').config();

Before((test) => {
  sharedStore = ContextProvider.getInstance(test.id).sharedStore;
});

Given(
  'I register an EB user with {string} package',
  async (packageType: string) => {
    sharedStore.setState({
      firstName: await SignupPage.registerEbUser(packageType),
    });
  }
);

Then('I validate order summary page appears', async () => {
  await SignupPage.verifySingupOrderSummary();
});
