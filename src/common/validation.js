export const isEmpty = (value) => value === null || value === undefined || value === '' || value === 0;
export const isPositiveNumber = (number) => !isEmpty(number) && number >= 0;
export const isValidString = (string) => !isEmpty(string) && string.length > 0 && string.length < 256;
export const isDivisibleTen = (number) => !isEmpty(number) && number % 10 === 0;
