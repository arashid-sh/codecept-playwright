const Helper = require('@codeceptjs/helper');
const { I } = inject();

class ShortCutStepsHelper extends Helper {
  clickAndFillField(locator: CodeceptJS.LocatorOrString, value: string): void {
    I.click(locator);
    I.fillField(locator, value);
  }
}

export = ShortCutStepsHelper;
