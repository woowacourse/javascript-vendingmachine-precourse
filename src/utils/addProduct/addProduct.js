import $ from '../common/selector.js';
import { store } from '../common/store.js';
import { render } from '../common/render.js';
import { checkProductValidation } from './checkProductValidation.js';
import { clearInput } from '../common/clearInput.js';

export const addProduct = (products, tab) => {
  const productName = $('#product-name-input').value.trim();
  const price = $('#product-price-input').value;
  const quantity = $('#product-quantity-input').value;

  const { isError, inValidText } = checkProductValidation(
    productName,
    price,
    quantity,
  );

  if (isError) {
    alert(inValidText);
    clearInput('#product-name-input');
    clearInput('#product-price-input');
    clearInput('#product-quantity-input');
    return;
  }

  products.push({
    id: Date.now().toString(),
    name: productName,
    price: price,
    quantity: quantity,
  });

  store.setData(products);
  render(products, tab);

  clearInput('#product-name-input');
  clearInput('#product-price-input');
  clearInput('#product-quantity-input');
};
