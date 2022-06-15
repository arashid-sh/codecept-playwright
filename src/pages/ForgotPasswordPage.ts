const { I } = inject();
require('dotenv').config({ path: '.env' });

export const ForgotPasswordPage = {
  elements: {
    emailField: {
      css: '[id=email]',
    },
    resetButton: {
      css: '[label=Reset]',
    },
    newLoginButton: {
      css: '[label="Log in"]',
    },
  },

  /**
   * A function to verify forgot password page
   */
  async verifyForgotPasswordPage(): Promise<void> {
    I.see('Password Reset');
    I.waitForElement(ForgotPasswordPage.elements.emailField);
    I.waitForElement(ForgotPasswordPage.elements.resetButton);
  },

  /**
   * A function to validate resetting password
   */
  async verifyResettingPassword(emailAddress: string): Promise<void> {
    I.waitForElement(ForgotPasswordPage.elements.emailField);
    I.fillField(ForgotPasswordPage.elements.emailField, emailAddress);
    I.click(ForgotPasswordPage.elements.resetButton);
    I.waitForElement(ForgotPasswordPage.elements.newLoginButton);
    I.see('Instructions have been sent to your email');
  },
};

export default ForgotPasswordPage;
