import accountPage from '../pages/AccountPage';
import LoginPage from './LoginPage';
import customerFactory from '../factories/CustomerFactory';
import Card from '../factories/CreditCardFactory';
const { I } = inject();

export const SignupPage = {
  elements: {
    cardHolderName: {
      css: '[data-qaid=input_cardholderName_subscription]',
    },
    cardNumber: {
      //css: 'input[name="cardnumber"]',
      xpath: '//div[@data-qaid="input_cardNumber_subscription"]',
    },
    cardExpDate: {
      xpath: '//div[@data-qaid="input_cardExpiry_subscription"]',
      //css: 'input[name="exp-date"]',
    },
    cardCvc: {
      css: 'input[name="cvc"]',
    },
    cardZipCode: {
      xpath: '//div[@data-qaid="input_cardPostalCode_subscription"]',
    },
    cardNumberFrame: {
      css: '[title="Secure card number input frame"]',
    },
    cardExpDateFrame: {
      css: '[title="Secure expiration date input frame"]',
    },
    cardCvcFrame: {
      css: '//div[@data-qaid="input_cardCVC_subscription"]',
    },
    cardZipcodeFrame: {
      css: '[title="Secure postal code input frame"]',
    },
    cardAutoPayment: {
      xpath: '//input[@data-qaid="input_autopaymentExpense"]/..',
    },
    continueButton: {
      css: '//button[@label="Continue"]',
    },
    customerBirthday: {
      css: '[data-qaid=input_dateOfBirth_0]',
    },
    customerName: {
      css: '[data-qaid=input_firstName_0]',
    },
    customerLastName: {
      css: '[data-qaid=input_lastName_0]',
    },
    customerPhone: {
      css: '[data-qaid=input_phoneNumber]',
    },
    customerSsn: {
      css: '[data-qaid=input_ssn_0]',
    },
    qleDate:{
      css: '[data-qaid="input_qleDate"]',
    },
    qleDatetoday: {
      xpath: '//*[contains(text(),"Today")]',
    },
    lifeEvent: {
      css: '[data-qaid="life_event"]',
    },
    seeQuotesButton: {
      css: '[data-qaid=btn_continue]',
    },
    streetAddress: {
      css: '[data-qaid=input_street]',
    },
    signUpButton: {
      css: '[data-qaid=btn_signup]',
    },
    submitAndPayButton: {
      css: '[data-qaid="btn_buyNow"]',
    },
    zipCode: {
      css: '[data-qaid=input_zipCode]',
    },
    agreeTelemarketing: {
      css: '//input[@data-qaid="input_primaryConsent"]/..',
    },
    agreeElectronicSent: {
      css: '//input[@data-qaid="input_electronicConsent"]/..',
    },
    agreeAcknowledgement: {
      css: '//input[@data-qaid="input_acknowledgement"]/..',
    },
    agreeAcknowledgement2: {
      css: '//input[@data-qaid="input_acknowledgement2"]/..',
    },
    agreeAcknowledgement3: {
      css: '//input[@data-qaid="input_acknowledgement3"]/..',
    },
    reviewApplication: {
      css: '[data-qaid=btn_prepareApplication]',
    },
    reviewACAApplication: {
      css: '[data-qaid=btn_enrollOffExchange]',
    },
  },

  /**
   * A function to verify signup page
   */

  async verifySignupPage(): Promise<void> {
    I.waitForElement(SignupPage.elements.zipCode, 5);
    I.waitForText('Start your insurance quote now');
    I.waitForText('First, where do you live?');
  },

  /**
   * A function to select generated customer's gender.
   * @param {string} gender is registered user's gender. Created by createCustomer() function
   */
  async selectGender(gender): Promise<void> {
    I.click(`[data-qaid=input_${gender}-label]`);
  },

  /**
   * A function to register an eb user with provided package
   * @param {string} package name of the coverage
   * @param {string} state state of the coverage
   */
  async registerEbUser(state: string,packageName: string): Promise<string> {
    const card = Card.createCreditCard();
    await accountPage.getPaymentInfo(card);
    const customer = await customerFactory.createCustomer(state);
    //console.log(customer);
    I.waitForElement(SignupPage.elements.zipCode);
    I.fillField(SignupPage.elements.zipCode, customer.zipcode);
    I.click(SignupPage.elements.continueButton);
    I.waitForElement(SignupPage.elements.customerName, 15);
    I.fillField(SignupPage.elements.customerName, customer.firstName);
    I.fillField(SignupPage.elements.customerLastName, customer.lastName);
    I.fillField(LoginPage.elements.email, customer.email);
    I.fillField(SignupPage.elements.customerBirthday, customer.birthday);
    this.selectGender(customer.gender);
    I.scrollPageToBottom();
    I.click(SignupPage.elements.seeQuotesButton);
    I.waitForElement(`[data-qaid=btn_select_${packageName}]`, 15);
    I.click(`[data-qaid=btn_select_${packageName}]`);
    I.waitForElement(LoginPage.elements.password);
    I.click(LoginPage.elements.password);
    I.type(customer.password);
    I.click(SignupPage.elements.signUpButton);
    I.waitForElement(SignupPage.elements.streetAddress);
    I.fillField(SignupPage.elements.streetAddress, customer.streetAddress);
    I.fillField(SignupPage.elements.customerPhone, customer.phoneNumber);
    //Entering CC info
    I.fillField(SignupPage.elements.cardHolderName, 'Sidecar Health Test');
    I.click(SignupPage.elements.cardNumber);
    I.type(card.cardNumber, 100);
    I.click(SignupPage.elements.cardExpDate);
    I.type(card.expirationMonth + '/' + card.expirationYear);
    I.click(SignupPage.elements.cardCvcFrame);
    I.type(card.cvv);
    I.click(SignupPage.elements.cardZipCode);
    I.type(card.postalCode);
    I.fillField(SignupPage.elements.customerSsn, customer.ssn);
    I.click(SignupPage.elements.cardAutoPayment);
    I.click(SignupPage.elements.agreeTelemarketing);
    I.click(SignupPage.elements.agreeElectronicSent);
    I.click(SignupPage.elements.agreeAcknowledgement);
    I.click(SignupPage.elements.reviewACAApplication);
    I.waitForElement(SignupPage.elements.submitAndPayButton, 20);
    I.click(SignupPage.elements.submitAndPayButton);
    return customer.firstName;
  },

    /**
   * A function to register an ACA user with provided packages
   * @param {string} package name of the coverage
   * @param {string} state state of the coverage
   */
     async registerACAUser(state: string, packageName: string): Promise<string> {
      const card = Card.createCreditCard();
      await accountPage.getPaymentInfo(card);
      const customer = await customerFactory.createCustomer(state);
      //console.log(customer);
      I.waitForElement(SignupPage.elements.zipCode);
      I.fillField(SignupPage.elements.zipCode, customer.zipcode);
      I.click(SignupPage.elements.continueButton);
      I.waitForElement(SignupPage.elements.lifeEvent, 15);
      const element1 =locate('span').withText('Marriage or domestic partnership');
      I.click(element1);
      I.click(this.elements.qleDate);
      I.click(this.elements.qleDatetoday);
      I.click(this.elements.continueButton);
      I.waitForElement(SignupPage.elements.customerName, 15);
      I.fillField(SignupPage.elements.customerName, customer.firstName);
      I.fillField(SignupPage.elements.customerLastName, customer.lastName);
      I.fillField(LoginPage.elements.email, customer.email);
      I.fillField(SignupPage.elements.customerBirthday, customer.birthday);
      this.selectGender(customer.gender);
      I.scrollPageToBottom();
      I.click(SignupPage.elements.seeQuotesButton);
      I.waitForElement(`[data-qaid=btn_select_${packageName}]`, 15);
      I.click(`[data-qaid=btn_select_${packageName}]`);
      I.waitForElement(LoginPage.elements.password);
      I.click(LoginPage.elements.password);
      I.type(customer.password);
      I.click(SignupPage.elements.signUpButton);
      I.waitForElement(SignupPage.elements.streetAddress);
      I.fillField(SignupPage.elements.streetAddress, customer.streetAddress);
      I.fillField(SignupPage.elements.customerPhone, customer.phoneNumber);
      I.fillField(SignupPage.elements.cardHolderName, 'Sidecar Health Test');
      I.click(SignupPage.elements.cardNumber);
      I.type(card.cardNumber, 100);
      I.click(SignupPage.elements.cardExpDate);
      I.type(card.expirationMonth + '/' + card.expirationYear);
      I.click(SignupPage.elements.cardCvcFrame);
      I.type(card.cvv);
      I.click(SignupPage.elements.cardZipCode);
      I.type(card.postalCode);
      I.fillField(SignupPage.elements.customerSsn, customer.ssn);
      I.click(SignupPage.elements.cardAutoPayment);
      I.click(SignupPage.elements.agreeAcknowledgement);
      I.click(SignupPage.elements.agreeAcknowledgement2);
      I.click(SignupPage.elements.agreeAcknowledgement3);
      I.click(SignupPage.elements.reviewACAApplication);
      I.waitForElement(SignupPage.elements.submitAndPayButton, 20);
      I.click(SignupPage.elements.submitAndPayButton);
      return customer.firstName;
    },
  /**
   * A function to validate order confirmation on signup page
   */
  async verifySingupOrderSummary(): Promise<void> {
    I.waitForText('Congrats! Your policy', 20);
    I.waitForText('Order summary');
  },
};

export default SignupPage;
