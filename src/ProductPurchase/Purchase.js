import { INVALID } from '../common/constants.js';

import { updatePurchasableToLocalStorage } from './Purchasable.js';

function getPurchasePriceElements() {
  return document.getElementsByClassName('product-purchase-price');
}

function getPurchaseQuantityElements() {
  return document.getElementsByClassName('product-purchase-quantity');
}

function updateProductToLocalStorage(rowIdx) {
  let products = [];

  if (localStorage.getItem('상품 현황')) {
    products = JSON.parse(localStorage.getItem('상품 현황'));
  }

  products[rowIdx].수량 -= 1;
  localStorage.setItem('상품 현황', JSON.stringify(products));
}

function updateQuantity(productRowIdx) {
  const purchaseQuantityElements = getPurchaseQuantityElements();
  const quantity = purchaseQuantityElements[productRowIdx - 1];
  quantity.textContent -= 1;
  updateProductToLocalStorage(productRowIdx - 1);
  updatePurchasableToLocalStorage();
}

function updateAmountInput(productRowIdx) {
  const purchasePriceElements = getPurchasePriceElements();
  const price = purchasePriceElements[productRowIdx - 1].textContent;
  const amountInput = localStorage.getItem('투입한 금액');
  const newAmountInput = amountInput * 1 - price * 1;

  if (newAmountInput < 0) {
    alert(INVALID.MINUS);
  } else {
    updateQuantity(productRowIdx);
    localStorage.setItem('투입한 금액', newAmountInput);
  }
}

function getPurchaseProduct(event) {
  const productRowIdx = event.srcElement.parentElement.parentElement.rowIndex;
  updateAmountInput(productRowIdx);
}

export default function onProductPurchaseClick(event) {
  window.location.reload();
  getPurchaseProduct(event);
}
