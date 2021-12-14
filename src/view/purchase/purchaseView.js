import { $, $$ } from '../../utils/DOMhelper.js';
import { purchaseTabTemplate } from '../template.js';
import { STRING } from '../../constants/constants.js';

export default class PurchaseView {
  init() {
    this.$main = $('main');
  }

  renderPurchaseTab(products, inputChargeAmount) {
    this.$main.innerHTML = purchaseTabTemplate(products, inputChargeAmount);
  }

  selectPurchaseTabDOM() {
    this.$chargeInput = $('#charge-input');
    this.$chargeInputForm = $('#charge-input-form');
    this.$inputChargeAmount = $('#charge-amount');
    this.$coinReturnButton = $('#coin-return-button');
    this.$$purchaseItem = $$('.product-purchase-item');
  }

  renderInputChargeAmount(amount) {
    this.$inputChargeAmount.innerText = `${amount}원`;
  }

  selectProductTableRowDOM(target) {
    this.$productNameColumn = $('[data-product-name]', target.closest(STRING.TR));
    this.$productQuantityColumn = $('[data-product-quantity]', target.closest(STRING.TR));
    this.$productPriceColumn = $('[data-product-price]', target.closest(STRING.TR));
  }

  renderProductQuantity(changedQuantity) {
    this.$productQuantityColumn.innerText = changedQuantity;
    this.$productQuantityColumn.setAttribute('data-product-quantity', changedQuantity);
  }
}
