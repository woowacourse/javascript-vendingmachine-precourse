import { COIN_LIST, LOCAL_STORAGE_KEY } from './constants.js';

export default class Store {
  constructor() {
    this.storage = window.localStorage;
    this.checkProductList();
    this.checkChangeList();
    this.checkPuttedMoney();

    this.clickedTab = ''; // 탭 클릭 히스토리는 로컬 스토리지에서 관리하지 않는다. 앱이 재실행 되면 빈 문자열로 초기화한다.
  }

  checkProductList() {
    const productList = this.getProductList();
    if (!productList) this.setProductList([]);
  }

  addProduct(product) {
    const productList = this.getProductList();
    productList.push(product);
    this.setProductList(productList);
  }

  getProductList() {
    return JSON.parse(this.storage.getItem(LOCAL_STORAGE_KEY.PRODUCT_LIST));
  }

  setProductList(data) {
    this.storage.setItem(LOCAL_STORAGE_KEY.PRODUCT_LIST, JSON.stringify(data));
  }

  checkChangeList() {
    const changeList = this.getChangeList();
    const initialChangeList = {
      500: 0,
      100: 0,
      50: 0,
      10: 0,
    };
    if (!changeList) this.setChangeList(initialChangeList);
  }

  setChangeList(data) {
    return this.storage.setItem(LOCAL_STORAGE_KEY.CHANGE_LIST, JSON.stringify(data));
  }

  getChangeList() {
    return JSON.parse(this.storage.getItem(LOCAL_STORAGE_KEY.CHANGE_LIST));
  }

  getChangeListTotal() {
    const changeList = this.getChangeList();
    return (
      changeList[COIN_LIST.FIVE_HUNDRED] * 500 +
      changeList[COIN_LIST.ONE_HUNDRED] * 100 +
      changeList[COIN_LIST.FIFTY] * 50 +
      changeList[COIN_LIST.TEN] * 10
    );
  }

  chargeChanges(changeList) {
    const originalChangeList = this.getChangeList();

    originalChangeList[COIN_LIST.FIVE_HUNDRED] += parseInt(
      changeList[COIN_LIST.FIVE_HUNDRED],
    );
    originalChangeList[COIN_LIST.ONE_HUNDRED] += parseInt(
      changeList[COIN_LIST.ONE_HUNDRED],
    );
    originalChangeList[COIN_LIST.FIFTY] += parseInt(
      changeList[COIN_LIST.FIFTY],
    );
    originalChangeList[COIN_LIST.TEN] += parseInt(changeList[COIN_LIST.TEN]);

    this.setChangeList(originalChangeList);
  }

  checkPuttedMoney() {
    const puttedMoney = this.getPuttedMoney();
    const initialPuttedMoney = {
      inputMoney: 0,
      returnedCoins: {
        500: 0,
        100: 0,
        50: 0,
        10: 0,
      },
    };
    if (!puttedMoney) this.setPuttedMoney(initialPuttedMoney);
  }

  getPuttedMoney() {
    return JSON.parse(this.storage.getItem(LOCAL_STORAGE_KEY.PUTTED_MONEY));
  }

  setPuttedMoney(data) {
    return this.storage.setItem(LOCAL_STORAGE_KEY.PUTTED_MONEY, JSON.stringify(data));
  }

  substractProductQuantity({ name }) {
    const productList = this.getProductList();
    const index = productList.findIndex((product) => product.name === name);
    productList[index].quantity -= 1;
    this.setProductList(productList)
  }

  addPuttedMoney(money) {
    const puttedMoney = this.getPuttedMoney();
    puttedMoney.inputMoney = parseInt(puttedMoney.inputMoney) + money;
    this.setPuttedMoney(puttedMoney);
  }

  substractPuttedMoney(money) {
    const puttedMoney = this.getPuttedMoney();
    puttedMoney.inputMoney = parseInt(puttedMoney.inputMoney) - money;
    this.setPuttedMoney(puttedMoney);
  }

  returnExchanges(currentCharges, puttedMoney) {
    const coinKeys = Object.keys(currentCharges);

    let index = coinKeys.length - 1;

    while (puttedMoney.inputMoney !== 0) {
      if (index < 0) break;
      if (!currentCharges[coinKeys[index]]) {
        index -= 1;
        continue;
      }
      if (puttedMoney.inputMoney - coinKeys[index] >= 0) {
        puttedMoney.inputMoney -= coinKeys[index];
        currentCharges[coinKeys[index]] -= 1;
        puttedMoney.returnedCoins[coinKeys[index]] += 1;
      }
    }
    this.setPuttedMoney(puttedMoney);
    this.setChangeList(currentCharges);
  }
}
