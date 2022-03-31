const loginPage = require("../pages/LoginPage");
const signupPage = require("../pages/SignupPage");
const homePage = require("../pages/HomePage");
const forgotPasswordPage = require("../pages/ForgotPasswordPage");

const { I } = inject();
require('dotenv').config();

Given('I navigate to login page', () => {
    I.amOnPage('/');
    I.wait(1);
    I.seeInCurrentUrl('sidecarhealth');
});

Given('I verify login page', async() => {
    await loginPage.verifyLoginPage();
});

When('I login to system', () => {
    loginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);
});

When('I try to login with invalid credentials', () => {
    loginPage.login(process.env.USER_EMAIL, `${process.env.USER_PASSWORD}1`);
}); 

When('I validate invalid login response', () => {
    loginPage.validateInvalidLogin();
});

Then('I validate authenticated user dashboard', async () => {
    await homePage.verifyDashboardPage();
});

Then('I validate signup page appears', async () => {
    await signupPage.verifySignupPage();
});

When('I click forgot password', async () => {
    await loginPage.clickForgotPasswordLink();
});

When('I verify forgot password page', async () => {
    forgotPasswordPage.verifyForgotPasswordPage();
});

Then('I validate resetting my password', async () => {
    await forgotPasswordPage.verifyResettingPassword();
});