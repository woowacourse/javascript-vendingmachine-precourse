export const isEmpty = (value) => value !== null && value !== '';

export const isPositiveNumber = (value) => /\d/g.test(value) && value > 0;

export const isMinimumValue = (value, number, minimum = 1) =>
  value % number === 0 && value >= minimum;
