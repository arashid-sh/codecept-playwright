import loginPage from '../pages/LoginPage';
import homePage from '../pages/HomePage';
import forgotPasswordPage from '../pages/ForgotPasswordPage';
import { SignupPage } from '../pages';
import userService from '../services/userService';
import RegisterPage from '../pages/RegisterPage';

const { I } = inject();

require('dotenv').config();

Given('I navigate to login page', () => {
  I.amOnPage('/login');
  I.wait(1);
  I.seeInCurrentUrl('/login');
});

Given('I verify login page', async () => {
  await loginPage.verifyLoginPage();
});

When('I login to system', () => {
  loginPage.login(
    process.env.USER_EMAIL as string,
    process.env.USER_PASSWORD as string
  );
});

When('I try to login with invalid credentials', () => {
  loginPage.login(
    process.env.USER_EMAIL as string,
    `${process.env.USER_PASSWORD}1`
  );
});

When('I validate invalid login response', () => {
  loginPage.validateInvalidLogin();
});

Then('I validate authenticated user dashboard appears', async () => {
  await homePage.verifyDashboardPage();
});

Given('I navigate to sign up page', async () => {
  await loginPage.navigateSignupPage();
});

Then('I validate sign up page appears', async () => {
  await SignupPage.verifySignupPage();
});

When('I navigate to forgot password page', async () => {
  await loginPage.clickForgotPasswordLink();
});

When('I verify forgot password page', async () => {
  forgotPasswordPage.verifyForgotPasswordPage();
});

Then(
  'I validate resetting my password for {string}',
  async (emailAddress: string) => {
    await forgotPasswordPage.verifyResettingPassword(emailAddress);
  }
);

Given('I login as an ASO subscriber', async () => {
  RegisterPage.registerUser(await userService.createUser('ASO', 'single'));
  I.amOnPage('/account/profile');
});

Given('I login as an ASO subscriber with a spouse', async () => {
  RegisterPage.registerUser(await userService.createUser('ASO', 'with spouse'));
  I.amOnPage('/account/profile');
});

Given('I login as an ASO subscriber with a spouse and a child', async () => {
  RegisterPage.registerUser(await userService.createUser('ASO', 'family'));
  I.amOnPage('/account/profile');
});

Given('I login as an GFI subscriber', async () => {
  RegisterPage.registerUser(await userService.createUser('GFI', 'single'));
  I.amOnPage('/account/profile');
});

Given('I login as an GFI subscriber with a spouse', async () => {
  RegisterPage.registerUser(await userService.createUser('GFI', 'with spouse'));
  I.amOnPage('/account/profile');
});

Given('I login as an GFI subscriber with a spouse and a child', async () => {
  RegisterPage.registerUser(await userService.createUser('GFI', 'family'));
  I.amOnPage('/account/profile');
});
