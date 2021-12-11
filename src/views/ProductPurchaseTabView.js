import TabView from './TabView.js';
import productPurchaseTemplate from '../templates/product-purchase-template.js';
import { coinIndex } from '../utils/index.js';

export default class ProductPurchaseTabView extends TabView {
  initialRender(charge, products) {
    this.contentContainer.innerHTML = productPurchaseTemplate.main;
    this.initElements();
    this.updateChargeAmount(charge);
    this.updatePurchaseTable(products);
  }

  initElements() {
    super.initElements();
    this.chargeAmountElement = document.querySelector('#charge-amount');
    this.productPurchaseTableBody = document.querySelector('#product-purchase-table > tbody');
    this.coin500Quantity = document.querySelector('#coin-500-quantity');
    this.coin100Quantity = document.querySelector('#coin-100-quantity');
    this.coin50Quantity = document.querySelector('#coin-50-quantity');
    this.coin10Quantity = document.querySelector('#coin-10-quantity');
  }

  updateOnCharge(charge) {
    this.updateChargeAmount(charge);
    this.clearAllInput();
  }

  updateOnPurchase(charge, products) {
    this.updateChargeAmount(charge);
    this.updatePurchaseTable(products);
  }

  updateOnCoinReturn(charge, coinQuantity) {
    this.updateChargeAmount(charge);
    this.updateCoinReturnTable(coinQuantity);
  }

  updateChargeAmount(charge) {
    this.chargeAmountElement.innerText = charge;
  }

  updatePurchaseTable(products) {
    this.productPurchaseTableBody.innerHTML = '';
    products.forEach((product) => {
      this.productPurchaseTableBody.innerHTML += productPurchaseTemplate.tableItem(product);
    });
  }

  updateCoinReturnTable(coinQuantity) {
    this.coin500Quantity.innerText = `${coinQuantity[coinIndex(500)]}개`;
    this.coin100Quantity.innerText = `${coinQuantity[coinIndex(100)]}개`;
    this.coin50Quantity.innerText = `${coinQuantity[coinIndex(50)]}개`;
    this.coin10Quantity.innerText = `${coinQuantity[coinIndex(10)]}개`;
  }
}
