import { renderProductPurchase } from '../view/index.mjs';

function renderProductPurchaseTab() {
  document.querySelector('main').remove();
  renderProductPurchase();
}

export function productPurchaseEvent() {
  const $productPurchaseMenu = document.querySelector('#product-purchase-menu');

  $productPurchaseMenu.addEventListener('click', renderProductPurchaseTab);
}
