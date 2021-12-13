import { ALERT, PRODUCT_PURCHASE, ZERO } from '../constants.js';
import { checkPurchaseCoin } from './validators/checkInput.js';
import ProductPurchase from '../elements/ProductPurchase.js';

export default class ProductPurchaseUtil {
  constructor() {
    this.productPurchase = new ProductPurchase();
    this.coinAmount = 0;
    this.purchaseCoin = 0;
    this.addPurchaseCoin();
  }

  addPurchaseCoin() {
    this.productPurchase.submit.addEventListener('click', e => {
      e.preventDefault();
      console.log('submit');
      if (this.getPurchaseCoin(this.productPurchase.input)) {
        console.log(this.purchaseCoin);
        this.setCoinAmount(this.purchaseCoin);
        this.purchaseBtn();
      }
    });
  }

  getPurchaseCoin(input) {
    this.purchaseCoin = Number(input.value);
    if (!checkPurchaseCoin(this.purchaseCoin)) {
      alert(ALERT.WRONG_USER_CHARGE);
      return;
    }
    return this.purchaseCoin;
  }

  setCoinAmount(coin) {
    this.coinAmount += coin;
    this.renderCoinAmount(this.coinAmount);
  }

  renderCoinAmount(coinAmount) {
    this.productPurchase.amount.innerHTML = PRODUCT_PURCHASE.COIN_STORAGE + coinAmount;
  }

  purchaseBtn() {
    const btn = this.productPurchase.tableBody.querySelectorAll('.purchase-button');
    console.log(btn);
    for (let b of btn) {
      b.addEventListener('click', e => {
        e.preventDefault();
        console.log('물품 구매');
        this.getPurchaseProduct(b);
      });
    }
  }

  getPurchaseProduct(b) {
    const productTr = b.parentNode;
    console.log(productTr);
    const price = productTr.querySelector('.product-purchase-price').dataset.productPrice;
    const quantityElement = productTr.querySelector('.product-purchase-quantity');
    const quantity = quantityElement.dataset.productQuantity;
    this.checkPurchase(quantityElement, price, quantity);
  }

  checkPurchase(element, price, quantity) {
    if (this.checkPurchasePrice(price) && this.checkPurchaseQuantity(quantity)) {
      this.coinAmount -= price;
      this.renderCoinAmount(this.coinAmount);
      quantity -= 1;
      element.innerHTML = quantity;
      element.dataset.productQuantity = quantity;
    }
  }

  checkPurchasePrice(price) {
    if (this.coinAmount < price) {
      alert(ALERT.NO_PRICE);
      return;
    }

    return true;
  }

  checkPurchaseQuantity(quantity) {
    if (quantity == ZERO) {
      alert(ALERT.NO_QUANTITY);
      return;
    }

    return true;
  }
}
