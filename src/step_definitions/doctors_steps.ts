import HomePage from '../pages/HomePage';
import DoctorsPage from '../pages/DoctorsPage';

const { I } = inject();
require('dotenv').config();

Given('I navigate to doctors page', async () => {
  await HomePage.navigateToDoctorsPage();
});

When(
  'I search for {string} doctor on {string} zipcode',
  async (doctor: string, zipcode: string) => {
    await DoctorsPage.searchForDoctor(doctor, zipcode);
  }
);

Then(
  'I see the doctors name {string} his specialty {string} and address {string}',
  async (doctor: string, specialty: string, address: string) => {
    await DoctorsPage.verifyDoctor(doctor, specialty, address);
  }
);
