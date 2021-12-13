import { ALERT_MESSAGE } from '../model/constants.js';

export const $ = id => document.getElementById(id);

export const getItemOrArray = key => JSON.parse(localStorage.getItem(key)) || [];

export const getItemOrNull = key => JSON.parse(localStorage.getItem(key));

export const setItem = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export const isBlankExist = input => {
  const isIncludeBlank = input.value === '' || input.value.includes(' ');
  if (isIncludeBlank) {
    alert(`${input.placeholder}에 ${ALERT_MESSAGE.isBlank}`);
  }

  return isIncludeBlank;
};

export const isPositiveNumber = input => {
  const isPositive = parseInt(input.value, 10) > 0;
  if (!isPositive) {
    alert(`${input.placeholder}에 ${ALERT_MESSAGE.isNotPositiveNumber}`);
  }

  return isPositive;
};

export const isInputNumberValid = input => !isBlankExist(input) && isPositiveNumber(input);

export const isMultipleOf10 = input => {
  const isMultiple = parseInt(input.value, 10) % 10 === 0;
  if (!isMultiple) {
    alert(`${input.placeholder}에 ${ALERT_MESSAGE.isNotMultipleOf10}`);
  }

  return isMultiple;
};

export const isOver100 = input => {
  const isOver = parseInt(input.value) >= 100;
  if (!isOver) {
    alert(`${input.placeholder}에 ${ALERT_MESSAGE.isNotOver100}`);
  }

  return isOver;
};

export const isEnoughCoin = (chargeInput, price) => {
  const isEnough = chargeInput >= price;
  if (!isEnough) {
    alert(ALERT_MESSAGE.isNotEnoughCoin);
  }

  return isEnough;
};

export const isAlreadyExistProduct = input => {
  const allProducts = getItemOrArray('products');
  const isExist = allProducts.find(e => e.name === input.value);
  if (isExist) {
    alert(ALERT_MESSAGE.isAlreadyExistProduct);
  }

  return isExist;
};

export const onKeyUpNumericEvent = input => (input.value = input.value.replace(/[^0-9]/g, ''));
