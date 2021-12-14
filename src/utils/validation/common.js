import { STANDARD_NUMBER } from '../constants.js';

export const isEmpty = (inputValue) => {
  return inputValue === '';
};

export const isInValidInteger = (inputValue) => {
  return !Number.isInteger(Number(inputValue));
};

export const isSameOrLessZero = (inputValue) => {
  return inputValue <= STANDARD_NUMBER.ZERO;
};

export const isNotDividedBy10 = (inputValue) => {
  return inputValue % STANDARD_NUMBER.DIVISOR !== 0;
};
