import { RULE } from './constants.js';

const isDivisable = money => money % RULE.DIVISIBLE_BY === 0;

export const isValidPrice = price =>
  Number.isInteger(price) && price >= RULE.MINIMUN_PRICE && isDivisable(price);

export const isValidChanges = money =>
  Number.isInteger(money) && money >= RULE.DIVISIBLE_BY && isDivisable(money);

export const isValidChargingMoney = money =>
  Number.isInteger(money) && money >= RULE.DIVISIBLE_BY && isDivisable(money);
