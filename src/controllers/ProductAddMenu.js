import { $ } from '../views/DOMUtils.js';
import { default as V } from '../utils/validators.js';

export default class ProductAddMenu {
  constructor(view) {
    this.view = view;
    this.render();
  }

  render() {
    this.view.showProductAddComponent();
    this.productAddManager();
  }

  productAddManager() {
    $('#product-add-button').addEventListener('click', e => {
      e.preventDefault();

      if (!V.isValidProductName($('#product-name-input').value)) return;
      if (!V.isValidProductPrice($('#product-price-input').value)) return;
      if (!V.isValidProductQuantity($('#product-quantity-input').value)) return;
    });
  }
}
