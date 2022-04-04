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
        signOutButton: {
            css: '[data-qaid="link_signOut"]',
        },
    },

    /**
     * A function to validate account page
     */
     async verifyProfilePage(element,tabs) {
        I.see(tabs, `[data-qaid="${element}"]`);
    },
    
}