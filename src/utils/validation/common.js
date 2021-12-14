export const isEmpty = (inputValue) => {
  return inputValue === '';
};

export const isInValidInteger = (inputValue) => {
  return !Number.isInteger(Number(inputValue));
};

export const isSameOrLessZero = (inputValue) => {
  return inputValue <= 0;
};

export const isNotDividedBy10 = (inputValue) => {
  return inputValue % 10 !== 0;
};
