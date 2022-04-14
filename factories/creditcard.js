const { Factory } = require('rosie');
const faker = require('faker');
const { getRandomInt } = require('../lib/util');

/**
 * The card types that Braintree supports
 *
 * @readonly
 * @enum {Object}
 */
const CARD_TYPES = {
  AMEX: 'amex',
  DISCOVER: 'discover',
  VISA: 'visa',
  MASTERCARD: 'mastercard',
};

/**
 * test card numbers.
 */
const CARDS = [
  { type: CARD_TYPES.AMEX, number: '378282246310005' },
  { type: CARD_TYPES.AMEX, number: '371449635398431' },
  { type: CARD_TYPES.DISCOVER, number: '6011111111111117' },
  { type: CARD_TYPES.DISCOVER, number: '6011000990139424' },
  { type: CARD_TYPES.MASTERCARD, number: '5555555555554444' },
  { type: CARD_TYPES.VISA, number: '4242424242424242' },
  {},
];

/**
 * Builds and returns a card
 *
 * @name getCreditCard
 * @function
 * @returns {{type:string, number: string, cvv: string}}
 */
const getCreditCard = () => {
  const cardToPick = getRandomInt(0, 5);
  const card = CARDS[cardToPick];
  card.cvv = faker.random
    .number(9999)
    .toString()
    .padStart(4, '0');
  return card;
};

module.exports = new Factory()
  .attrs({
    cardNumber: '',
    expirationMonth: '',
    expirationYear: '',
    cvv: '',
    postalCode: faker.address.zipCode('#####'),
  })
  .after(card => {
    // post build callback to set the number and the cvv from
    // the above functions, since they are necessarily related
    const randomCard = getCreditCard();
    // get a date in the future for the expiration
    const futureDate = faker.date.future();
    let rawmonth = futureDate.getMonth();
    rawmonth += 1; // FIX: faker returns a month number one less than expected
    const month = rawmonth.toString().padStart(2, '0');
    const year = futureDate.getFullYear().toString();

    return {
      ...card,
      expirationMonth: month,
      expirationYear: year,
      cardNumber: randomCard.number,
      cvv: randomCard.cvv,
      postalCode: faker.address.zipCode('#####'),
    };
    
  });