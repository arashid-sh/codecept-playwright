import SignupPage from '../pages/SignupPage';
import ContextProvider from '../store/contextProvider';
import SharedStore from '../store/sharedStore';

let sharedStore: SharedStore;
const { I } = inject();
require('dotenv').config();

Before((test) => {
  sharedStore = ContextProvider.getInstance(test.id).sharedStore;
});

When(
  'I register an EB user with {string} package and {string} state',
  async (state:string, packageType: string) => {
    sharedStore.setState({
      firstName: await SignupPage.registerEbUser(packageType, state),
    });
  }
);

Then('I validate order summary page appears', async () => {
  await SignupPage.verifySingupOrderSummary();
});


When('I register an ACA user with {string} package for {string} state', async(packageName: string, state: string)=>{
  await SignupPage.registerACAUser(state, packageName);
})