import { $, default as DOM } from '../views/DOMUtils.js';
import { default as V } from '../utils/validators.js';
import { default as DB } from '../model/database.js';

export default class ProductAddMenu {
  constructor(view) {
    this.view = view;
    this.checkLocalStorage();
    this.render();
    this.productAddManager();
  }

  checkLocalStorage() {
    DB.init('inventory');
  }

  render() {
    this.view.showProductAddComponent();
    DOM.showInventory();
  }

  productAddManager() {
    $('#product-add-button').addEventListener('click', e => {
      e.preventDefault();

      if (!V.isValidProductName(DOM.getProduct().name)) return;
      if (!V.isValidProductPrice(DOM.getProduct().price)) return;
      if (!V.isValidProductQuantity(DOM.getProduct().quantity)) return;

      DB.save('inventory', DOM.getProduct());

      DOM.showInventory();
    });
  }
}
