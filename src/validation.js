import {
  ERROR_DUPLICATE_NAME,
  ERROR_EMPTY_NAME,
  ERROR_INVALID_PRICE,
  ERROR_INVALID_QUANTITY,
} from './AddProducts/constants.js';
import { VAL_PRICE_ROUND_STANDARD } from './globalConstants.js';
import { getFromStorage } from './store.js';

const isUniqueName = function checkDuplicateNameInput(name) {
  const productList = getFromStorage('products') || {};
  return !(name.trim() in productList);
};

const isValidString = function screenEmptyString(str) {
  return str.replace(/\s/g, '').length !== 0;
};

const isValidName = function validateNameInput(name) {
  if (!isValidString(name)) {
    alert(ERROR_EMPTY_NAME);
    return false;
  }
  if (!isUniqueName(name)) {
    alert(ERROR_DUPLICATE_NAME);
    return false;
  }
  return true;
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
  if (!isValidName(name)) return false;
  if (!isValidMoney(price)) {
    alert(ERROR_INVALID_PRICE);
    return false;
  }
  if (!isValidQuantity(quantity)) {
    alert(ERROR_INVALID_QUANTITY);
    return false;
  }
  return true;
};

export const hasEnoughInsert = function checkForEnoughMoneyOnPurchase(
  price,
  insert,
) {
  return price <= insert;
};
