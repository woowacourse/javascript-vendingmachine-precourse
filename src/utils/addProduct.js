import $ from './common/selector.js';
import { store } from './common/store.js';
import { render } from './common/render.js';

export const addProduct = (products, tab) => {
  const productName = $('#product-name-input').value;
  const price = $('#product-price-input').value;
  const quantity = $('#product-quantity-input').value;

  products.push({
    id: Date.now().toString(),
    name: productName,
    price: price,
    quantity: quantity,
  });

  store.setData(products);
  render(products, tab);

  $('#product-name-input').value = '';
  $('#product-price-input').value = '';
  $('#product-quantity-input').value = '';
};
