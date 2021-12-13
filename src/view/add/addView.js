import { $ } from '../../utils/DOMhelper.js';
import { addTabTemplate, productTemplate } from '../template.js';

export default class AddView {
  init() {
    this.$main = $('main');
  }

  renderAddTab(products) {
    this.$main.innerHTML = addTabTemplate(products);
  }

  selectAddTabDOMS() {
    this.$productNameInput = $('#product-name-input');
    this.$productPriceInput = $('#product-price-input');
    this.$productQuantityInput = $('#product-quantity-input');
    this.$productAddForm = $('#product-add-form');
    this.$tbody = $('tbody');
  }

  renderProduct(name, price, quantity) {
    this.$tbody.insertAdjacentHTML('beforeend', productTemplate({ name, price, quantity }));
  }
}
