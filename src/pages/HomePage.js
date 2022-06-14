const { I } = inject();
const DoctorsPage = require("./DoctorsPage");

module.exports = {
  elements: {
    accountButton: {
      css: '[data-qaid="link_account"]',
    },
    dashboardTab: {
      css: "[data-qaid=link_dashboard]",
    },
    findDoctorslink: {
      css: '//h2[contains(text(),"Find doctors")]',
    },
    haveQuestionsBtn: {
      css: '[data-qaid="btn_havequestions"]',
    },
  },

  /**
   * A function to verify login page
   */
  async verifyDashboardPage() {
    I.waitForElement(this.elements.dashboardTab);
    I.waitForElement(this.elements.haveQuestionsBtn);
    I.see("My open expenses");
  },

  /**
   * A function to navigate account page
   */
  async navigateToAccountPage() {
    I.waitForElement(this.elements.haveQuestionsBtn);
    I.seeElement(this.elements.accountButton);
    I.click(this.elements.accountButton);
  },

  /**
   * A function to navigate to doctors page
   */
     async navigateToDoctorsPage() {
      I.waitForElement(this.elements.findDoctorslink);
      I.click(this.elements.findDoctorslink);
      I.waitForElement(DoctorsPage.elements.searchField);
      I.see('Search doctors by specialty');
    },
};
