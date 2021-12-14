import { setErrorMessage } from './error.js';
import { ERROR_MESSAGE } from '../constants/message.js';
import NUMBER from '../constants/number.js';

const isEmpty = (value) => {
  return value.trim() === '';
};

const isOverGivenNum = (value, givenNum) => {
  return value >= givenNum;
};

const isDividedByGivenNum = (value, givenNum) => {
  return value % givenNum === 0;
};

const isDuplicatedName = (name, products) => {
  return products.some((product) => product.name === name);
};

const isValidName = (name, products) => {
  if (isEmpty(name)) return setErrorMessage(ERROR_MESSAGE.EMPTY_PRODUCT_NAME);
  if (isDuplicatedName(name, products))
    return setErrorMessage(ERROR_MESSAGE.DUPLICATED_PRODUCT_NAME);

  return true;
};

const isValidPrice = (price) => {
  if (isEmpty(price)) return setErrorMessage(ERROR_MESSAGE.EMPTY_PRODUCT_PRICE);
  if (!isOverGivenNum(price, NUMBER.HUNDRED))
    return setErrorMessage(ERROR_MESSAGE.NOT_OVER_HUNDRED);
  if (!isDividedByGivenNum(price, NUMBER.TEN))
    return setErrorMessage(ERROR_MESSAGE.NOT_DIVIDED_BY_TEN_PRICE);

  return true;
};

const isValidQuantity = (quantity) => {
  if (isEmpty(quantity)) return setErrorMessage(ERROR_MESSAGE.EMPTY_PRODUCT_QUANTITY);
  if (!isOverGivenNum(quantity, NUMBER.ONE)) return setErrorMessage(ERROR_MESSAGE.NOT_OVER_ONE);

  return true;
};

export const isValidProductInput = (name, price, quantity, products) => {
  return isValidName(name, products) && isValidPrice(price) && isValidQuantity(quantity);
};

export const isValidChargeAmount = (amount) => {
  if (isEmpty(amount)) return setErrorMessage(ERROR_MESSAGE.EMPTY_CHARGE_AMOUNT);
  if (!isOverGivenNum(amount, NUMBER.TEN)) return setErrorMessage(ERROR_MESSAGE.NOT_OVER_TEN);
  if (!isDividedByGivenNum(amount, NUMBER.TEN))
    return setErrorMessage(ERROR_MESSAGE.NOT_DIVIDED_BY_TEN);

  return true;
};

export const isValidPurchase = (inputChargeAmount, product) => {
  const { productPrice, productQuantity } = product;

  if (!isOverGivenNum(inputChargeAmount, productPrice))
    return setErrorMessage(ERROR_MESSAGE.NOT_ENOUGH_CHARGE);
  if (!isOverGivenNum(productQuantity, NUMBER.ONE))
    return setErrorMessage(ERROR_MESSAGE.NOT_ENOUGH_QUANTITY);

  return true;
};
