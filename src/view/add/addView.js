import { $ } from '../../utils/DOMhelper.js';
import { addTabTemplate } from '../template.js';

export default class AddView {
  init() {
    this.$main = $('main');
  }

  renderAddTab() {
    this.$main.innerHTML = addTabTemplate();
  }

  selectAddTabDOMS() {
    this.$productNameInput = $('#product-name-input');
    this.$productPriceInput = $('#product-price-input');
    this.$productQuantityInput = $('#product-quantity-input');
    this.$productAddForm = $('#product-add-form');
  }
}
