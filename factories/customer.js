const { I } = inject();
const faker = require('faker');
const { getRandomInt } = require('../lib/util');
require("dotenv").config();

//set local language to english
faker.locale = 'en';

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
    firstName : `${faker.name.firstName()}scqa`,
    lastName : `${faker.name.lastName()}scqa`,
    password : process.env.USER_PASSWORD,
    email : faker.internet.email().replace('@', 'scqa@'),
    birthday: faker.date.between('1965-01-01', '2000-01-05'),
    ssn: getRandomInt(10000000,999999999),
    streetAddress : '2800 MACGREGOR WAY',
    //streetAddress : faker.address.streetAddress(),
    zipcode: '77021',
    //zipcode: getRandomInt(1,9).toString().padStart(5, 8410),
    gender: faker.random.arrayElement(["MALE","FEMALE"]),
    phoneNumber: faker.phone.phoneNumberFormat(),
    }
    return customer;
  },
};
