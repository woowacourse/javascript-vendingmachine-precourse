import { default as DB } from '../model/database.js';

export const $ = selector => document.querySelector(selector);

const DOMUtils = {
  initElement: selector => {
    $(selector).innerHTML = '';
  },

  getProduct: () => {
    return {
      name: $('#product-name-input').value,
      price: $('#product-price-input').value,
      quantity: $('#product-quantity-input').value,
    };
  },

  showInventory: () => {
    $('#product-inventory').innerHTML = DB.load('inventory')
      .map(
        product =>
          `<tr class="product-manage-item">
            <td class="product-manage-name" style="padding:10px; text-align:center;">${product.name}</td>
            <td class="product-manage-price" style="padding:10px; text-align:center;">${product.price}</td>
            <td class="product-manage-quantity" style="padding:10px; text-align:center;">${product.quantity}</td>
          </tr>`,
      )
      .join('');
  },
};

export default DOMUtils;
