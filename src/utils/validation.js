import {DIVIDEING_NUM, ERROR_MESSAGE, MINIMUM_PRICE, STORAGE_KEY} from './constants.js';
import {getLocalStorage} from './localStorage.js';

export const isInputEmpty = (inputValue) => {
  return inputValue.length < 1;
};

export const isInputNotPositive = (inputValue) => {
  return inputValue <= 0;
};

export const isInputNotInteger = (inputValue) => {
  return isNaN(inputValue) || !Number.isInteger(inputValue);
};

export const isNotMultipleOfTen = (inputValue) => {
  return inputValue % DIVIDEING_NUM !== 0;
};

export const isLessThanMinimumPrice = (inputValue) => {
  return inputValue < MINIMUM_PRICE;
};

export const isDuplicatedName = (inputValue) => {
  const products = getLocalStorage(STORAGE_KEY.PRODUCT_MANAGE);
  return products.map(({name}) => name).includes(inputValue);
};

export const isValidProductName = (inputValue) => {
  if (isInputEmpty(inputValue)) {
    alert(ERROR_MESSAGE.EMPTY);
    return false;
  }

  if (isDuplicatedName(inputValue)) {
    alert(ERROR_MESSAGE.DUPLICATED_NAME);
    return false;
  }

  return true;
};

export const isValidProductPrice = (inputValue) => {
  inputValue = Number.parseInt(inputValue, 10);
  if (isInputEmpty(inputValue)) {
    alert(ERROR_MESSAGE.EMPTY);
    return false;
  }
  if (isInputNotInteger(inputValue) || isInputNotPositive(inputValue) || isLessThanMinimumPrice(inputValue)) {
    alert(ERROR_MESSAGE.MINIMUM_PRICE);
    return false;
  }
  if (isNotMultipleOfTen(inputValue)) {
    alert(ERROR_MESSAGE.DIVIDEING_NUM);
    return false;
  }

  return true;
};

export const isValidProductQuantity = (inputValue) => {
  inputValue = Number.parseInt(inputValue, 10);
  if (isInputEmpty(inputValue)) {
    alert(ERROR_MESSAGE.EMPTY);
    return false;
  }
  if (isInputNotInteger(inputValue) || isInputNotPositive(inputValue)) {
    alert(ERROR_MESSAGE.MINIMUN_QUANTITY);
    return false;
  }

  return true;
};

export const isValidProductInput = (name, price, quantity) => {
  if (!isValidProductName(name)) {
    return false;
  }

  if (!isValidProductPrice(price)) {
    return false;
  }

  if (!isValidProductQuantity(quantity)) {
    return false;
  }

  return true;
};
