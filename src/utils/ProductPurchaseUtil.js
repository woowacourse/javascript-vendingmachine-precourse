import { ALERT, PRODUCT_PURCHASE } from '../constants.js';
import { checkPurchaseCoin } from './validators/checkInput.js';
import ProductPurchase from '../elements/ProductPurchase.js';

export default class ProductPurchaseUtil {
  constructor() {
    this.productPurchase = new ProductPurchase();
    this.start = false;
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
        this.start = true;
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
    if (this.start) {
      this.coinAmount = Number(this.productPurchase.amount.dataset.amount);
      console.log(this.coinAmount);
    }
    this.coinAmount += coin;
    this.renderCoinAmount(this.coinAmount);
  }

  renderCoinAmount(coinAmount) {
    this.productPurchase.amount.innerHTML = PRODUCT_PURCHASE.COIN_STORAGE + coinAmount;
    this.productPurchase.amount.setAttribute('data-amount', coinAmount);
  }
}
