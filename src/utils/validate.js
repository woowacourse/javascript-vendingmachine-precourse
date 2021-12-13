import { MINMUM_PRICE, UNIT } from '../constant/constant.js';
import { ERROR } from '../constant/text.js';

const isEmpty = (text) => text === '';

const isDuplicated = (name, list) => list.includes(name);

const isNaturalNumber = (number) => Number.isInteger(number) && number > 0;

const isOverMinmumPrice = (price) => price >= MINMUM_PRICE;

const isDividedByNumber = (price) => price % UNIT === 0;

const validateName = (name, list) => {
  if (isEmpty(name)) {
    return ERROR.NO_NAME;
  }
  if (isDuplicated(name, list)) {
    return ERROR.DUPLICATED_NAME;
  }
  return undefined;
};

const validatePrice = (price) => {
  if (isEmpty(price)) {
    return ERROR.NO_PRICE;
  }
  if (!isNaturalNumber(price)) {
    return ERROR.NOT_PLUS_PRICE;
  }
  if (!isOverMinmumPrice(price)) {
    return ERROR.NOT_OVER_MINIMUM_PRICE;
  }
  if (!isDividedByNumber(price)) {
    return ERROR.NOT_DIVIDED_BY_TEN;
  }

  return undefined;
};

const validateQuantity = (quantity) => {
  if (isEmpty(quantity)) {
    return ERROR.NO_QUANTITY;
  }
  if (!isNaturalNumber(quantity)) {
    return ERROR.NOT_PLUS_QUANTITY;
  }
  return undefined;
};

export const validateProduct = ({ name, price, quantity, list }) => {
  if (validateName(name, list)) {
    return validateName(name, list);
  }
  if (validatePrice(price)) {
    return validatePrice(price);
  }
  if (validateQuantity(quantity)) {
    return validateQuantity(quantity);
  }
  return undefined;
};

export const validateChange = (money) => {
  if (!isNaturalNumber(money)) {
    return ERROR.NOT_PLUS_CHARGE;
  }
  if (!isDividedByNumber(money)) {
    return ERROR.NOT_DIVIDED_BY_TEN_CHARGE;
  }
  return undefined;
};

export const validateMoney = (money) => {
  if (!isNaturalNumber(money)) {
    return ERROR.NOT_PLUS_MONEY;
  }
  if (!isDividedByNumber(money)) {
    return ERROR.NOT_DIVIDED_BY_TEN_MONEY;
  }
  return undefined;
};
