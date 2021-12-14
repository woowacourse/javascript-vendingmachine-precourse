import { ERROR_MESSAGE, MINIMUM_PRODUCT_PRICE, NUMBER_FALLS_BY_TEN } from "../constants.js";

export function checkNumberLessThanZero(value) {
  if (Number.isNaN(value) || value <= 0) {
    alert(ERROR_MESSAGE.INCORRECT_NUMBER);
    return true;
  }
  return false;
}

export function checkLengthLessThanZero(value) {
  if (value.length <= 0) {
    alert(ERROR_MESSAGE.NO_TEXT);
    return true;
  }
  return false;
}

export function checkTenDigits(value) {
  if (value % NUMBER_FALLS_BY_TEN !== 0) {
    alert(ERROR_MESSAGE.INCORRECT_TEN_DIGITS);
    return false;
  }
  return true;
}

export function checkEnoughMoney(money) {
  if (money < 0) {
    alert(ERROR_MESSAGE.NOT_ENOUGH_MONEY);
    return false;
  } 
  return true;
}

export function checkDuplicationName(productList, product) {
  const isDuplicatedName = productList.filter(
    ({ name }) => product.name === name,
  ).length;

  if (isDuplicatedName) {
    alert(ERROR_MESSAGE.DUPLICATE_PRODUCT_NAME);
    return true;
  }
  return false;
}

export function checkMoreThanOneHundred(value) {
  if (Number.isNaN(value) || value < MINIMUM_PRODUCT_PRICE) {
    alert(ERROR_MESSAGE.MORE_THAN_ONE_HUNDRED);
    return true;
  }
  return false;
}