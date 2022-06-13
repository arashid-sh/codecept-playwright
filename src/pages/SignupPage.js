const accountPage = require('../pages/AccountPage');
const LoginPage = require('./LoginPage');
const customerFactory = require('../factories/customer');
const Card = require('../factories/creditcard');
const { switchToFrameAndType } = require('../lib/util');
const { I } = inject();

module.exports = {
  elements: {
    cardHolderName: {
      css: '[data-qaid=input_cardholderName_subscription]',
    },
    cardNumber: {
      css: 'input[name="cardnumber"]',
    },
    cardExpDate: {
      css: 'input[name="exp-date"]',
    },
    cardCvc: {
      css: 'input[name="cvc"]',
    },
    cardZipCode: {
      css: 'input[name="postal"]',
    },
    cardNumberFrame: {
      css: '[title="Secure card number input frame"]',
    },
    cardExpDateFrame: {
      css: '[title="Secure expiration date input frame"]',
    },
    cardCvcFrame: {
      css: '[title="Secure CVC input frame"]',
    },
    cardZipcodeFrame: {
      css: '[title="Secure postal code input frame"]',
    },
    cardAutoPayment: {
      css: '//input[@data-qaid="input_autopaymentExpense"]/..',
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
    reviewApplication: {
      css: '[data-qaid=btn_prepareApplication]',
    },
  },

  /**
   * A function to verify signup page
   */

  async verifySignupPage() {
    I.waitForElement(this.elements.zipCode, 5);
    I.waitForText('Start your insurance quote now');
    I.waitForText('First, where do you live?');
  },

  /**
   * A function to select generated customer's gender.
   * @param {string} gender is registered user's gender. Created by createCustomer() function
   */
  async selectGender(gender) {
    I.click(`[data-qaid=input_${gender}-label]`);
  },

  /**
   * A function to register an eb user with provided package
   * @param {string} package name of the coverage
   */
  async registerEbUser(package) {
    const card = Card.build();
    await accountPage.getPaymentInfo(card);
    const customer = await customerFactory.createCustomer();
    //console.log(customer);
    I.waitForElement(this.elements.zipCode);
    I.fillField(this.elements.zipCode, customer.zipcode);
    I.click(this.elements.continueButton);
    I.waitForElement(this.elements.customerName, 15);
    I.fillField(this.elements.customerName, customer.firstName);
    I.fillField(this.elements.customerLastName, customer.lastName);
    I.fillField(LoginPage.elements.email, customer.email);
    I.fillField(this.elements.customerBirthday, customer.birthday);
    this.selectGender(customer.gender);
    I.scrollPageToBottom();
    I.click(this.elements.seeQuotesButton);
    I.waitForElement(`[data-qaid=btn_select_${package}]`, 15);
    I.click(`[data-qaid=btn_select_${package}]`);
    I.waitForElement(LoginPage.elements.password);
    I.click(LoginPage.elements.password);
    I.type(customer.password, 100);
    I.click(this.elements.signUpButton);
    I.waitForElement(this.elements.streetAddress);
    I.fillField(this.elements.streetAddress, customer.streetAddress);
    I.fillField(this.elements.customerPhone, customer.phoneNumber);
    I.fillField(this.elements.cardHolderName, 'Sidecar Health Test');
    switchToFrameAndType(
      this.elements.cardNumberFrame,
      this.elements.cardNumber,
      card.cardNumber
    );
    switchToFrameAndType(
      this.elements.cardExpDateFrame,
      this.elements.cardExpDate,
      `${card.expirationMonth}/${card.expirationYear.substr(2)}`
    );
    switchToFrameAndType(
      this.elements.cardCvcFrame,
      this.elements.cardCvc,
      card.cvv
    );
    switchToFrameAndType(
      this.elements.cardZipcodeFrame,
      this.elements.cardZipCode,
      card.postalCode
    );
    I.fillField(this.elements.customerSsn, customer.ssn);
    I.click(this.elements.cardAutoPayment);
    I.click(this.elements.agreeTelemarketing);
    I.click(this.elements.agreeElectronicSent);
    I.click(this.elements.agreeAcknowledgement);
    I.click(this.elements.reviewApplication);
    I.waitForElement(this.elements.submitAndPayButton, 20);
    I.click(this.elements.submitAndPayButton);
    return customer.firstName;
  },

  /**
   * A function to validate order confirmation on signup page
   */
  async verifySingupOrderSummary() {
    I.waitForText('Congrats! Your policy starts', 15);
    I.waitForText('Order summary');
  },
};
