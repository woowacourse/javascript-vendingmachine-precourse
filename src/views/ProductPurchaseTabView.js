import productPurchaseTemplate from '../templates/product-purchase-template.js';
import { coinIndex } from '../utils/index.js';

export default class ProductPurchaseTabView {
  constructor() {
    this.contentContainer = document.querySelector('#content-container');
  }

  render(charge, products) {
    this.contentContainer.innerHTML = productPurchaseTemplate.main;
    this.chargeAmountElement = document.querySelector('#charge-amount');
    this.productPurchaseTableBody = document.querySelector('#product-purchase-table > tbody');
    this.updateChargeAmount(charge);
    this.updatePurchaseTable(products);
  }

  updateChargeAmount(charge) {
    this.chargeAmountElement.innerText = `${charge}원`;
  }

  updatePurchaseTable(products) {
    this.productPurchaseTableBody.innerHTML = '';
    products.forEach((product) => {
      this.productPurchaseTableBody.innerHTML += productPurchaseTemplate.tableItem(product);
    });
  }

  updateCoinReturnTable(coinQuantity) {
    document.querySelector('#coin-500-quantity').innerText = `${coinQuantity[coinIndex(500)]}개`;
    document.querySelector('#coin-100-quantity').innerText = `${coinQuantity[coinIndex(100)]}개`;
    document.querySelector('#coin-50-quantity').innerText = `${coinQuantity[coinIndex(50)]}개`;
    document.querySelector('#coin-10-quantity').innerText = `${coinQuantity[coinIndex(10)]}개`;
  }
}
