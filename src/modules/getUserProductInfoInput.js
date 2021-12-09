import { $ } from '../dom/dom.js';
import checkValidProductName from './checkValidProductName.js';
import checkValidProductPrice from './checkValidProductPrice.js';
import checkValidProductQuantity from './checkValidProductQuantity.js';

function setDrinkDataForm(productName, productPrice, productQuantity) {
  if (
    productName !== false &&
    productPrice !== false &&
    productQuantity !== false
  ) {
    const productInfoSet = {
      menu: productName,
      price: productPrice,
      quantity: productQuantity,
    };
    return productInfoSet;
  }
  return false;
}

export default function getUserProductInfoInput() {
  let productName = false;
  let productPrice = false;
  let productQuantity = false;
  if (checkValidProductName($('#product-name-input').value)) {
    productName = $('#product-name-input').value;
  }
  if (checkValidProductPrice($('#product-price-input').value)) {
    productPrice = $('#product-price-input').value;
  }
  if (checkValidProductQuantity($('#product-quantity-input').value)) {
    productQuantity = $('#product-quantity-input').value;
  }
  return setDrinkDataForm(productName, productPrice, productQuantity);
}
