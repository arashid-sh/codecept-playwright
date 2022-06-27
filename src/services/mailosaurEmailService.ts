import MailosaurClient from 'mailosaur';

const mailosaur = new MailosaurClient(process.env.MAILOSAUR_API_KEY as string);
export const mailosaurEmailService = {
  /**
   * Method uses mailosaur APIs to search for the inbox for the email address provided and get the registration URL from the body of the welcome email
   * @param emailAddress - the email address of the inbox to retrieve the registraion URL from
   */
  async getRegistrationURL(emailAddress: string): Promise<string> {
    let registrationURLFromEmail = '';
    const email = { sentTo: emailAddress }; //email address to search for in the mailosaur server
    try {
      const emailMessage =
        (await mailosaur.messages.get(
          process.env.MAILOSAUR_SERVER_ID as string,
          email,
          { timeout: 60000 }
        )) || '';

      registrationURLFromEmail = emailMessage.html?.links?.[1].href as string;
    } catch (error) {
      console.log('Error in mailosaurEmailService: ' + error);
    }
    return registrationURLFromEmail;
  },
};

export default mailosaurEmailService;
