const HomePage = require('../pages/HomePage');
const DoctorsPage = require("../pages/DoctorsPage");

const { I } = inject();
require('dotenv').config();

Given('I navigate to doctors page', async () => {
    await HomePage.navigateToDoctorsPage();
  });

When('I search for {string} doctor on {string} zipcode', async (doctor,zipcode) => {
    await DoctorsPage.searchForDoctor(doctor, zipcode);
  });

Then('I see the doctors name {string} his specialty {string} and address {string}', async (doctor, specialty, address) => {
    await DoctorsPage.verifyDoctor(doctor, specialty, address);
  });