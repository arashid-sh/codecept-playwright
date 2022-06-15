/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-interface */

/// <reference types='codeceptjs' />

type AccountPage = typeof import('./src/pages/AccountPage');
type ForgotPasswordPage = typeof import('./src/pages/ForgotPasswordPage');
type HomePage = typeof import('./src/pages/HomePage');
type LoginPage = typeof import('./src/pages/LoginPage');
type SignupPage = typeof import('./src/pages/SignupPage');
type DoctorsPage = typeof import('./src/pages/DoctorsPage');

declare function inject(): CodeceptJS.SupportObject;
declare function inject<T extends keyof CodeceptJS.SupportObject>(
  name: T
): CodeceptJS.SupportObject[T];

declare namespace CodeceptJS {
  interface SupportObject {
    I: I;
    id: string;
    current: any;
    AccountPage: AccountPage;
    DoctorsPage: DoctorsPage;
    ForgotPasswordPage: ForgotPasswordPage;
    HomePage: HomePage;
    LoginPage: LoginPage;
    SignupPage: SignupPage;
  }

  interface Methods extends Playwright {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
