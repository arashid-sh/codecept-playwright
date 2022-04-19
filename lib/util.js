
//this function creates a random gender

 const getRandomGender = () => {
  const array = ["MALE","FEMALE"]
  const minimum = Math.ceil(1);
  const maximum = Math.floor(3);
  const selected = Math.floor(Math.random() * (maximum - minimum)) + minimum;

  return array[selected-1];
};
/**
 * helper function for generating random numbers within a range
 *
 * @name getRandomInt
 * @function
 * @param {number} min The minimum value
 * @param {number} max the maximum value
 * @returns {number}
 */
 const getRandomInt = (min, max) => {
    const minimum = Math.ceil(min);
    const maximum = Math.floor(max);
    return Math.floor(Math.random() * (maximum - minimum)) + minimum;
  };


  module.exports = {
    getRandomInt,
    getRandomGender
  };
  