import { SELECTOR, LIMIT, ERROR } from '../constants/constant.js';
import { $ } from '../utils/selector.js';

export const isValidProductAdd = () => {
  let validation = { valid: true, errorMessage: '' };
  if (!isValidProductName()) {
    validation.valid = false;
    validation.errorMessage = ERROR.PRODUCT_NAME_ADD;
  } else if (!isValidProductPrice()) {
    validation.valid = false;
    validation.errorMessage = ERROR.PRODUCT_PRICE_ADD;
  } else if (!isValidProductQuantity()) {
    validation.valid = false;
    validation.errorMessage = ERROR.PRODUCT_QUANTITY_ADD;
  }
  return validation;
};

const isValidProductName = () => {
  const name = $(`#${SELECTOR.ID.PRODUCT_NAME_INPUT}`).value;
  return isNotNull(name);
};

const isValidProductPrice = () => {
  const price = $(`#${SELECTOR.ID.PRODUCT_PRICE_INPUT}`).value;
  return (
    isNotNull(price) &&
    isNumber(price) &&
    isMoreThanMinAmount(price) &&
    isUnitOf10Won(price)
  );
};

const isValidProductQuantity = () => {
  const quantity = $(`#${SELECTOR.ID.PRODUCT_QUANTITY_INPUT}`).value;
  return (
    isNotNull(quantity) && isNumber(quantity) && isPositiveInteger(quantity)
  );
};

const isPositiveInteger = (input) => {
  return Math.sign(Number(input)) == 1 && Number.isInteger(Number(input));
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
