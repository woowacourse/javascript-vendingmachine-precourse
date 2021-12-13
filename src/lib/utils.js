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
  return window.MissionUtils.Random.pickNumberInRange(ID_RANGE.MIN, ID_RANGE.MAX);
};
export const setLocalStorage = (KEY, VALUE) => {
  localStorage.setItem(KEY, VALUE);
};
export const getLocalStorageByKey = (KEY) => {
  // 객체는 객체화 하여
  // 문자열은 문자열 그대로
  return JSON.parse(localStorage.getItem(KEY));
};
