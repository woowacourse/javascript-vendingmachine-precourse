import { $, siblings } from '../utils/DOM.js';
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
    this.$coinReturnButton;
    this.$coin500Quantity;
    this.$coin100Quantity;
    this.$coin50Quantity;
    this.$coin10Quantity;
    this.addElements();
  }

  setOnMoneySubmit(fn) {
    this.$insertButton.addEventListener('click', (e) => {
      e.preventDefault();
      const insertedMoney = Number(this.$insertInput.value);
      fn(insertedMoney);
    });
  }

  setOnBuyClick(fn) {
    this.$productPurchaseTable.addEventListener('click', (e) => {
      const $purchaseButton = e.target.closest('.purchase-button');
      if ($purchaseButton === null) {
        return;
      }
      const $purchaseButtonSiblings = siblings($purchaseButton);
      const productName = $purchaseButtonSiblings[0].innerText;
      const price = $purchaseButtonSiblings[1].innerText;
      e.preventDefault();
      fn(productName, price);
    });
  }

  setOnCoinReturnClick(fn) {
    this.$coinReturnButton.addEventListener('click', () => {
      fn();
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

  showChangeCoin(changeCoin) {
    this.$coin500Quantity.innerText = changeCoin[500] + '개';
    this.$coin100Quantity.innerText = changeCoin[100] + '개';
    this.$coin50Quantity.innerText = changeCoin[50] + '개';
    this.$coin10Quantity.innerText = changeCoin[10] + '개';
  }

  addElements() {
    this.$productBuySection.innerHTML = BUY_SECTION_TEMPLATE;
    this.$productPurchaseTable = $('#product-purchase-table');
    this.$insertInput = $('#charge-input');
    this.$insertButton = $('#charge-button');
    this.$totalInsertedMoney = $('#charge-amount');
    this.$coinReturnButton = $('#coin-return-button');
    this.$coin500Quantity = $('#coin-500-quantity');
    this.$coin100Quantity = $('#coin-100-quantity');
    this.$coin50Quantity = $('#coin-50-quantity');
    this.$coin10Quantity = $('#coin-10-quantity');
  }
}
