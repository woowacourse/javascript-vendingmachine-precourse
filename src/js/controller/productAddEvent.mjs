import { renderProductAdd } from '../view/index.mjs';

function renderProductAddTab() {
  document.querySelector('main').remove();
  renderProductAdd();
}

export function productAddEvent() {
  const $productAddMenu = document.querySelector('#product-add-menu');

  $productAddMenu.addEventListener('click', renderProductAddTab);
}
