const { I } = inject();

module.exports = {
    elements: {
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
}