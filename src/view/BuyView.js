import { $ } from '../utils/DOM.js';
import { BUY_SECTION_TEMPLATE } from '../utils/template.js';

export class BuyView {
  constructor() {
    this.$productBuySection = $('#product-buy-section');
    this.addElements();
  }

  addElements() {
    this.$productBuySection.innerHTML = BUY_SECTION_TEMPLATE;
  }
}
