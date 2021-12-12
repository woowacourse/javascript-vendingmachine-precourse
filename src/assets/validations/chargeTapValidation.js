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

export const checkChargeChangeInput = input => {
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
