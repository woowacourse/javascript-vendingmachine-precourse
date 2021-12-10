import $ from '../utils/dom.js';
import store from '../utils/store.js';

const printAddedProduct = () => {
  const template = store
    .getLocalStorage('product')
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

export default printAddedProduct;
