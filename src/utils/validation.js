import { vendingMachine } from "../components/vendingMachine.js";
import { ERROR_MESSAGE, STANDARD_PRICE } from "./constants.js";

const isEmptyInput = input => {
  if (input === "") {
    alert(ERROR_MESSAGE.emptyInput);
    return true;
  }
};

const isDuplicateName = input => {
  let isDuplicate = false;
  vendingMachine.products.forEach(product => {
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

const checkAddProductsNameInput = name => {
  let isError = false;
  if (isEmptyInput(name)) {
    isError = true;
  } else if (isDuplicateName(name)) {
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

export const checkAddProductsInputs = (name, price, quantity) => {
  let isValid = true;
  if (checkAddProductsNameInput(name)) {
    isValid = false;
  } else if (checkAddProductsPriceInput(price)) {
    isValid = false;
  } else if (checkAddProductsQuantityInput(quantity)) {
    isValid = false;
  }

  return isValid;
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
