import {
  ADD_ERROR_MESSAGE,
  MINIMUM_PRICE_INPUT,
  MINIMUM_QUANTITY_INPUT,
  MINIMUM_CHARGE_INPUT,
  CHARGE_ERROR_MESSAGE,
  PURCHASE_ERROR_MESSAGE,
} from '../constant/constant.js';

function isNotEmptyName(name) {
  return name.trim() !== '';
}

function isAboveMinimum(value, minimum) {
  return +value >= minimum;
}

function isMultipleOf10(value) {
  return +value % 10 === 0;
}

function isValidPrice(price) {
  return isAboveMinimum(price, MINIMUM_PRICE_INPUT) && isMultipleOf10(price);
}

function isDuplicatedName(products, name) {
  return !products.find((product) => product.name === name);
}

export default class Validator {
  static isValidAddInput(products, { name, price, quantity }) {
    if (
      isNotEmptyName(name)
      && isValidPrice(price)
      && isAboveMinimum(quantity, MINIMUM_QUANTITY_INPUT)
      && isDuplicatedName(products, name)
    ) {
      return true;
    }
    alert(ADD_ERROR_MESSAGE);
    return false;
  }

  static isValidChargeInput(money) {
    if (isAboveMinimum(money, MINIMUM_CHARGE_INPUT) && isMultipleOf10(money)) {
      return true;
    }
    alert(CHARGE_ERROR_MESSAGE);
    return false;
  }

  static isBuyable(price, quantity, money) {
    if (money >= price && +quantity > 0) {
      return true;
    }
    alert(PURCHASE_ERROR_MESSAGE);
    return false;
  }
}
