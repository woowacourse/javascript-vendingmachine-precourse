import { $ } from '../../utils/DOMhelper.js';
import { purchaseTabTemplate } from '../template.js';

export default class PurchaseView {
  init() {
    this.$main = $('main');
  }

  renderPurchaseTab(products) {
    this.$main.innerHTML = purchaseTabTemplate(products);
  }

  selectPurchaseTabDOM() {
    this.$chargeInput = $('#charge-input');
    this.$chargeInputForm = $('#charge-input-form');
    this.$inputChargeAmount = $('#charge-amount');
    this.$coinReturnButton = $('#coin-return-button');
    this.$purchaseItem = $('.product-purchase-item');
  }
}
