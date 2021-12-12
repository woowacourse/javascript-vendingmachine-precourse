import TabView from './TabView.js';
import productPurchaseTemplate from '../templates/product-purchase-template.js';
import { coinIndex } from '../utils/index.js';
import { ID } from '../constants/selectors.js';

export default class ProductPurchaseTabView extends TabView {
  initialRender(charge, products) {
    this.contentContainer.innerHTML = productPurchaseTemplate.main;
    this.initElements();
    this.updateChargeAmount(charge);
    this.updatePurchaseTable(products);
  }

  initElements() {
    super.initElements();
    this.chargeAmountElement = document.getElementById(ID.PRODUCT_PURCHASE.CHARGE_AMOUNT);
    this.productPurchaseTableBody = document.getElementById(ID.PRODUCT_PURCHASE.TABLE).querySelector('tbody');
    this.coin500Quantity = document.getElementById(ID.COIN_RETURN.COIN_500_QUANTITY);
    this.coin100Quantity = document.getElementById(ID.COIN_RETURN.COIN_100_QUANTITY);
    this.coin50Quantity = document.getElementById(ID.COIN_RETURN.COIN_50_QUANTITY);
    this.coin10Quantity = document.getElementById(ID.COIN_RETURN.COIN_10_QUANTITY);
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
