import { RULE } from './constants.js';

const isDivisable = money => money % RULE.DIVISIBLE_BY === 0;

export const isValidPrice = price =>
  price >= RULE.MINIMUN_PRICE && isDivisable(price);

export const isValidChanges = money =>
  Number.isInteger(money) && isDivisable(money);
