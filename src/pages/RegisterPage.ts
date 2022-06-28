const { I } = inject();

export const RegisterPage = {
  elements: {
    last4ssn: {
      css: '[data-qaid=input_last4ssn]',
    },
    passwordfield: {
      css: '[data-qaid=input_password]',
    },
    verifyIdentityPageContinueBtn: {
      xpath: '//button[@label="Continue"]',
    },
    setPasswordPageRegisterAccountBtn: {
      xpath: '//button[@label="Register account"]',
    },
  },

  /**
   * Method opens the registration URL, validates the user using last 4 ssn, and creates password for the account.
   * @param url: registraion URL that is sent in the welcome email
   */
  registerUser(url: string): void {
    I.amOnPage(url);
    I.waitForElement(RegisterPage.elements.last4ssn);
    I.fillField(RegisterPage.elements.last4ssn, '1111');
    I.click(RegisterPage.elements.verifyIdentityPageContinueBtn);
    I.fillField(RegisterPage.elements.passwordfield, 'Test1234!');
    I.click(RegisterPage.elements.setPasswordPageRegisterAccountBtn);
  },
};

export default RegisterPage;
