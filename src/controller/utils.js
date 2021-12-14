import { ALERT_MESSAGE } from '../model/constants.js';

export const $ = id => document.getElementById(id);

const alertMessage = (input, message) => alert(`${input.placeholder}에 ${message}`);

const getItemOrArray = key => JSON.parse(localStorage.getItem(key)) || [];

export const validation = {
  isBlankExist(input) {
    const isIncludeBlank = input.value === '' || input.value.includes(' ');
    if (isIncludeBlank) {
      alertMessage(input, ALERT_MESSAGE.isBlank);
    }

    return isIncludeBlank;
  },

  isPositiveNumber(input) {
    const isPositive = parseInt(input.value, 10) > 0;
    if (!isPositive) {
      alertMessage(input, ALERT_MESSAGE.isNotPositiveNumber);
    }

    return isPositive;
  },

  isInputNumberValid(input) {
    return !this.isBlankExist(input) && this.isPositiveNumber(input);
  },

  isMultipleOf10(input) {
    const isMultiple = parseInt(input.value, 10) % 10 === 0;
    if (!isMultiple) {
      alertMessage(input, ALERT_MESSAGE.isNotMultipleOf10);
    }

    return isMultiple;
  },

  isOver100(input) {
    const isOver = parseInt(input.value) >= 100;
    if (!isOver) {
      alertMessage(input, ALERT_MESSAGE.isNotOver100);
    }

    return isOver;
  },

  isEnoughCoin(chargeInput, price) {
    const isEnough = chargeInput >= price;
    if (!isEnough) {
      alert(ALERT_MESSAGE.isNotEnoughCoin);
    }

    return isEnough;
  },

  isAlreadyExistProduct(productName) {
    const allProducts = getItemOrArray('products');
    const isExist = allProducts.find(e => e.name === productName.value);
    if (isExist) {
      alert(ALERT_MESSAGE.isAlreadyExistProduct);
    }

    return isExist;
  },
};

export const onKeyUpNumericEvent = input => (input.value = input.value.replace(/[^0-9]/g, ''));
