import { RULES } from './constants.js';

export const load = (LS_KEY) => {
  const loaded = localStorage.getItem(LS_KEY);
  if (!loaded) {
    return [];
  }
  const parsed = JSON.parse(loaded);
  return parsed;
};

export const isSmallerThanMinPrice = (price) => {
  return price < RULES.MIN_PRICE;
};
export const isSmallerThanMinUnit = (price) => {
  return price < RULES.MIN_PRICE_UNIT;
};
export const cannotBeDividedByMinUnit = (price) => {
  return price % RULES.MIN_PRICE_UNIT;
};
export const isSmallerThanMinQuantity = (quantity) => {
  return quantity < RULES.MIN_QUANTITY;
};
