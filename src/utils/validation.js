/* eslint-disable no-alert */
import { RULE, ERROR } from '../constant/error.js';

const isNotEmpty = (value) => {
  return value.length !== RULE.MIN_LENGTH;
};

const isUpperMinPrice = (value) => {
  return value >= RULE.MIN_PRICE;
};

const isUpperMinQunatity = (value) => {
  return value >= RULE.MIN_QUANTITY;
};

const isUpperMinMoney = (value) => {
  return value >= RULE.MIN_MONEY;
};

const isDivided = (value) => {
  return value % RULE.MIN_DIVISOR === 0;
};

const isInteger = (value) => {
  return Number.isInteger(Number(value));
};

const isValidName = (name) => {
  if (!isNotEmpty(name)) {
    alert(ERROR.MIN_LENGTH);
    return false;
  }

  return true;
};

const isValidPrice = (price) => {
  if (!isNotEmpty(price)) {
    alert(ERROR.MIN_LENGTH);
    return false;
  }

  if (!isUpperMinPrice(price) || !isDivided(price)) {
    alert(ERROR.PRICE);
    return false;
  }

  return true;
};

const isValidQuantity = (quantity) => {
  if (!isNotEmpty(quantity)) {
    alert(ERROR.QUANTITY);
    return false;
  }

  if (!isUpperMinQunatity(quantity) || !isInteger(quantity)) {
    alert(ERROR.QUANTITY);
    return false;
  }

  return true;
};

const isValidMoney = (money) => {
  if (!isNotEmpty(money)) {
    alert(ERROR.MIN_LENGTH);
    return false;
  }

  if (!isUpperMinMoney(money) || !isDivided(money)) {
    alert(ERROR.MONEY);
    return false;
  }
  return true;
};

export const isValidProductAdd = (values) => {
  const [name, price, quantity] = values;

  if (!isValidName(name)) {
    return false;
  }

  if (!isValidPrice(price)) {
    return false;
  }

  if (!isValidQuantity(quantity)) {
    return false;
  }
  return true;
};

export const isValidRecharge = (value) => {
  if (!isValidMoney(value)) {
    return false;
  }

  return true;
};

export const canBePurchase = (money, price) => {
  if (money < price) {
    alert(ERROR.PURCHASE);
    return false;
  }

  return true;
};

export const canBeReturn = (amount) => {
  if (amount <= RULE.MIN_COIN_AMOUNT) {
    alert(ERROR.RETURN);
    return false;
  }

  return true;
};
