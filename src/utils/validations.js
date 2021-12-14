import {
  COINAGE,
  PRODUCT_NAME_LENGTH_RANGE,
  PRODUCT_PRICE_RANGE,
  PRODUCT_QUNATITY_RANGE,
  CHARGE_AMOUNT_RANGE,
} from '../configs/constants.js';

const isSafeRange = (value, { MIN, MAX }) => value >= MIN && value <= MAX;

const isDivisableByMinCoin = (amount) => amount % Math.min(...COINAGE) === 0;

const isValidName = (name) =>
  isSafeRange(name.length, PRODUCT_NAME_LENGTH_RANGE);

const isValidPrice = (price) =>
  Number.isInteger(price) &&
  isSafeRange(price, PRODUCT_PRICE_RANGE) &&
  isDivisableByMinCoin(price);

const isValidQuantity = (quantity) =>
  Number.isInteger(quantity) && isSafeRange(quantity, PRODUCT_QUNATITY_RANGE);

const isPurchasable = (chargedAmount, price) => chargedAmount >= price;

export const isValidItem = (name, price, quantity) =>
  isValidName(name) && isValidPrice(price) && isValidQuantity(quantity);

export const isValidChargeAmount = (chargeAmount) =>
  Number.isInteger(chargeAmount) &&
  isSafeRange(chargeAmount, CHARGE_AMOUNT_RANGE) &&
  isDivisableByMinCoin(chargeAmount);

export const validateItem = (name, price, quantity) => {
  if (!isValidItem(name, price, quantity)) {
    alert('error');

    return false;
  }

  return true;
};

export const validateChargeAmount = (chargeAmount) => {
  if (!isValidChargeAmount(chargeAmount)) {
    alert('error');

    return false;
  }

  return true;
};

export const validatePurchasable = (chargedAmount, price) => {
  if (!isPurchasable(chargedAmount, price)) {
    alert('error');

    return false;
  }

  return true;
};
