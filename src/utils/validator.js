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

const isValidName = (name) => {
  if (isEmpty(name)) return setErrorMessage(ERROR_MESSAGE.EMPTY_PRODUCT_NAME);

  return true;
};

const isValidPrice = (price) => {
  if (isEmpty(price)) return setErrorMessage(ERROR_MESSAGE.EMPTY_PRODUCT_PRICE);
  if (isNaN(price)) return setErrorMessage(ERROR_MESSAGE.NOT_NUMBER);
  if (!isOverGivenNum(price, NUMBER.HUNDRED))
    return setErrorMessage(ERROR_MESSAGE.NOT_OVER_HUNDRED);
  if (!isDividedByGivenNum(price, NUMBER.TEN))
    return setErrorMessage(ERROR_MESSAGE.NOT_DIVIDED_BY_TEN);

  return true;
};

const isValidQuantity = (quantity) => {
  if (isEmpty(quantity)) return setErrorMessage(ERROR_MESSAGE.EMPTY_PRODUCT_QUANTITY);
  if (isNaN(quantity)) return setErrorMessage(ERROR_MESSAGE.NOT_NUMBER);
  if (!isOverGivenNum(quantity, NUMBER.ONE)) return setErrorMessage(ERROR_MESSAGE.NOT_OVER_ONE);

  return true;
};

export const isValidProductInput = (name, price, quantity) => {
  return isValidName(name) && isValidPrice(price) && isValidQuantity(quantity);
};
