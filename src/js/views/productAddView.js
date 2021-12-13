import $ from '../utils/dom.js';
import store from '../utils/store.js';

export const renderProduct = () => {
  const template = store
    .getLocalStorage('products')
    .map(v => {
      return `
      <tr class="product-manage-item">
        <td class="product-manage-name">${v.name}</td>
        <td class="product-manage-price">${v.price}</td>
        <td class="product-manage-quantity">${v.quantity}</td>
      <tr>
    `;
    })
    .join('');
  $('tbody').innerHTML = template;
};

export const resetProductInput = () => {
  $('#product-name-input').value = '';
  $('#product-price-input').value = '';
  $('#product-quantity-input').value = '';

  $('#product-name-input').focus();
};
