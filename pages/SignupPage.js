const LoginPage = require("./LoginPage");

const { I } = inject();

module.exports = {
    elements: {
        zipCode: {
            css: '[data-qaid=input_zipCode]',
        }
    },

    /**
     * A function to verify signup page
     */

    async verifySignupPage() {
        I.seeElement(this.elements.zipCode);
        I.waitForText('Start your insurance quote now');
        I.waitForText('First, where do you live?'); 
    }
}