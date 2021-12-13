import { renderProductAdd, renderProductConfirm } from '../view/index.mjs';
import { Product } from '../model/Product.mjs';
import { products, addProduct } from '../model/products.mjs';

function renderProductAddTab() {
  document.querySelector('main').remove();
  renderProductAdd();
}

export function productAddEvent() {
  const $productAddMenu = document.querySelector('#product-add-menu');

  $productAddMenu.addEventListener('click', renderProductAddTab);

  window.addEventListener('click', e => {
    if (e.target !== document.querySelector('#product-add-button')) return;
    e.preventDefault();
    const name = document.querySelector('#product-name-input').value;
    const price = document.querySelector('#product-price-input').value;
    const quantity = document.querySelector('#product-quantity-input').value;

    addProduct(new Product(name, price, quantity));
    renderProductConfirm(products);
  });
}
