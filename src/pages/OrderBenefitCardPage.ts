import Card from '../factories/CreditCardFactory';
const { I } = inject();

export const OrderBenefitCardPage = {
  elements: {
    getStartedBtn: {
      css: '[data-qaid="btn_benefitCardGetStarted"]',
    },
    addCreditOrBankCardLink: {
      css: '[data-qaid="btn_newCreditCard"]',
    },
    cardHoldersNameField: {
      css: '[data-qaid="input_cardholderName_undefined"]',
    },
    cardNumberField: {
      css: '[data-qaid="input_cardNumber_undefined"]',
    },
    cardExpiryDateField: {
      css: '[data-qaid="input_cardExpiry_undefined"]',
    },
    cardCVVField: {
      css: '[data-qaid="input_cardCVC_undefined"]',
    },
    cardBillingZipCodeField: {
      css: '[data-qaid="input_cardPostalCode_undefined"]',
    },
    AddCreditCardBtn: {
      xpath: '//button[@label="Add"]',
    },
    linkPaymentToSideCarBenefitsCardCheckBox: {
      xpath: '//label[@type="checkbox"]',
    },
  },

  /**
   * Method inputs credit card info after registering
   */
  activateCreditCard(): void {
    const card = Card.createCreditCard();
    I.waitForElement(OrderBenefitCardPage.elements.getStartedBtn);
    I.click(OrderBenefitCardPage.elements.getStartedBtn);
    I.click(OrderBenefitCardPage.elements.addCreditOrBankCardLink);
    I.fillField(
      OrderBenefitCardPage.elements.cardHoldersNameField,
      'Test User'
    );
    I.click(OrderBenefitCardPage.elements.cardNumberField);
    I.type(card.cardNumber, 100);
    I.click(OrderBenefitCardPage.elements.cardExpiryDateField);
    I.type(card.expirationMonth + '/' + card.expirationYear);
    I.click(OrderBenefitCardPage.elements.cardCVVField);
    I.type(card.cvv);
    I.click(OrderBenefitCardPage.elements.cardBillingZipCodeField);
    I.type(card.postalCode);
    I.click(OrderBenefitCardPage.elements.AddCreditCardBtn);
    I.waitForElement(
      OrderBenefitCardPage.elements.linkPaymentToSideCarBenefitsCardCheckBox
    );
    I.click(
      OrderBenefitCardPage.elements.linkPaymentToSideCarBenefitsCardCheckBox
    );
    //Todo : call the "https://qa-api.sidecarhealth.com/exp/v1/tests/members/mem-uuid/card?unactivated=false" API afterwards to enable credit card
  },
};
export default OrderBenefitCardPage;
