import { FIFTY, FIVE_HUNDRED, ID_NUMBER_RANGE, ONE_HUNDRED, TEN } from './constants.js';
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

export const getInitilizeCoins = () => ({
  [`${FIVE_HUNDRED}`]: 0,
  [`${ONE_HUNDRED}`]: 0,
  [`${FIFTY}`]: 0,
  [`${TEN}`]: 0,
});
