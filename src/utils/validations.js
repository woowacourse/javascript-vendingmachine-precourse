import {
  MIN_UNIT_OF_MONEY, MIN_PRICE, ZERO, ERROR_MESSAGE,
} from '../constants/index.js';

const isInteger = (value) => Number.isInteger(value);

const isLessThanMinPrice = (value) => value < MIN_PRICE;

const isGreaterThanZero = (value) => value > ZERO;

const isSatisfyingMinUnitOfMoney = (value) => value % MIN_UNIT_OF_MONEY === 0;

const isEmptyString = (value) => value.length === 0;

const isThereSpaceBeforeOrAfter = (value) => value.length !== value.trim().length;

function isValidProductName(name) {
  if (isEmptyString(name)) return alert(ERROR_MESSAGE.PRODUCT.NAME_EMPTY);
  if (isThereSpaceBeforeOrAfter(name)) {
    return alert(ERROR_MESSAGE.PRODUCT.NAME_SPACE_BEFORE_OR_AFTER);
  }
  return true;
}

function isValidProductPrice(price) {
  if (isLessThanMinPrice(price)) return alert(ERROR_MESSAGE.PRODUCT.PRICE_LESS_THAN_MIN);
  if (!isSatisfyingMinUnitOfMoney(price)) {
    return alert(ERROR_MESSAGE.PRODUCT.PRICE_MIN_UNIT_OF_MONEY);
  }
  return true;
}

function isValidProductQuantity(quantity) {
  if (!isInteger(quantity)) return alert(ERROR_MESSAGE.PRODUCT.QUANTITY_INTEGER);
  if (!isGreaterThanZero(quantity)) return alert(ERROR_MESSAGE.PRODUCT.QUANTITY_GREATER_THAN_ZERO);
  return true;
}

function isValidProductAddition({ name, price, quantity }) {
  return isValidProductName(name)
    && isValidProductPrice(price)
    && isValidProductQuantity(quantity);
}

function isValidChargeAmount(amount) {
  if (!isInteger(amount)) return alert(ERROR_MESSAGE.CHARGE.INTEGER);
  if (!isGreaterThanZero(amount)) return alert(ERROR_MESSAGE.CHARGE.GREATER_THAN_ZERO);
  if (!isSatisfyingMinUnitOfMoney(amount)) return alert(ERROR_MESSAGE.CHARGE.MIN_UNIT_OF_MONEY);
  return true;
}

export {
  isValidProductAddition,
  isValidChargeAmount,
};
