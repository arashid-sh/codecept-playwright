const { I } = inject();

module.exports = {
  elements: {
    profileButton: {
      css: '[data-qaid="link_profile"]',
    },
    myCoverageButton: {
      css: '[data-qaid="link_coverage"]',
    },
    billingButton: {
      css: '[data-qaid="link_billing"]',
    },
    notificationsButton: {
      css: '[data-qaid="link_settings"]',
    },
    benefitCardButton: {
      css: '[data-qaid="link_cards"]',
    },
    documentsButton: {
      css: '[data-qaid="link_documents"]',
    },
    helpButton: {
      css: '[data-qaid="link_help"]',
    },
    saveChangesButton: {
      css: '[data-qaid="btn_saveChanges"]',
    },
    signOutButton: {
      css: '[data-qaid="link_signOut"]',
    },
  },

  /**
   * A function to validate account page
   */
  async verifyProfilePage(element, tabs) {
    I.see(tabs, `[data-qaid="${element}"]`);
  },


   /**
   * this function returns credit card information
   */
  async getPaymentInfo(card){
  
  /** this is just to test credit card information. it will be updated once it is get used*/
    console.log('cardNumber',card.cardNumber);
    console.log('expirationMonth',card.expirationMonth);
    console.log('expirationYear',card.expirationYear);
    console.log('cvv',card.cvv);
    console.log('postalCode',card.postalCode);
  }

};
