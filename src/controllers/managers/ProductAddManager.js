import { $, default as DOM } from '../../utils/DOMUtils.js';
import { default as V } from '../../utils/validators.js';
import { default as DB } from '../../model/database.js';
import getAllPurchaseButton from '../utils/getAllPurchaseButton.js';
import { SELECTOR } from '../../constants/selectors.js';
import { STORAGE } from '../../constants/constants.js';

export default class ProductAddManager {
  constructor() {
    this.render();
    this.manage();
  }

  render() {
    DOM.showInventory();
    DOM.initProductInput();
  }

  manage() {
    $(SELECTOR.PRODUCT_ADD_BUTTON).addEventListener('click', e => {
      e.preventDefault();

      if (!V.isValidProductName(DOM.getProduct().name)) return;
      if (!V.isValidProductPrice(DOM.getProduct().price)) return;
      if (!V.isValidProductQuantity(DOM.getProduct().quantity)) return;

      DB.save(STORAGE.INVENTORY.NAME, DOM.getProduct());

      this.render();
      this.renderProductPurchaseManager();
    });
  }

  renderProductPurchaseManager() {
    DOM.showIntentoryToPurchaseProduct();
    getAllPurchaseButton();
  }
}
