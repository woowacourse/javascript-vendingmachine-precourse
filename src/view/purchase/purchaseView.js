import { $, $$ } from '../../utils/DOMhelper.js';
import { purchaseTabTemplate } from '../template.js';
import { INDEX, STRING } from '../../constants/constants.js';

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
    this.$coin500Quantity = $('#coin-500-quantity');
    this.$coin100Quantity = $('#coin-100-quantity');
    this.$coin50Quantity = $('#coin-50-quantity');
    this.$coin10Quantity = $('#coin-10-quantity');
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

  renderReturnedCoins(returnedCoins) {
    returnedCoins.forEach((amount, idx) => {
      if (idx === INDEX.FIVE_HUNDRED) this.$coin500Quantity.innerText = `${amount}개`;
      if (idx === INDEX.HUNDRED) this.$coin100Quantity.innerText = `${amount}개`;
      if (idx === INDEX.FIFTY) this.$coin50Quantity.innerText = `${amount}개`;
      if (idx === INDEX.TEN) this.$coin10Quantity.innerText = `${amount}개`;
    });
  }
}
