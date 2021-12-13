import { USER_INPUT_ALERT } from './constant.js';

const ProductNameCheckMethods = [
  (value) => {
    const isFilled = value.trim() !== '';
    if (!isFilled) {
      alert(USER_INPUT_ALERT.blankNameError);
    }
    return isFilled;
  },
];

function isProductNameValid(value) {
  return ProductNameCheckMethods.every((ProductNameCheckMethod) => ProductNameCheckMethod(value));
}

const PriceCheckMethods = [
  (value) => {
    const isOver100 = value >= 100;
    if (!isOver100) {
      alert(USER_INPUT_ALERT.over100Error);
    }
    return isOver100;
  },
  (value) => {
    const is10Multiple = value % 10 === 0;
    if (!is10Multiple) {
      alert(USER_INPUT_ALERT.multiple10Error);
    }
    return is10Multiple;
  },
];

function isPriceValid(value) {
  return PriceCheckMethods.every((PriceCheckMethod) => PriceCheckMethod(value));
}

const QuantityCheckMethods = [
  (value) => {
    const isNaturalNumber = Number(value) >= 1 && parseInt(value) === Number(value);
    if (!isNaturalNumber) {
      alert(USER_INPUT_ALERT.notNaturalNumberError);
    }
    return isNaturalNumber;
  },
];

function isQuantityValid(value) {
  return QuantityCheckMethods.every((QuantityCheckMethod) => QuantityCheckMethod(value));
}

export function isProductInputsValid(productName, price, quantity) {
  return isProductNameValid(productName) && isPriceValid(price) && isQuantityValid(quantity);
}

const MoneyCheckMethods = [
  (value) => {
    const is10Multiple = value % 10 === 0;
    if (!is10Multiple) {
      alert(USER_INPUT_ALERT.multiple10Error);
    }
    return is10Multiple;
  },
];

export function isMoneyValid(value) {
  return MoneyCheckMethods.every((MoneyCheckMethod) => MoneyCheckMethod(value));
}
