const loginPage = require("../pages/LoginPage");
const signupPage = require("../pages/SignupPage");
const homePage = require("../pages/HomePage");

const { I } = inject();

Given('I navigate to login page', () => {
    I.amOnPage('/');
    I.wait(1);
    I.seeInCurrentUrl('sidecarhealth');
});

Given('I verify login page', async() => {
    await loginPage.verifyLoginPage();
});

When('I login to system', () => {
    loginPage.login();
});

Then('I validate authenticated user dashboard', async () => {
    await homePage.verifyDashboardPage();
});

Then('I validate signup page appears', async () => {
    await signupPage.verifySignupPage();
});
