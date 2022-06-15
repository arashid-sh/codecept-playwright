const { I } = inject();

export const LoginPage = {
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
    signUpLink: {
      css: '[data-qaid=link_signup]',
    },
    forgotPasswordLink: {
      css: '[data-qaid="link_forgot"]',
    },
    infoSignupLogin: {
      css: '[data-qaid="info_login/signup"]',
    },
    infoSignupQuestions: {
      css: '[data-qaid="info_questions"]',
    },
  },

  /**
   * A function to verify login page
   */

  async verifyLoginPage(): Promise<void> {
    I.seeElement(LoginPage.elements.email);
    I.seeElement(LoginPage.elements.password);
    I.seeElement(LoginPage.elements.forgotPasswordLink);
    I.seeElement(LoginPage.elements.infoSignupLogin);
    I.seeElement(LoginPage.elements.infoSignupQuestions);
    I.see("Don't have an account?");
  },

  /**
   * A function for navigating to signup page
   */
  async navigateSignupPage(): Promise<void> {
    I.waitForElement(LoginPage.elements.signUpLink);
    I.click(LoginPage.elements.signUpLink);
  },

  /**
   * function to login to system
   */
  login(email: string, password: string): void {
    I.waitForElement(LoginPage.elements.email);
    I.fillField(LoginPage.elements.email, email);
    I.waitForElement(LoginPage.elements.password);
    I.click(LoginPage.elements.password);
    I.type(password, 100);
    I.click(LoginPage.elements.loginButton);
  },

  validateInvalidLogin(): void {
    I.see('Oops! Your email or password is incorrect.');
  },

  /**
   * clicks forgot password link on login page
   */
  clickForgotPasswordLink(): void {
    I.waitForElement(LoginPage.elements.forgotPasswordLink);
    I.click(LoginPage.elements.forgotPasswordLink);
  },
};

export default LoginPage;
