import { default as DB } from '../model/database.js';
import { default as UT } from '../utils/utils.js';

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

  getCharge: () => {
    return $('#vending-machine-charge-input').value;
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

  hideComponents: () => {
    Array.from($('#component').children).forEach(menu => (menu.style.display = 'none'));
  },

  showComponent: id => {
    DOMUtils.hideComponents();

    $(UT.changeIdToComponent(id)).style.display = 'block';
  },
};

export default DOMUtils;
