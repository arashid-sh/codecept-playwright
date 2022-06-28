import axios, { AxiosResponse } from 'axios';
import asoSubSpouse from '../payloads/asoSubscriber';
import { faker } from '@faker-js/faker';
import { mailosaurEmailService } from './mailosaurEmailService';
const { I } = inject();

export const CreateUser = {
  /**
   * Method calls the login api as admin to retrieve token
   * @returns admin token to be used to call subsequent APIs.
   */
  async getToken(): Promise<string> {
    const response: AxiosResponse = await axios.get(
      'https://qa-api.sidecarhealth.com/auth/v1/login?type=admin',
      {
        auth: {
          username: 'rmcguirl@sidecarhealth.com',
          password: 'Test1234!',
        },
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'ipDVGPUjTn9rVTakgNXrQA84j',
        },
      }
    );

    return response.data.token;
  },

  /**
   * Method creates an ASO user. The payload is generated and called from payloads folder. The method then retrieves the sign up link from the email
   * sent to the user.
   * returns: sign up link from the user's inbox
   * Option 'single' = ASO single subscriber
   * Option 'with spouse' = ASO subscriber + spouse
   * Option 'family' = ASO subscriber + spouse + child
   *
   * Note: 'single' option is set as default
   * */
  async asoUser(option = 'single'): Promise<any> {
    const emailAddress =
      faker.internet.userName() + '_scqa@d6n3iagn.mailosaur.net'; //Generating email address that will be used in the payload and also to retrieve sign up link from mailosaur
    console.log(`-------- Creating account for user: ${emailAddress} --------`);
    const token = await CreateUser.getToken(); //Getting the admin token used to send to the APIs when sending a request in the header.
    try {
      const response: AxiosResponse = await axios.post(
        'https://qa-api.sidecarhealth.com/easo/v1/enrollments',
        await asoSubSpouse.generatePayload(emailAddress, option),
        {
          headers: {
            token: token,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(`Error in asoUser(): ${error.response}`);
    }
    const registrationURL = await mailosaurEmailService.getRegistrationURL(
      emailAddress
    );
    return registrationURL;
  },
};

export default CreateUser;
