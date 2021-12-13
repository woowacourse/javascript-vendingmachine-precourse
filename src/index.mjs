import { renderHeader, renderProductAdd } from './js/view/index.mjs';
import { controller } from './js/controller/index.mjs';

window.addEventListener('DOMContentLoaded', () => {
  const products = JSON.parse(localStorage.getItem('products'));

  renderHeader();
  renderProductAdd(products);
  controller();
});
