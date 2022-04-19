const { I } = inject();
const faker = require('faker');
const { getRandomInt, getRandomGender } = require('../lib/util');

module.exports = {

    /**
     * Creates a customer
     * zipcode manually selects from salt lake city area because many other places are not available
     * @name createCustomer
    
     * @async
     * @function
     */


  async createCustomer() {
    const customer ={
    firstName : `${faker.name.firstName()}-shTest`,
    lastName : `${faker.name.lastName()}-shTest`,
    password : faker.internet.password(),
    email : faker.internet.email().replace('@', '_shTest@'),
    birthday: faker.date.between('1965-01-01', '2000-01-05'),
    zipcode: getRandomInt(0,9).toString().padStart(5, 8410),
    gender: getRandomGender(),
    }
    return customer;
  },

  /**
 * Helper function to generate a random phone numbers in ########## format
 * (faker and chance both have issues generating fake US numbers ATM)
 *
 * @name getPhoneNumber
 * @function
 * @returns {string}
 */
   async getPhoneNumber()  {
    const phoneNumber ={
   areaCode : getRandomInt(200, 999),
   exchange : getRandomInt(200, 999),
   number : getRandomInt(0, 9999).toString().padStart(4, '0'),
  }
  const customerPhone =`${phoneNumber.areaCode}`+`${phoneNumber.exchange}`+`${phoneNumber.number}`;
  return customerPhone;
},
};
