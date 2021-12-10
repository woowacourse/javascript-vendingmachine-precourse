import $ from '../utils/dom.js';

export const resetProductAddInput = () => {
  $('#product-name-input').value = '';
  $('#product-price-input').value = '';
  $('#product-quantity-input').value = '';
};
