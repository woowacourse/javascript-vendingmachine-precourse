import { PRICE_DIVIDER } from '../constants.js';

const isValidPrice = (price) => {
  const priceNumber = Number(price);

  if (Number.isNaN(priceNumber) || !Number.isInteger(priceNumber) || priceNumber <= 0 || priceNumber % PRICE_DIVIDER !== 0) {
    return false;
  }

  return true;
};

export default isValidPrice;
