import { PRODUCT_NAME, PRODUCT_PRICE, PRODUCT_QUANTITY, STANDARD_NUMBER } from '../constants.js';
import { isEmpty, isInValidInteger, isNotDividedBy10, isSameOrLessZero } from './common.js';

const isContainsBlank = (productNameInput) => {
  return productNameInput.replace(/ /g, '').length === 0;
};

const isNumberType = (productNameInput) => {
  return !isNaN(Number(productNameInput));
};

const isSmallerThan100 = (inputValue) => {
  return inputValue < STANDARD_NUMBER.MIN_PRICE;
};

const showErrorMessage = (message) => {
  alert(message);
  return true;
};

const isInValidProductName = (productNameInput) => {
  if (isEmpty(productNameInput)) {
    return showErrorMessage(PRODUCT_NAME.EMPTY_ERROR_MESSAGE);
  }

  if (isContainsBlank(productNameInput)) {
    return showErrorMessage(PRODUCT_NAME.BLANK_ERROR_MESSAGE);
  }

  if (isNumberType(productNameInput)) {
    return showErrorMessage(PRODUCT_NAME.TYPE_ERROR_MESSAGE);
  }

  return false;
};

const isInValidProductPrice = (productPriceInput) => {
  if (isEmpty(productPriceInput)) {
    return showErrorMessage(PRODUCT_PRICE.EMPTY_ERROR_MESSAGE);
  }

  if (isInValidInteger(productPriceInput)) {
    return showErrorMessage(PRODUCT_PRICE.TYPE_ERROR_MESSAGE);
  }

  if (isSmallerThan100(productPriceInput)) {
    return showErrorMessage(PRODUCT_PRICE.RANGE_ERROR_MESSAGE);
  }

  if (isNotDividedBy10(productPriceInput)) {
    return showErrorMessage(PRODUCT_PRICE.DIVIDED_ERROR_MESSAGE);
  }

  return false;
};

const isInValidQuantityInput = (productQuantityInput) => {
  if (isEmpty(productQuantityInput)) {
    return showErrorMessage(PRODUCT_QUANTITY.EMPTY_ERROR_MESSAGE);
  }

  if (isInValidInteger(productQuantityInput)) {
    return showErrorMessage(PRODUCT_QUANTITY.TYPE_ERROR_MESSAGE);
  }

  if (isSameOrLessZero(productQuantityInput)) {
    return showErrorMessage(PRODUCT_QUANTITY.RANGE_ERROR_MESSAGE);
  }

  return false;
};

export const isValidProductAddData = (
  productNameInput,
  productPriceInput,
  productQuantityInput
) => {
  if (isInValidProductName(productNameInput)) {
    return false;
  }

  if (isInValidProductPrice(productPriceInput)) {
    return false;
  }

  if (isInValidQuantityInput(productQuantityInput)) {
    return false;
  }

  return true;
};
