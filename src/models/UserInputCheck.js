import {
  isEmpty,
  isPositiveNumber,
  isMinimumValue,
} from '../utils/validation-tools.js';
import {
  DONE,
  ERROR,
  MINIMUM_COIN_TYPE,
  MINIMUM_PRODUCT_AMOUNT,
} from '../constants/constants.js';

export const checkProductVaild = (product) => {
  const { name, price, quantity } = product;

  if (!isEmpty(name) || !isEmpty(price) || !isEmpty(quantity)) {
    return ERROR.PRODUCT_INPUT;
  }

  if (!isPositiveNumber(quantity)) {
    return ERROR.PRODUCT_ONLY_NUMBER;
  }

  if (!isMinimumValue(price, MINIMUM_COIN_TYPE, MINIMUM_PRODUCT_AMOUNT)) {
    return ERROR.PRODUCT_PRICE;
  }

  return DONE.PRODUCT_VAILD;
};

export const checkAmountVaild = (amount) => {
  if (!isPositiveNumber(amount)) {
    return ERROR.CHARGE_POSITIVE_NUMBER;
  }

  if (!isMinimumValue(amount, MINIMUM_COIN_TYPE)) {
    return ERROR.CHARGE_MINIMUM_NUMBER;
  }

  return DONE.CHARGE_VAILD;
};
