import { ERROR_MESSAGE, STANDARD_PRICE } from './constants.js';

const isMinimumPrice = ({ price }) => {
  return STANDARD_PRICE.MINIMUM <= price;
};

const isValueBlank = ({ name, price, quantity }) => {
  return [name, price, quantity].includes('');
};

export const isValidProductValue = (productData) => {
  const { CANNOT_BE_BLANK, LESS_THAN_STANDARD } = ERROR_MESSAGE;
  if (isValueBlank(productData)) {
    return alert(CANNOT_BE_BLANK);
  }
  if (!isMinimumPrice(productData)) {
    return alert(LESS_THAN_STANDARD);
  }
  return true;
};
