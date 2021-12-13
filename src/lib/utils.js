import { ID_RANGE } from './constants.js';

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
  return Number.parseInt(Math.random() * ID_RANGE.MAX, 10);
  // return window.MissionUtils.Random.pickNumberInRange(ID_RANGE.MIN, ID_RANGE.MAX);
};
