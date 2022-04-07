const { I } = inject();

module.exports = {
    elements: {
        accountButton:{
            css: '[data-qaid="link_account"]',
        },
        dashboardTab: {
            css: '[data-qaid=link_dashboard]',
        },
        haveQuestionsBtn:{
            css: '[data-qaid="btn_havequestions"]',
        }
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
     * A function to navigate accoutn page
     */
         async navigateToAccountPage() {
            I.waitForElement(this.elements.haveQuestionsBtn);
            I.seeElement(this.elements.accountButton);
            I.click(this.elements.accountButton);
        }
}