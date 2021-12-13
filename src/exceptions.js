import { vendingMachine } from './index.js';
import {
  ALERT_BLANK,
  ALERT_OUT_RANGE,
  ALERT_OUT_RANGE_PRICE,
  ALERT_NOT_INTEGER,
  ALERT_NOT_MULTIPLE_OF_TEN,
  ALERT_DUPLICATED,
  ALERT_LACK_OF_USER_CHANGE,
} from './constants/alert.js';

export const blankInputException = input => {
  if (!input.length) {
    alert(ALERT_BLANK);
  }

  return !input.length;
};

export const outRangeInputException = input => {
  if (input <= 0) {
    alert(ALERT_OUT_RANGE);
  }

  return input <= 0;
};

export const outRangeProductPriceInputException = input => {
  if (input < 100) {
    alert(ALERT_OUT_RANGE_PRICE);
  }

  return input < 100;
};

export const noIntegerException = input => {
  if (!Number.isInteger(input)) {
    alert(ALERT_NOT_INTEGER);
  }

  return !Number.isInteger(input);
};

export const notMultipleOfTenException = input => {
  if (input % 10 !== 0) {
    alert(ALERT_NOT_MULTIPLE_OF_TEN);
  }

  return input % 10 !== 0;
};

export const duplicatedProductException = productName => {
  let isDuplicated = false;

  vendingMachine.products.forEach(product => {
    if (product.name === productName) {
      alert(ALERT_DUPLICATED);
      isDuplicated = true;
    }
  });

  return isDuplicated;
};

export const lackOfUserChangeException = price => {
  if (vendingMachine.userAmount < price) {
    alert(ALERT_LACK_OF_USER_CHANGE);
  }

  return vendingMachine.userAmount < price;
};
