const { I } = inject();

module.exports = {
    elements: {
        emailField: {
            css: '[id=email]',
        },
        resetButton:{
            css: '[label=Reset]',
        },
        newLoginButton:{
            css: '[label="Log in"]',
        }
    },

    /**
     * A function to verify forgot password page
     */
    async verifyForgotPasswordPage() {
        I.see("Password Reset");
        I.waitForElement(this.elements.emailField);
        I.waitForElement(this.elements.resetButton);
    },

    /**
     * A function to validate resetting password
     */
     async verifyResettingPassword() {
        I.waitForElement(this.elements.emailField);
        I.fillField(this.elements.emailField, process.env.USER_EMAIL);
        I.click(this.elements.resetButton);
        I.waitForElement(this.elements.newLoginButton);
        I.see("Instructions have been sent to your email")
    },
    
}