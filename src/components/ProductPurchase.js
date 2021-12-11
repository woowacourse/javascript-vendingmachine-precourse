import { $, ID } from '../utils/dom.js';
import { productPurchaseMenuTemplate } from '../utils/templates.js';

export default class ProductPurchase {
  constructor() {
    this.init();
  }

  init = () => {
    $(`#${ID.PAGE_CONTENT}`).innerHTML = productPurchaseMenuTemplate();
  };
}
