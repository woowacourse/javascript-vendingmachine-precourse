import { ERROR, PRODUCT, PRICE } from '../utils/constants.js';

export const isValidName = nameInput => {
  if (nameInput === '') {
    alert(ERROR.NAME_BLANK);
    return false;
  }
  return true;
};

export const isValidPrice = priceInput => {
  if (priceInput === '') {
    alert(ERROR.PRICE_BLANK);
    return false;
  }
  if (Number(priceInput) < PRODUCT.LEAST_PRICE) {
    alert(ERROR.PRICE_TOO_LOW);
    return false;
  }
  if (Number(priceInput) % PRICE.TEN_WON !== 0) {
    alert(ERROR.PRICE_SHOULD_DIVIDED_INTO_TEN);
    return false;
  }
  return true;
};

export const isValidQuantity = quantityInput => {
  if (quantityInput === '') {
    alert(ERROR.QUANTITY_BLANK);
    return false;
  }
  if (Number(quantityInput) < PRODUCT.LEAST_QUANTITY) {
    alert(ERROR.QUANTITY_TOO_LOW);
    return false;
  }
  return true;
};
