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
    getRandomInt
  };
  