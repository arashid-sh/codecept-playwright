const { I } = inject();

module.exports = {
    elements: {
        email: {
            css: '[data-qaid=input_email]',
        },
        password: {
            css: '[data-qaid=input_password]',
        },
        loginButton: {
            css: '[data-qaid=btn_login]',
        },
        signupButton: {
            css: '[data-qaid=link_signup]',
        },
        forgotPasswordLink: {
            css: '[data-qaid="link_forgot"]',
        },
        infoSignupLogin : {
            css: '[data-qaid="info_login/signup"]',
        },
        infoSignupQuestions : {
            css: '[data-qaid="info_questions"]',
        }
    },

    /**
     * A function to verify login page
     */

    async verifyLoginPage() {
        I.waitForElement(this.elements.email);
        I.waitForElement(this.elements.password);
        I.waitForElement(this.elements.forgotPasswordLink);
        I.waitForElement(this.elements.infoSignupLogin);
        I.waitForElement(this.elements.infoSignupQuestions);
        I.see("Don't have an account?");
    },

    /**
     * clicks signup button on login page
     */

    clickSignupButton() {
        I.waitForElement(this.elements.signupButton);
        I.click(this.elements.signupButton);
    },

    /**
     * function to login to system
     */
    login() {
        I.waitForElement(this.elements.email);
        I.fillField(this.elements.email, 'ersin+test@gmail.com');
        I.waitForElement(this.elements.password);
        I.click(this.elements.password);
        I.type('Test123!', 100);
        I.click(this.elements.loginButton);
    }
}