import { ERROR_MESSAGE, STANDARD_PRICE } from "../constants/public.js";

const isEmptyInput = input => {
  if (input === "") {
    alert(ERROR_MESSAGE.emptyInput);
    return true;
  }
};

const isNotDivideByTen = price => {
  if (parseInt(price) % STANDARD_PRICE.divideNumber !== 0) {
    alert(ERROR_MESSAGE.notDivideByTen);
    return true;
  }
};

const isNegative = quantity => {
  if (parseInt(quantity) < 0) {
    alert(ERROR_MESSAGE.negativeInput);
    return true;
  }
};

const isSoldOut = quantity => {
  if (quantity === 0) {
    alert(ERROR_MESSAGE.soldOut);
    return true;
  }
};

const isLackMoney = (money, price) => {
  if (money < price) {
    alert(ERROR_MESSAGE.lackMoney);
    return true;
  }
};

export const checkInsertMoneyInput = input => {
  let isValid = true;
  if (isEmptyInput(input)) {
    isValid = false;
  } else if (isNegative(input)) {
    isValid = false;
  } else if (isNotDivideByTen(input)) {
    isValid = false;
  }

  return isValid;
};

export const checkCanPurchase = (quantity, money, price) => {
  let isValid = true;
  if (isSoldOut(parseInt(quantity))) {
    isValid = false;
  } else if (isLackMoney(money, parseInt(price))) {
    isValid = false;
  }

  return isValid;
};
