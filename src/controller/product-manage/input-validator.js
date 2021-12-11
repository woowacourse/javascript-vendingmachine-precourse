import { VALIDATION } from '../../constants/constants.js';
import { $ } from '../../dom/dom.js';

export const getProductNameValue = () => {
  const $productNameValue = $('#product-name-input').value;

  return $productNameValue;
};

export const getProductPriceValue = () => {
  const $productPriceValue = $('#product-price-input').value;

  return $productPriceValue;
};

export const getProductQuantityValue = () => {
  const $productQuantityValue = $('#product-quantity-input').value;

  return $productQuantityValue;
};

const productNameValidator = (productNameValue) => {
  let isValid = false;

  if (productNameValue.length < 1) {
    alert(VALIDATION.NAME.NONE);
    isValid;
  } else {
    isValid = true;
  }

  return isValid;
};

const productPriceValidator = (productPriceValue) => {
  let isValid = false;

  productPriceValue = parseInt(productPriceValue, 10);

  if (productPriceValue.length < 1) {
    alert(VALIDATION.PRICE.NONE);
    isValid;
  } else if (productPriceValue < 0) {
    alert(VALIDATION.PRICE.NEGATIVE);
  } else if (productPriceValue % 10 !== 0) {
    alert(VALIDATION.PRICE.MULTIPLE_OF_10);
  } else {
    isValid = true;
  }

  return isValid;
};

const productQuantityValidator = (productQuantityValue) => {
  let isValid = false;

  productQuantityValue = parseInt(productQuantityValue, 10);

  if (productQuantityValue.length < 1) {
    alert(VALIDATION.QUANTITIY.NONE);
    isValid;
  } else if (productQuantityValue < 0) {
    alert(VALIDATION.QUANTITIY.NEGATIVE);
  } else {
    isValid = true;
  }

  return isValid;
};

export const bindProductValidator = (
  productNameValue,
  productPriceValue,
  productQuantityValue
) => {
  let isValid = false;
  if (
    productNameValidator(productNameValue) === true &&
    productPriceValidator(productPriceValue) === true &&
    productQuantityValidator(productQuantityValue) === true
  ) {
    isValid = true;
  } else {
    isValid;
  }
  return isValid;
};
