import {
  ERROR_DUPLICATE_NAME,
  ERROR_EMPTY_NAME,
  ERROR_INVALID_PRICE,
  ERROR_INVALID_QUANTITY,
  VAL_PRICE_ROUND_STANDARD,
} from './AddProducts/constants.js';
import { getFromStorage } from './store.js';

export const validator = function validationFunctionBase(
  test,
  val,
  errorMessage,
) {
  if (!test(val)) {
    alert(errorMessage);
    return false;
  }
  return true;
};

const isUniqueName = function checkDuplicateNameInput(name) {
  const productList = getFromStorage('products') || {};
  return !(name.trim() in productList);
};

const isValidString = function screenEmptyString(str) {
  return str.replace(/\s/g, '').length !== 0;
};

const isValidName = function validateNameInput(name) {
  return (
    validator(isValidString, name, ERROR_EMPTY_NAME) &&
    validator(isUniqueName, name, ERROR_DUPLICATE_NAME)
  );
};

export const isValidMoney = function validatePriceInput(money) {
  return money % VAL_PRICE_ROUND_STANDARD === 0 && money > 0;
};

const isValidQuantity = function validateQuantityInput(quantity) {
  return Number.isInteger(quantity) && quantity > 0;
};

export const isValidProduct = function validateProductInput(
  name,
  price,
  quantity,
) {
  return (
    isValidName(name) &&
    validator(isValidMoney, price, ERROR_INVALID_PRICE) &&
    validator(isValidQuantity, quantity, ERROR_INVALID_QUANTITY)
  );
};

export const hasEnoughInsert = function checkForEnoughMoneyOnPurchase(
  price,
  insert,
) {
  return price <= insert;
};
