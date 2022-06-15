/**
 * helper function for generating random numbers within a range
 *
 * @name getRandomInt
 * @param {number} min The minimum value
 * @param {number} max the maximum value
 * @returns {number}
 */

const { I } = inject();

export const getRandomInt = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
};

/**
 * helper function for payment fields
 *
 * @name switchToFrameAndType
 * @param {string} frameName frame name
 * @param {string} locator name of the locator within the same frame
 * @param {string} text input for fields
 */
export const switchToFrameAndType = (frameName, locator, text) => {
  I.switchTo(frameName);
  I.wait(0.5);
  I.fillField(locator, text);
  I.wait(0.5);
  I.switchTo();
};

// async fillFrame(iframe, field, text) {
//   within({},()=>{
//     I.fillField(field, text)
//   })
// }
