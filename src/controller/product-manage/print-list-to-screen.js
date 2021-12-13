import { PRODUCT } from '../../common/constants/constants.js';
import { $ } from '../../common/dom/dom.js';

export const printItemsToScreen = () => {
  const productListArray = JSON.parse(localStorage.getItem(PRODUCT.LIST));
  const $itemName = $('.product-manage-name');
  const $itemPrice = $('.product-manage-price');
  const $itemQuantity = $('.product-manage-quantity');

  for (let i = 0; i < productListArray.length; i++) {
    $itemName.innerHTML = productListArray[i].name;
    $itemPrice.innerHTML = productListArray[i].price;
    $itemQuantity.innerHTML = productListArray[i].quantity;
  }
};
