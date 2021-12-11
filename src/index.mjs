import {
  renderHeader,
  renderProductAddTab,
  renderVendingMachineManageTab,
  renderProductPurchaseTab
} from './js/view/index.mjs';

const $app = document.querySelector('#app');

window.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderProductAddTab();
});

// 상품 관리 버튼
window.addEventListener('click', ({ target }) => {
  const $productAddMenu = document.querySelector('#product-add-menu');
  if (target !== $productAddMenu) return;
  document.querySelector('main').remove();
  renderProductAddTab();
});

// 잔돈 충전 버튼
window.addEventListener('click', ({ target }) => {
  const $vendingMachineManageMenu = document.querySelector(
    '#vending-machine-manage-menu'
  );

  if (target !== $vendingMachineManageMenu) return;
  document.querySelector('main').remove();
  renderVendingMachineManageTab();
});

// 상품 구매 버튼
window.addEventListener('click', ({ target }) => {
  if (target !== document.querySelector('#product-purchase-menu')) return;
  document.querySelector('main').remove();
  renderProductPurchaseTab();
});
