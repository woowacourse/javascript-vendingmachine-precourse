import Coin from '../Coin/Coin.js';
import CoinInputCheck from '../VendingMachineManage/CoinInputCheck.js';
import Product from '../Product/Product.js';
import ProductPurcahseTemplate from './productPurchaseTemplate.js';

export default class ProductPurchase {
  constructor() {
    const productPurchaseTemplate = new ProductPurcahseTemplate();
    this.product = new Product();
    this.coin = new Coin();
    this.connectEvent();
  }

  connectEvent() {
    document.getElementById('charge-button').onclick =
      this.submitChargeInput.bind(this);
    const purchaseButton = document.getElementsByClassName('purchase-button');
    if (purchaseButton != null) {
      this.connectPurchaseEvent(purchaseButton);
    }
    document.getElementById('coin-return-button').onclick =
      this.coinReturn.bind(this);
  }

  connectPurchaseEvent(purchaseButton) {
    for (let i = 0; i < purchaseButton.length; i += 1) {
      purchaseButton[i].addEventListener('click', (e) =>
        this.purchaseProduct(e, i)
      );
    }
  }

  submitChargeInput(e) {
    e.preventDefault();
    const inputCharge = document.getElementById('charge-input').value;
    if (CoinInputCheck(inputCharge)) {
      this.chargeInsert(Number(inputCharge));
    }
  }

  chargeInsert(inputCharge) {
    const totalChageCost = this.product.additionalInputCharge(inputCharge);
    const chargeAmount = document.getElementById('charge-amount');
    chargeAmount.textContent = totalChageCost;
  }

  makeProductStatusTable() {
    const productStatusTableBody = document.getElementById(
      'product-status-table-body'
    );
    productStatusTableBody.innerHTML = '';
    const productStatus = this.product.getProduct();
    productStatus.forEach((product) => {
      const productClass = document.createElement('tr');
      productClass.className = 'product-purchase-item';
      productClass.innerHTML = `<td class="product-purchase-name" data-product-name=${product.name}>${product.name}</td><td class="product-purchase-price" data-product-price=${product.price}>${product.price}</td><td class="product-purchase-quantity" data-product-quantity=${product.quantity}>${product.quantity}</td><td><button type="button" class="purchase-button">구입하기</button></td>`;
      productStatusTableBody.append(productClass);
    });
  }

  purchaseProduct(e, index) {
    this.product.purchaseProduct(index);
    this.update();
  }

  coinReturn(e) {
    e.preventDefault();
    const chargeCost = this.product.getChargeCost();
    const returnCoinList = this.coin.returnCoin(chargeCost);
    this.coin.getCoinList().forEach((coinValue) => {
      document.getElementById(
        `coin-${coinValue}-quantity`
      ).innerHTML = `${returnCoinList[coinValue]}개`;
    });
    this.product.setChargeCost(returnCoinList['charge']);
    this.chargeInsert(0);
  }

  update() {
    this.chargeInsert(0);
    this.makeProductStatusTable();
    this.connectEvent();
  }

  updateScreen() {
    this.update();
    return document.getElementById('product-purchase-screen');
  }
}
