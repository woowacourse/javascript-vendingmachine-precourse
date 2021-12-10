import { $ } from '../utils/DOM.js';
import {
  BUY_SECTION_TEMPLATE,
  printProductForBuyTemplate,
  PRODUCT_BUY_TEMPLATE,
} from '../utils/template.js';

export class BuyView {
  constructor() {
    this.$productBuySection = $('#product-buy-section');
    this.$productPurchaseTable;
    this.$insertInput;
    this.$insertButton;
    this.$totalInsertedMoney;
    this.addElements();
  }

  setOnMoneySubmit(fn) {
    this.$insertButton.addEventListener('click', (e) => {
      e.preventDefault();
      const insertedMoney = Number(this.$insertInput.value);
      fn(insertedMoney);
    });
  }

  showTotalInsertedMoney(totalInsertedMoney) {
    this.$totalInsertedMoney.innerText = totalInsertedMoney;
  }

  showProductForBuy(products) {
    let productRowHTML = PRODUCT_BUY_TEMPLATE;
    products.map((product) => (productRowHTML += printProductForBuyTemplate(product)));
    this.$productPurchaseTable.innerHTML = productRowHTML;
  }

  addElements() {
    this.$productBuySection.innerHTML = BUY_SECTION_TEMPLATE;
    this.$productPurchaseTable = $('#product-purchase-table');
    this.$insertInput = $('#charge-input');
    this.$insertButton = $('#charge-button');
    this.$totalInsertedMoney = $('#charge-amount');
  }
}
