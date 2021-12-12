import { LIMIT, ERROR } from '../constants/constant.js';

export const isValidProductAdd = (product) => {
  let validation = { valid: true, errorMessage: '' };
  if (!isValidName(product.name)) {
    validation.valid = false;
    validation.errorMessage = ERROR.PRODUCT_NAME_ADD;
  } else if (!isValidPrice(product.price)) {
    validation.valid = false;
    validation.errorMessage = ERROR.PRODUCT_PRICE_ADD;
  } else if (!isValidQuantity(product.quantity)) {
    validation.valid = false;
    validation.errorMessage = ERROR.PRODUCT_QUANTITY_ADD;
  }
  return validation;
};

const isValidName = (name) => {
  return isNotNull(name);
};

const isValidPrice = (price) => {
  return (
    isNotNull(price) &&
    isNumber(price) &&
    isMoreThanMinAmount(price) &&
    isUnitOf10Won(price)
  );
};

const isValidQuantity = (quantity) => {
  return (
    isNotNull(quantity) && isNumber(quantity) && isPositiveInteger(quantity)
  );
};

const isPositiveInteger = (input) => {
  return Math.sign(input) == 1 && Number.isInteger(input);
};

const isMoreThanMinAmount = (input) => {
  return input >= LIMIT.MIN_PRICE;
};

const isUnitOf10Won = (input) => {
  return input % LIMIT.UNIT_PRICE == 0;
};

const isNumber = (input) => {
  return !Number.isNaN(input);
};

const isNotNull = (input) => {
  return input != '';
};
