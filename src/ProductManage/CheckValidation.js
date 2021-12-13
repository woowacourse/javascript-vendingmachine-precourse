import { INPUT, INVALID } from '../common/constants.js';
import { $ } from '../common/elements.js';
import invalidException from '../common/Exception.js';

function checkProductNameInputValidation() {
  const productNameInput = $('product-name-input').value;

  return productNameInput;
}

function checkProductPriceInputValidation() {
  const productPriceInput = $('product-price-input').value;

  if (!productPriceInput) return false;
  if (productPriceInput < INPUT.MIN_PRICE) return false;
  if (productPriceInput % INPUT.QUOTIENT) return false;
  if (!Number.isInteger(productPriceInput * 1)) return false;

  return true;
}

function checkProductQuantityInputValidation() {
  const productQuantityInput = $('product-quantity-input').value;

  if (!productQuantityInput) return false;
  if (productQuantityInput < INPUT.MIN_QUANTITY) return false;
  if (!Number.isInteger(productQuantityInput * 1)) return false;

  return true;
}

export function checkInputsValidation() {
  const productNameInputValid = checkProductNameInputValidation();
  const productPriceInputValid = checkProductPriceInputValidation();
  const productQuantityInputValid = checkProductQuantityInputValidation();

  return (
    productNameInputValid && productPriceInputValid && productQuantityInputValid
  );
}

export function onInvalidInputsSubmit() {
  const productNameInputValid = checkProductNameInputValidation();
  const productPriceInputValid = checkProductPriceInputValidation();
  const productQuantityInputValid = checkProductQuantityInputValidation();

  if (!productNameInputValid) {
    invalidException(INVALID.PRODUCT_NAME, $('product-name-input'));
  } else if (!productPriceInputValid) {
    invalidException(INVALID.PRODUCT_PRICE, $('product-price-input'));
  } else if (!productQuantityInputValid) {
    invalidException(INVALID.PRODUCT_QUANTITY, $('product-quantity-input'));
  }
}
