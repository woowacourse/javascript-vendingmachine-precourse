import { ERROR_MESSAGE, STANDARD_PRICE } from './constants.js';

const isDivideByTen = ({ price }) => {
  return price % STANDARD_PRICE.DIVIDE_NUMBER === 0;
};

const isMinimumPrice = ({ price }) => {
  return STANDARD_PRICE.MINIMUM <= price;
};

const isValueBlank = ({ name, price, quantity }) => {
  return [name, price, quantity].includes('');
};

export const isValidProductValue = (productData) => {
  const { CANNOT_BE_BLANK, LESS_THAN_STANDARD, NOT_DIVIDE_BY_TEN } =
    ERROR_MESSAGE;

  if (isValueBlank(productData)) {
    return alert(CANNOT_BE_BLANK);
  }
  if (!isMinimumPrice(productData)) {
    return alert(LESS_THAN_STANDARD);
  }
  if (!isDivideByTen(productData)) {
    return alert(NOT_DIVIDE_BY_TEN);
  }
  return true;
};
