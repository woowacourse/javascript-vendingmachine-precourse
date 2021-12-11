import { RULE } from './constants.js';

export const isValidPrice = price =>
  price >= RULE.MINIMUN_PRICE && price % RULE.DIVISIBLE_BY === 0;
