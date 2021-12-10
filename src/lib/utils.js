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
