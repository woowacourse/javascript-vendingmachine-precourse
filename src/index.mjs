import { renderHeader, renderProductAddMenu } from './js/view/index.mjs';

function init() {
  renderHeader();
  renderProductAddMenu();
}

window.addEventListener('DOMContentLoaded', () => {
  init();
});

// 상품 관리 버튼
window.addEventListener('click', ({ target, preventDefault }) => {
  // preventDefault();
  const $productAddMenu = document.querySelector('#product-add-menu');

  if (target !== $productAddMenu) return;
  if (!document.querySelector('.productAddWrap')) renderProductAddMenu();
});

window.addEventListener('click', ({ target, preventDefault }) => {
  // preventDefault();
  const $vendingMachineManageMenu = document.querySelector(
    '#vending-machine-manage-menu'
  );

  if (target !== $vendingMachineManageMenu) return;
  document.querySelector('main').innerHTML = '';
});
