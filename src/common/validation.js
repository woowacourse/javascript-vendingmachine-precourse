export const isValid = (value) => !(value === null || value === undefined || value === '' || value === 0);
export const isPositiveNumber = (number) => isValid(number) && number >= 0;
export const isValidString = (string) => isValid(string) && string.length > 0 && string.length < 256;
export const isDivisibleTen = (number) => isValid(number) && number % 10 === 0;
