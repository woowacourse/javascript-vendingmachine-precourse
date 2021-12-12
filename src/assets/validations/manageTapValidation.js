import { ERROR_MESSAGE, STANDARD_PRICE } from "../constants/public.js";

const isEmptyInput = input => {
  if (input === "") {
    alert(ERROR_MESSAGE.emptyInput);
    return true;
  }
};

const isDuplicateName = (machine, input) => {
  let isDuplicate = false;
  machine.products.forEach(product => {
    if (product.name === input) {
      alert(ERROR_MESSAGE.duplicateName);
      isDuplicate = true;
    }
  });

  return isDuplicate;
};

const isUnderThanMinimumPrice = price => {
  if (parseInt(price) < STANDARD_PRICE.minimum) {
    alert(ERROR_MESSAGE.lessThanStandard);
    return true;
  }
};

const isNotDivideByTen = price => {
  if (parseInt(price) % STANDARD_PRICE.divideNumber !== 0) {
    alert(ERROR_MESSAGE.notDivideByTen);
    return true;
  }
};

const checkAddProductsNameInput = (machine, name) => {
  let isError = false;
  if (isEmptyInput(name)) {
    isError = true;
  } else if (isDuplicateName(machine, name)) {
    isError = true;
  }

  return isError;
};

const checkAddProductsPriceInput = price => {
  let isError = false;
  if (isEmptyInput(price)) {
    isError = true;
  } else if (isUnderThanMinimumPrice(price)) {
    isError = true;
  } else if (isNotDivideByTen(price)) {
    isError = true;
  }

  return isError;
};

const isNegative = quantity => {
  if (parseInt(quantity) < 0) {
    alert(ERROR_MESSAGE.negativeInput);
    return true;
  }
};

const checkAddProductsQuantityInput = quantity => {
  let isError = false;
  if (isEmptyInput(quantity)) {
    isError = true;
  } else if (isNegative(quantity)) {
    isError = true;
  }

  return isError;
};

export const checkAddProductsInputs = (machine, name, price, quantity) => {
  let isValid = true;
  if (checkAddProductsNameInput(machine, name)) {
    isValid = false;
  } else if (checkAddProductsPriceInput(price)) {
    isValid = false;
  } else if (checkAddProductsQuantityInput(quantity)) {
    isValid = false;
  }

  return isValid;
};
