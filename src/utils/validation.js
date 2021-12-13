import { ALERT, PRODUCT } from './constants.js';

export const isValidMoneyInput = (money) => {
  if (money === '') {
    alert(ALERT.EMPTY_MONEY_INPUT);
    return false;
  }
  if (parseInt(money) < 0) {
    alert(ALERT.WRONG_CHARGE_INPUT);
    return false;
  }
  if (parseInt(money) % 10 !== 0) {
    alert(ALERT.NOT_10_UNIT_PRICE);
    return false;
  }
  return true;
};

export const isValidProductInput = (products, product) => {
  if (isProductInputEmpty(product)) {
    return false;
  }
  if (isAlreadyExistProduct(products, product)) {
    return false;
  }
  if (isWrongProductNumbersInput(product)) {
    return false;
  }
  return true;
};

const isProductInputEmpty = (product) => {
  if (product[PRODUCT.NAME] === '') {
    alert(ALERT.EMPTY_PRODUCT_NAME);
    return true;
  }
  if (product[PRODUCT.PRICE] === '') {
    alert(ALERT.EMPTY_PRODUCT_PRICE);
    return true;
  }
  if (product[PRODUCT.QUANTITY] === '') {
    alert(ALERT.EMPTY_PRODUCT_QUANTITY);
    return true;
  }
  return false;
};
const isAlreadyExistProduct = (products, product) => {
  if (products.filter((item) => item[PRODUCT.NAME] === product[PRODUCT.NAME]).length) {
    alert(ALERT.SAME_NAME_PRODUCT_EXIST);
    return true;
  }
  return false;
};
const isWrongProductNumbersInput = (product) => {
  if (parseInt(product[PRODUCT.PRICE]) <= 0) {
    alert(ALERT.WRONG_PRODUCT_PRICE);
    return true;
  }
  if (parseInt(product[PRODUCT.QUANTITY]) <= 0) {
    alert(ALERT.WRONG_PRODUCT_QUANTITY);
    return true;
  }
  if (parseInt(product[PRODUCT.PRICE]) % 10 !== 0) {
    alert(ALERT.NOT_10_UNIT_PRICE);
    return true;
  }
  return false;
};
