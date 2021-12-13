import { ALERT, PRODUCT_PURCHASE } from '../constants.js';
import { checkPurchaseCoin } from './validators/checkInput.js';
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
    this.addPurchaseCoin();
    this.addReturnCoin();
    this.getCoin();
  }

  getCoin() {
    this.coinAmount = Number(this.productPurchase.amount.dataset.amount);
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
    this.renderCoinAmount(this.coinAmount);
    this.start = true;
  }

  renderCoinAmount(coinAmount) {
    this.productPurchase.amount.innerHTML = PRODUCT_PURCHASE.COIN_STORAGE + coinAmount;
    this.productPurchase.amount.setAttribute('data-amount', coinAmount);
  }

  renderCoinTable(arr) {
    this.productPurchase.coin500.innerHTML = arr[0] + PRODUCT_PURCHASE.COIN_UNIT;
    this.productPurchase.coin100.innerHTML = arr[1] + PRODUCT_PURCHASE.COIN_UNIT;
    this.productPurchase.coin50.innerHTML = arr[2] + PRODUCT_PURCHASE.COIN_UNIT;
    this.productPurchase.coin10.innerHTML = arr[3] + PRODUCT_PURCHASE.COIN_UNIT;
  }

  addReturnCoin() {
    this.productPurchase.returnBtn.addEventListener('click', e => {
      e.preventDefault();
      this.getCoin();
      console.log(this.machineUtil.originCoin);
      console.log(this.coinAmount);
      const returnVal = returnCoin(this.machineUtil.originCoin, this.coinAmount);
      this.renderCoinTable(returnVal.arr);
      this.machineUtil.setCoinTable(this.reverseArr(returnVal.arr));
      this.machineUtil.setCoinAmount(-(this.coinAmount - returnVal.coin));
      this.renderCoinAmount(returnVal.coin);
    });
  }

  reverseArr(arr) {
    arr.forEach((val, idx) => {
      val *= -1;
      arr[idx] = val;
    });
    console.log(arr);
    return arr;
  }
}
