import { renderProductAddPage, renderProductStatusTable } from '../view/index.mjs';
import { Product } from '../model/Product.mjs';
import { addProduct } from '../model/setProducts.mjs';
import { productAddInputValidate, productAddPriceValidate } from './util/validate.mjs';

function initProductAddPage() {
  document.querySelector('main').remove();
  renderProductAddPage();
}

function productAddButton() {
  const name = document.querySelector('#product-name-input').value;
  const price = document.querySelector('#product-price-input').value;
  const quantity = document.querySelector('#product-quantity-input').value;

  if (!productAddInputValidate(name, price, quantity)) return;
  if (!productAddPriceValidate(price)) return;

  addProduct(new Product(name, price, quantity));
  renderProductStatusTable();
}

export function productAddEvent() {
  const $productAddMenu = document.querySelector('#product-add-menu');
  $productAddMenu.addEventListener('click', initProductAddPage);
  window.addEventListener('click', e => {
    if (e.target !== document.querySelector('#product-add-button')) return;
    productAddButton();
  });
}
