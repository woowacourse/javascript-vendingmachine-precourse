import { ALERT_MESSAGE, STANDARD_NUMBER } from "./constant.js";

export const checkValidChargeMoney = (money) => {
  if (isNotPositiveNumber(money)) {
    throw new Error(ALERT_MESSAGE.PRICE_NOT_UNDER_ZERO);
  }
  if (isNotPriceDividedByTen(money)) {
    throw new Error(ALERT_MESSAGE.DIVIDED_BY_TEN);
  }
};

export const checkValidAddProduct = ({ name, price, quantity }) => {
  if (hasEmpty([name, price, quantity])) {
    throw new Error(ALERT_MESSAGE.NO_EMPTY);
  }
  if (isNotPositiveNumber(quantity)) {
    throw new Error(ALERT_MESSAGE.OVER_ZERO_QUANTITY);
  }
  if (isPriceUnderMin(price)) {
    throw new Error(ALERT_MESSAGE.OVER_MIN_PRICE);
  }
  if (isNotPriceDividedByTen(price)) {
    throw new Error(ALERT_MESSAGE.DIVIDED_BY_TEN);
  }
};

export const checkValidBuyProduct = ({ price, quantity }, chargedMoney) => {
  if (isExpesiveThanChargedMoney(price, chargedMoney)) {
    throw new Error(ALERT_MESSAGE.LACK_CHARGED_MONEY);
  }
  if (isZeroQuantity(quantity)) {
    throw new Error(ALERT_MESSAGE.NO_PRODUCT_QUANTITY);
  }
};

const isNotPositiveNumber = (num) => {
  return num <= STANDARD_NUMBER.ZERO;
};

const hasEmpty = (inputArray) => {
  return inputArray.some((input) => input === "");
};

const isPriceUnderMin = (price) => {
  return price < STANDARD_NUMBER.MIN_PRICE;
};

const isNotPriceDividedByTen = (price) => {
  return price % STANDARD_NUMBER.DIVIDE_NUMBER !== STANDARD_NUMBER.ZERO;
};

const isZeroQuantity = (quantity) => {
  return quantity === STANDARD_NUMBER.ZERO;
};

const isExpesiveThanChargedMoney = (price, chargedMoney) => {
  return price > chargedMoney;
};
