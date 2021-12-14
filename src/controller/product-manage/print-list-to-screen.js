import { PRODUCT } from '../../common/constants/constants.js';
import { $ } from '../../common/dom/templates.js';

export const printItemsToScreen = () => {
  const productListArray = JSON.parse(localStorage.getItem(PRODUCT.LIST));
  const $itemName = $('.product-manage-name');
  const $itemPrice = $('.product-manage-price');
  const $itemQuantity = $('.product-manage-quantity');

  for (const item of productListArray) {
    $itemName.innerHTML = item.name;
    $itemPrice.innerHTML = item.price;
    $itemQuantity.innerHTML = item.quantity;
  }
};
