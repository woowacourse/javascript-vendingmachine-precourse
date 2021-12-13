import { ALERT, PRODUCT_PURCHASE } from '../constants.js';
import { checkPurchaseCoin } from './validators/checkInput.js';
import ProductPurchase from '../elements/ProductPurchase.js';

export default class ProductPurchaseUtil {
  constructor() {
    this.productPurchase = new ProductPurchase();
    this.coinAmount = 0;
    this.purchaseCoin = 0;
    this.addPurchaseCoin();
    this.purchaseBtn();
  }

  addPurchaseCoin() {
    this.productPurchase.submit.addEventListener('click', e => {
      e.preventDefault();
      console.log('submit');
      if (this.getPurchaseCoin(this.productPurchase.input)) {
        console.log(this.purchaseCoin);
        this.setCoinAmount(this.purchaseCoin);
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
    this.productPurchase.amount.innerHTML = PRODUCT_PURCHASE.COIN_STORAGE + this.coinAmount;
  }

  purchaseBtn() {
    const btn = document.querySelector('.purchase-button').dataset.ProductName;
    console.log(btn);
  }
}
