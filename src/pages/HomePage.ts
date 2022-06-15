import AccountPage from './AccountPage';
import DoctorsPage from './DoctorsPage';

const { I } = inject();

export const HomePage = {
  elements: {
    accountButton: {
      css: '[data-qaid="link_account"]',
    },
    dashboardTab: {
      css: '[data-qaid=link_dashboard]',
    },
    findDoctorslink: {
      xpath: '//h2[contains(text(),"Find doctors")]',
    },
    haveQuestionsBtn: {
      css: '[data-qaid="btn_havequestions"]',
    },
  },

  /**
   * A function to verify login page
   */
  async verifyDashboardPage(): Promise<void> {
    I.waitForElement(HomePage.elements.dashboardTab);
    I.waitForElement(HomePage.elements.haveQuestionsBtn);
    I.see('My open expenses');
  },

  /**
   * A function to navigate account page
   */
  async navigateToAccountPage(): Promise<void> {
    I.waitForElement(HomePage.elements.haveQuestionsBtn);
    I.seeElement(HomePage.elements.accountButton);
    I.click(HomePage.elements.accountButton);
    I.waitForElement(AccountPage.elements.saveChangesButton);
  },

  /**
   * A function to navigate to doctors page
   */
  async navigateToDoctorsPage() {
    I.waitForElement(HomePage.elements.findDoctorslink);
    I.click(HomePage.elements.findDoctorslink);
    I.waitForElement(DoctorsPage.elements.searchField);
    I.see('Search doctors by specialty');
  },
};

export default HomePage;
