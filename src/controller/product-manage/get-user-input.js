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
