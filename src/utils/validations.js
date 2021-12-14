import {
  COINAGE,
  PRODUCT_NAME_LENGTH_RANGE,
  PRODUCT_PRICE_RANGE,
  PRODUCT_QUNATITY_RANGE,
  CHARGE_AMOUNT_RANGE,
} from '../configs/constants.js';
import tc from '../core/utils/tc.js';

const isSafeRange = (
  value,
  { MIN, MAX },
  _0 = tc(value, 'number'),
  _1 = tc(MIN, 'number'),
  _2 = tc(MAX, 'number')
) => value >= MIN && value <= MAX;

const isDivisableByMinCoin = (amount) => amount % Math.min(...COINAGE) === 0;

const isValidName = (name) =>
  isSafeRange(name.length, PRODUCT_NAME_LENGTH_RANGE);

const isValidPrice = (price) =>
  Number.isInteger(price) &&
  isSafeRange(price, PRODUCT_PRICE_RANGE) &&
  isDivisableByMinCoin(price);

const isValidQuantity = (quantity) =>
  Number.isInteger(quantity) && isSafeRange(quantity, PRODUCT_QUNATITY_RANGE);

export const isValidItem = (name, price, quantity) =>
  isValidName(name) && isValidPrice(price) && isValidQuantity(quantity);

export const isValidChargeAmount = (chargeAmount) =>
  Number.isInteger(chargeAmount) &&
  isSafeRange(chargeAmount, CHARGE_AMOUNT_RANGE) &&
  isDivisableByMinCoin(chargeAmount);
