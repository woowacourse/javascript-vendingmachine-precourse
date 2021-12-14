import { DOM, ERROR_MESSAGE, ID_NUMBER_RANGE } from './constants.js';
export const $ = (id) => document.getElementById(id);

export const hasSomeEmptyString = (strArray) => {
  return strArray.some((str) => str.length === 0);
};
export const isNumberStringIsNegative = (str) => {
  return Number(str) < 0;
};
export const isNumberStringNotDivideBy10 = (str) => {
  return Number(str) % 10 !== 0;
};
export const getRandomNumber = () => {
  return Number.parseInt(Math.random() * ID_NUMBER_RANGE.MAX, 10);
};

export const isValidProduct = (inputsValue) => {
  if (hasSomeEmptyString(Object.values(inputsValue))) {
    throw new Error(ERROR_MESSAGE.PRODUCT_ADD_ERROR_HAS_EMPTY_VALUE);
  }
  if (isNumberStringIsNegative(inputsValue[DOM.PRODUCT_PRICE_INPUT])) {
    throw new Error(ERROR_MESSAGE.PRODUCT_ADD_ERROR_PRICE_IS_NEGATIVE_NUMBER);
  }
  if (isNumberStringIsNegative(inputsValue[DOM.PRODUCT_QUANTITY_INPUT])) {
    throw new Error(ERROR_MESSAGE.PRODUCT_ADD_ERROR_QUANTITY_IS_NEGATIVE_NUMBER);
  }
  if (isNumberStringNotDivideBy10(inputsValue[DOM.PRODUCT_PRICE_INPUT])) {
    throw new Error(ERROR_MESSAGE.PRODUCT_ADD_ERROR_PRICE_DIVIDE_BY_10);
  }
  return true;
};

export const isValidCharge = (inputsValue, id) => {
  if (isNumberStringIsNegative(inputsValue[id])) {
    throw new Error(ERROR_MESSAGE.VENDING_MACHINE_ERROR_CHARGE_IS_NEGATIVE_NUMBER);
  }
  if (isNumberStringNotDivideBy10(inputsValue[id])) {
    throw new Error(ERROR_MESSAGE.VENDING_MACHINE_ERROR_CHARGE_DEVIDE_BY_10);
  }
  return true;
};

export const isPurchaseButton = (el) => {
  return el.className === DOM.PURCHASE_BUTTON_CLASSNAME;
};

export const isNotDuplicatedId = (productList, randomNumber) => {
  return productList.find((product) => product.id === randomNumber) === undefined;
};

export const isCoinGreatherThanZero = (coinQunatity) => coinQunatity > 0;

export const isCoinValueLessThanChargeAmount = (coin, chargeAmount) => coin <= chargeAmount;
