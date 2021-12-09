import { $ } from '../utils/DOM.js';
import {
  printProductTemplate,
  PRODUCT_MANAGE_TEMPLATE,
  PRODUCT_SECTION_TEMPLATE,
} from '../utils/template.js';

export class ProductView {
  constructor() {
    this.$productAddSection = $('#product-add-section');
    this.$productNameInput;
    this.$productPriceInput;
    this.$productQuantityInput;
    this.$productAddButton;
    this.$productTable;
    this.addElements();
  }

  setOnProductSubmit(fn) {
    this.$productAddButton.addEventListener('click', (e) => {
      e.preventDefault();
      const product = this.$productNameInput.value;
      const price = this.$productPriceInput.value;
      const quantity = this.$productQuantityInput.value;
      fn(product, price, quantity);
    });
  }

  showProduct(products) {
    if (products.length === 0) {
      return;
    }
    let productRowHTML = PRODUCT_MANAGE_TEMPLATE;
    products.map((product) => (productRowHTML += printProductTemplate(product)));
    this.$productTable.innerHTML = productRowHTML;
  }

  addElements() {
    this.$productAddSection.innerHTML = PRODUCT_SECTION_TEMPLATE;
    this.$productNameInput = $('#product-name-input');
    this.$productPriceInput = $('#product-price-input');
    this.$productQuantityInput = $('#product-quantity-input');
    this.$productAddButton = $('#product-add-button');
    this.$productTable = $('#product-manage-table');
  }
}
