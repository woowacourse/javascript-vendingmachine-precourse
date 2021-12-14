import { ALERT, PRODUCT_PURCHASE } from '../constants.js';
import { checkPurchaseCoin, checkReturnCoin } from './validators/checkInput.js';
import ProductPurchase from '../elements/ProductPurchase.js';
import returnCoin from './returnCoin/returnCoin.js';
import VendingMachineUtil from './VendingMachineUtil.js';
import Storage from './localStorage/Storage.js';

export default class ProductPurchaseUtil {
  constructor() {
    this.productPurchase = new ProductPurchase();
    this.machineUtil = new VendingMachineUtil();
    this.storage = new Storage();
    this.purchaseCoin = 0;
    this.getCurrentCoin();
    this.addPurchaseCoin();
    this.addReturnCoin();
  }

  getCoin() {
    this.coinAmount = Number(this.productPurchase.amount.dataset.amount);
  }

  getCurrentCoin() {
    const current = this.storage.purchaseCoin;
    if (current.purchaseCoin == null) {
      this.getCoin();
      return;
    }
    this.coinAmount = current.purchaseCoin;
    this.renderCoinAmount(this.coinAmount);
  }

  getPurchaseCoin(input) {
    this.purchaseCoin = Number(input.value);
    if (!checkPurchaseCoin(this.purchaseCoin)) {
      alert(ALERT.WRONG_USER_CHARGE);
      return;
    }
    return this.purchaseCoin;
  }

  addPurchaseCoin() {
    this.productPurchase.submit.addEventListener('click', e => {
      e.preventDefault();
      if (this.getPurchaseCoin(this.productPurchase.input)) {
        this.updateCoinAmount(this.purchaseCoin);
      }
    });
  }

  updateCoinAmount(coin) {
    this.coinAmount += coin;
    this.storage.updatePurchaseCoin({ purchaseCoin: this.coinAmount });
    this.renderCoinAmount(this.coinAmount);
  }

  addReturnCoin() {
    this.productPurchase.returnBtn.addEventListener('click', e => {
      e.preventDefault();

      if (checkReturnCoin(this.machineUtil.coinAmount)) {
        const returnVal = returnCoin(this.machineUtil.originCoin, this.coinAmount);

        this.renderCoinTable(returnVal.arr);
        this.machineUtil.setCoinTable(this.reverseArr(returnVal.arr));
        this.machineUtil.setCoinAmount(-(this.coinAmount - returnVal.coin));
        this.renderCoinAmount(returnVal.coin);
        this.storage.updatePurchaseCoin({ purchaseCoin: returnVal.coin });
        this.machineUtil.setLocalStorage(this.machineUtil.originCoin, this.machineUtil.coinAmount);
      }
    });
  }

  renderCoinAmount(coinAmount) {
    this.productPurchase.amount.innerHTML = coinAmount;
    this.productPurchase.amount.setAttribute('data-amount', coinAmount);
  }

  renderCoinTable(arr) {
    this.productPurchase.coin500.innerHTML = arr[0] + PRODUCT_PURCHASE.COIN_UNIT;
    this.productPurchase.coin100.innerHTML = arr[1] + PRODUCT_PURCHASE.COIN_UNIT;
    this.productPurchase.coin50.innerHTML = arr[2] + PRODUCT_PURCHASE.COIN_UNIT;
    this.productPurchase.coin10.innerHTML = arr[3] + PRODUCT_PURCHASE.COIN_UNIT;
  }

  reverseArr(arr) {
    arr.forEach((val, idx) => {
      val *= -1;
      arr[idx] = val;
    });
    return arr;
  }
}
