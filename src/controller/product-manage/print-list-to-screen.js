import { $ } from '../../common/dom/dom.js';

export const printItemsToScreen = () => {
  const productListArray = JSON.parse(localStorage.getItem('productList'));
  const $ItemName = $('.product-manage-name');
  const $ItemPrice = $('.product-manage-price');
  const $Itemquantity = $('.product-manage-quantity');

  for (let i = 0; i < productListArray.length; i++) {
    $ItemName.innerHTML = productListArray[i].name;
    $ItemPrice.innerHTML = productListArray[i].price;
    $Itemquantity.innerHTML = productListArray[i].quantity;
  }
};
