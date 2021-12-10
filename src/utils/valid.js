import { ERROR, NUM } from '../constants/index.js';

const isProductNameEmpty = name => {
  return name.trim() === '';
};

const isValidPrice = price => {
  return price >= NUM.PRICE_MIN_COUNT && price % NUM.PRICE_MIN_UNIT === 0;
};
const isValidQuantity = quantity => {
  return quantity >= NUM.QUANTITY_MIN_COUNT && Number.isInteger(quantity);
};

const isValidCharge = amount => {
  return amount % NUM.PRICE_MIN_UNIT === 0;
};

export const isValidProductInput = (name, price, quantity) => {
  if (isProductNameEmpty(name)) {
    alert(ERROR.PRODUCT_NAME_IS_BLANK);
    return false;
  }
  if (!isValidPrice(price)) {
    alert(ERROR.PRICE_IS_NOT_CORRECT);
    return false;
  }
  if (!isValidQuantity(quantity)) {
    alert(ERROR.QUANTITY_IS_NOT_CORRECT);
    return false;
  }

  return true;
};

export const isValidChargeInput = amount => {
  if (!isValidCharge(amount)) {
    alert(ERROR.CHARGE_AMOUNT_IS_NOT_CORRECT);
    return false;
  }

  return true;
};
