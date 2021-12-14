import $ from '../util/domSelector.js';
import { HEADER, CHANGE_CHARGE, PRODUCT_PURCHASE } from '../constants/selector.js';
import { COIN, NUMBER } from '../constants/constants.js';
import InputCoin from '../components/inputCoin.js';
import ChangeCoin from '../components/changeCoin.js';
import PurchaseList from '../components/purchaseList.js';
import { setLocalStorage, getLocalStorage } from '../store.js';

export default class PurchaseProduct {
  constructor() {
    this.initialize();
  }

  initialize() {
    $(`#${HEADER.CONTENT_CONTAINER}`).innerHTML = '';
    this.insertedCoin = this.getUserStore();
    this.productObjects = this.getProductStore();
    this.render();
  }

  mounted() {
    new InputCoin(this.insertedCoin);
    new PurchaseList(this.productObjects);
    new ChangeCoin();
  }

  getCoinStore() {
    return (
      getLocalStorage('coins') || {
        [COIN.NUMBER.COIN_500]: NUMBER.ZERO,
        [COIN.NUMBER.COIN_100]: NUMBER.ZERO,
        [COIN.NUMBER.COIN_50]: NUMBER.ZERO,
        [COIN.NUMBER.COIN_10]: NUMBER.ZERO,
      }
    );
  }

  setCoinStore(coinObject) {
    setLocalStorage('coins', coinObject);
    this.setCoin(coinObject);
  }

  getProductStore() {
    return getLocalStorage('products') || [];
  }

  setProductStore(newProductObject) {
    setLocalStorage('products', newProductObject);
    this.initialize();
  }

  getUserStore() {
    return (
      getLocalStorage('user') || {
        insertCoin: NUMBER.ZERO,
      }
    );
  }

  setUserStore(insertCoin) {
    setLocalStorage('user', {
      insertCoin: this.insertedCoin.insertCoin + Number(insertCoin),
    });
    this.initialize();
  }

  setCoin(coinObject) {
    $(`#${CHANGE_CHARGE.ID.COIN_500_QUANTITY}`).innerHTML = `${coinObject[COIN.NUMBER.COIN_500]}개`;
    $(`#${CHANGE_CHARGE.ID.COIN_100_QUANTITY}`).innerHTML = `${coinObject[COIN.NUMBER.COIN_100]}개`;
    $(`#${CHANGE_CHARGE.ID.COIN_50_QUANTITY}`).innerHTML = `${coinObject[COIN.NUMBER.COIN_50]}개`;
    $(`#${CHANGE_CHARGE.ID.COIN_10_QUANTITY}`).innerHTML = `${coinObject[COIN.NUMBER.COIN_10]}개`;
  }

  updateProduct(productName) {
    const clickedProductIndex = this.productObjects.findIndex(
      productObject => productObject.name === productName
    );
    this.productObjects[clickedProductIndex].quantity--;
    this.updateUser(-this.productObjects[clickedProductIndex].price);
    this.setProductStore(this.productObjects);
  }

  updateUser(price) {
    this.setUserStore(price);
  }

  insertCoinEvent() {
    $(`#${PRODUCT_PURCHASE.ID.CHARGE_BUTTON}`).addEventListener('click', () => {
      const insertCoin = $(`#${PRODUCT_PURCHASE.ID.CHARGE_INPUT}`).value;
      this.setUserStore(insertCoin);
    });
  }

  purchaseEvent() {
    const purchaseButtons = document.querySelectorAll(`.${PRODUCT_PURCHASE.CLASS.PURCHASE_BUTTON}`);
    purchaseButtons.forEach(purchaseButton => {
      purchaseButton.addEventListener('click', e => {
        this.updateProduct(e.path[NUMBER.SECOND].children[NUMBER.ZERO].dataset.productName);
      });
    });
  }

  coinChangeEvent() {
    $(`#${PRODUCT_PURCHASE.ID.RETURN_BUTTON}`).addEventListener('click', () => {});
  }

  setEvent() {
    this.insertCoinEvent();
    this.purchaseEvent();
    this.coinChangeEvent();
  }

  render() {
    this.mounted();
    this.setEvent();
  }
}
