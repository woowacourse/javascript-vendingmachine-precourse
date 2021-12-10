import { MINIMUM_PRICE, DIVIDING_STANDARD, ZERO } from './constants.js';

const checkPrice = price => {
  if (price < MINIMUM_PRICE) return false;
  if (price % DIVIDING_STANDARD !== ZERO) return false;
  return true;
};

const checkMoney = money => {
  if (money < ZERO) return false;
  if (money % DIVIDING_STANDARD !== ZERO) return false;
  return true;
};

export { checkPrice, checkMoney };
