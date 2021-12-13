import { ALERT_MESSAGE } from '../model/constants.js';

export const $ = id => document.getElementById(id);

export const getItemOrArray = key => JSON.parse(localStorage.getItem(key)) || [];

export const getItemOrNull = key => JSON.parse(localStorage.getItem(key));

export const setItem = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export const isBlankExist = (placeholder, input) => {
  const isIncludeBlank = input === '' || input.includes(' ');
  if (isIncludeBlank) {
    alert(`${placeholder}에 ${ALERT_MESSAGE.isBlank}`);
  }

  return isIncludeBlank;
};

export const isPositiveNumber = (placeholder, input) => {
  const isPositive = parseInt(input, 10) > 0;
  if (!isPositive) {
    alert(`${placeholder}에 ${ALERT_MESSAGE.isNotPositiveNumber}`);
  }

  return isPositive;
};

export const isInputNumberValid = (placeholder, input) =>
  !isBlankExist(placeholder, input) && isPositiveNumber(placeholder, input);

export const isMultipleOf10 = (placeholder, input) => {
  const isMultiple = parseInt(input, 10) % 10 === 0;
  if (!isMultiple) {
    alert(`${placeholder}에 ${ALERT_MESSAGE.isNotMultipleOf10}`);
  }

  return isMultiple;
};

export const onKeyUpNumericEvent = input => (input.value = input.value.replace(/[^0-9]/g, ''));
