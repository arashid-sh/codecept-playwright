import { Customer } from '../services/types/customer';
import { ADDRESSES } from '../constants';
import { faker } from '@faker-js/faker';
//const { getRandomInt } = require('../lib/util');
require('dotenv').config();

//set local language to english
faker.locale = 'en';

export const CustomerFactory = {
  /**
     * Creates a customer
     * zipcode manually selects from salt lake city area because many other places are not available
     * @name createCustomer
    
     * @async
     * @function
     */

  async getAddress(state: string) {
    let zipcode;
    let streetAddress;
    switch (state) {
      case 'TX':
        zipcode = ADDRESSES.TX_ZIPCODE;
        streetAddress = ADDRESSES.TX_STREET;
        break;
      case 'OH':
        zipcode = ADDRESSES.OH_ZIPCODE;
        streetAddress = ADDRESSES.OH_STREET;
        break;
      default:
        throw new Error(`${state} is not a valid state`);
    }
    return { zipcode, streetAddress };
  },

  async createCustomer(state: string): Promise<Customer> {
    const address = await this.getAddress(state);
    return {
      firstName: `${faker.name.firstName()}scqa`,
      lastName: `${faker.name.lastName()}scqa`,
      password: process.env.USER_PASSWORD,
      email: faker.internet.email().replace('@', 'scqa@'),
      birthday: faker.date.between('1965-01-01', '2000-01-05'),
      ssn: faker.helpers.arrayElement([
        '048-34-2936',
        '574-56-3085',
        '518-52-5192',
        '757-10-3344',
        '530-74-8244',
        '498-44-4734',
        '503-76-6945',
        '428-84-6441',
      ]), //getRandomInt(10000000,999999999),
      streetAddress: address.streetAddress,
      zipcode: address.zipcode,
      gender: faker.helpers.arrayElement(['MALE', 'FEMALE']),
      phoneNumber: faker.phone.phoneNumber(),
    };
  },
};

export default CustomerFactory;
