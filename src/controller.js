/* eslint-disable default-case */
import VendingModel from './model.js';
import * as $ from './util/dom.js';
import {
  ERROR_MESSAGE,
  CHARGING_UNIT_ARRAY,
  NUM_500,
  NUM_100,
  NUM_50,
  NUM_10,
  ZERO,
  KEY,
  SELECTOR,
} from './util/constants.js';
import { checkPrice, checkMoney } from './util/helper.js';

export default class VendingController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  app() {
    this.view.renderInApp('afterbegin', $.tabMenus);
    this.view.renderInApp('beforeend', $.tab1);
    this.view.showTab(SELECTOR.tab1);
    this.view.renderInApp('beforeend', $.tab2);
    this.view.renderInApp('beforeend', $.tab3);
    this.loadTab1Data();
    this.addAllEventListener();
  }

  loadTab1Data() {
    this.model._productObj = JSON.parse(VendingModel.getLocalStorage(KEY.productList))
      ? JSON.parse(VendingModel.getLocalStorage(KEY.productList))
      : this.model.productObj;
    for (const name in this.model.productObj) {
      if (Object.hasOwnProperty.call(this.model.productObj, name))
        this.makeTableOfTab1(name, this.model.productObj[name].price, this.model.productObj[name].quantity        );
    }
  }

  loadTab2Data() {
    this.model.chargedMoney = VendingModel.getLocalStorage(KEY.chargedMoney)
      ? parseInt(VendingModel.getLocalStorage(KEY.chargedMoney), 10)
      : this.model.chargedMoney;
    this.view.renderValueInSpot($.vendingMachineChargeAmount(), this.model.chargedMoney);
    this.model._coinObj = JSON.parse(VendingModel.getLocalStorage(KEY.chargedCoins))
      ? JSON.parse(VendingModel.getLocalStorage(KEY.chargedCoins))
      : this.model._coinObj;
    for (const coin in this.model.coinObj) {
      if (Object.hasOwnProperty.call(this.model.coinObj, coin))
        this.makeTableOfTab2();
    }
  }

  loadTab3Data() {
    this.model._insertedMoney = VendingModel.getLocalStorage(KEY.insertedMoney)
      ? parseInt(VendingModel.getLocalStorage(KEY.insertedMoney), 10)
      : this.model._insertedMoney;
    this.view.renderValueInSpot($.insertedAmount(), this.model.insertedMoney);
    for (const name in this.model.productObj) {
      if (Object.hasOwnProperty.call(this.model.productObj, name))
        this.makeBuyingTableOfTab3(name, this.model.productObj[name].price, this.model.productObj[name].quantity);
    }
  }

  switchTab(tab) {
    this.view.hideTab();
    this.view.showTab(tab);
  }

  addAllEventListener() {
    document.getElementById(SELECTOR.productAddMenu).addEventListener('click', () => this.loadTab1());
    document.getElementById(SELECTOR.vendingMachineManageMenu).addEventListener('click', () => this.loadTab2());
    document.getElementById(SELECTOR.productPurchaseMenu).addEventListener('click', () => this.loadTab3());
    document.getElementById(SELECTOR.productAddButton).addEventListener('click', e => this.addProduct.call(this, e));
    document.getElementById(SELECTOR.vendingMachineChargeButton).addEventListener('click', e => this.chargeMoney.call(this, e));
    document.getElementById(SELECTOR.chargeButton).addEventListener('click', e => this.insertMoney.call(this, e));
    document.getElementById(SELECTOR.coinReturnButton).addEventListener('click', e => this.giveChanges.call(this, e));
  }

  loadTab1() {
    this.view.clearTable($.tbodyOfTab1());
    this.loadTab1Data();
    this.switchTab(SELECTOR.tab1);
  }

  loadTab2() {
    this.loadTab2Data();
    this.switchTab(SELECTOR.tab2);
  }

  loadTab3() {
    this.view.clearTable($.tbodyOfTab3());
    this.loadTab3Data();
    document.querySelectorAll(SELECTOR.purchaseButton).
      forEach(button => button.addEventListener('click', e => this.purchaseProduct.call(this, e)));
    this.switchTab(SELECTOR.tab3);
  }

  makeTableOfTab1(name, price, quantity) {
    const newRowOfTab1 = () => $.createTbodyOfTab1(name, price, quantity);
    this.view.addTableRow($.tbodyOfTab1(), newRowOfTab1());
  }

  addProduct(e) {
    e.preventDefault();
    const name = $.productNameInput();
    const price = $.productPriceInput();
    const quantity = $.productQuantityInput();
    if (!this.checkProductAllThings(name, price, quantity)) return false;
    this.makeTableOfTab1(name, price, quantity);
    this.model.productObj = { name, price, quantity };
    VendingModel.setLocalStorage(KEY.productList, this.model.productObj);
  }

  checkProductAllThings(name, price, quantity) {
    if (!name) {
      this.view.alertMessage(ERROR_MESSAGE.noName);
      return false;
    }
    if (!this.checkName(name)) {
      this.view.alertMessage(ERROR_MESSAGE.sameName);
      return false;
    }
    if (!checkPrice(price)) {
      this.view.alertMessage(ERROR_MESSAGE.basePrice);
      return false;
    }
    if (!quantity || quantity < ZERO) {
      this.view.alertMessage(ERROR_MESSAGE.baseQuantity);
      return false;
    }
    return true;
  }

  checkName(name) {
    return Object.keys(this.model.productObj).indexOf(name);
  }

  chargeMoney(e) {
    e.preventDefault();
    const money = $.chargedMoney();
    if (!checkMoney(money)) {
      this.view.alertMessage(ERROR_MESSAGE.baseInsertingMoney);
      return false;
    }
    this.view.renderValueInSpot($.vendingMachineChargeAmount(), this.model.chargedMoney);
    this.saveRandomCoin(money);
    this.calculateChargedMoney();
    this.makeTableOfTab2();
  }

  calculateChargedMoney() {
    const { coinObj } = this.model;
    const chargedMoney =
      coinObj.coin500 * NUM_500 +
      coinObj.coin100 * NUM_100 +
      coinObj.coin50 * NUM_50 +
      coinObj.coin10 * NUM_10;
    this.model.chargedMoney = chargedMoney;
    VendingModel.setLocalStorage(KEY.chargedMoney, this.model.chargedMoney);
    this.view.renderValueInSpot($.vendingMachineChargeAmount(), this.model.chargedMoney);
  }

  saveRandomCoin(money) {
    let changes = ZERO;
    while (changes !== money) {
      const coin = MissionUtils.Random.pickNumberInList(CHARGING_UNIT_ARRAY);
      if (changes + coin <= money) {
        changes += coin;
        this.saveCoins(coin);
      }
    }
    VendingModel.setLocalStorage(KEY.chargedCoins, this.model.coinObj);
  }

  saveCoins(coin) {
    switch (coin) {
      case NUM_500: this.model.coinObj = {coin500: this.model._coinObj.coin500++};
        break;
      case NUM_100: this.model.coinObj = {coin100: this.model._coinObj.coin100++};
        break;
      case NUM_50: this.model.coinObj = {coin50: this.model._coinObj.coin50++};
        break;
      case NUM_10: this.model.coinObj = {coin10: this.model._coinObj.coin10++};
        break;
    }
  }

  makeTableOfTab2() {
    this.view.renderValueInSpot($.vendingMachineCoin500(), `${this.model.coinObj.coin500}개`);
    this.view.renderValueInSpot($.vendingMachineCoin100(), `${this.model.coinObj.coin100}개`);
    this.view.renderValueInSpot($.vendingMachineCoin50(), `${this.model.coinObj.coin50}개`);
    this.view.renderValueInSpot($.vendingMachineCoin10(), `${this.model.coinObj.coin10}개`);
  }

  insertMoney(e) {
    e.preventDefault();
    if (!checkMoney($.insertedMoney())) {
      this.view.alertMessage(ERROR_MESSAGE.baseInsertingMoney);
      return false;
    }
    this.model.insertedMoney += $.insertedMoney();
    this.setInsertedMoney();
  }

  setInsertedMoney() {
    VendingModel.setLocalStorage(KEY.insertedMoney, this.model.insertedMoney);
    this.view.renderValueInSpot($.insertedAmount(), this.model.insertedMoney);
  }

  makeBuyingTableOfTab3(name, price, quantity) {
    const newRowOfTab3 = () => $.createTbodyOfTab3(name, price, quantity);
    this.view.addTableRow($.tbodyOfTab3(), newRowOfTab3());
  }

  purchaseProduct(e) {
    const target = e.target.parentElement.parentElement;
    const name = target.childNodes[1].dataset.productName;
    const price = target.childNodes[3].dataset.productPrice;
    const quantity = target.childNodes[5].dataset.productQuantity;
    if (!this.checkPurchaseProduct(price, quantity)) return false;
    this.model.insertedMoney -= price;
    this.setInsertedMoney();
    target.childNodes[5].dataset.productQuantity--;
    target.childNodes[5].innerText--;
    this.model.productObj[name].quantity--;
    VendingModel.setLocalStorage(KEY.productList, this.model.productObj);
  }

  checkPurchaseProduct(price, quantity) {
    if (this.model.insertedMoney - price < ZERO) {
      this.view.alertMessage(ERROR_MESSAGE.notEnoughMoney);
      return false;
    }
    if (quantity - 1 < ZERO) {
      this.view.alertMessage(ERROR_MESSAGE.soldOut);
      return false;
    }
    return true;
  }

  giveChanges(e) {
    e.preventDefault();
    const changes = this.model.insertedMoney;
    this.makeChangesTableOfTab3(changes);
    this.model.insertedMoney = ZERO;
    this.setInsertedMoney();
    this.calculateChargedMoney();
  }

  makeChangesTableOfTab3(changes) {
    this.model._coinObj = JSON.parse(
      VendingModel.getLocalStorage(KEY.chargedCoins)
    )
      ? JSON.parse(VendingModel.getLocalStorage(KEY.chargedCoins))
      : this.model._coinObj;
    const coin500 = this.calculateCoin500(changes);
    const coin100 = this.calculateCoin100(changes, coin500);
    const coin50 = this.calculateCoin50(changes, coin500, coin100);
    this.calculateCoin10(changes, coin500, coin100, coin50);
    VendingModel.setLocalStorage(KEY.chargedCoins, this.model.coinObj);
  }

  calculateCoin500(changes) {
    let coin500 = Math.floor(changes / NUM_500);
    if (this.model.coinObj.coin500 - coin500 >= ZERO) {
      this.model.coinObj.coin500 -= coin500;
      this.view.renderValueInSpot($.coin500quality(), `${coin500}개`);
    } else {
      coin500 = this.model.coinObj.coin500;
      this.view.renderValueInSpot($.coin500quality(), `${coin500}개`);
      this.model.coinObj.coin500 = ZERO;
    }
    return coin500;
  }

  calculateCoin100(changes, coin500) {
    let coin100 = Math.floor((changes - coin500 * NUM_500) / NUM_100);
    if (this.model.coinObj.coin100 - coin100 >= ZERO) {
      this.model.coinObj.coin100 -= coin100;
      this.view.renderValueInSpot($.coin100quality(), `${coin100}개`);
    } else {
      coin100 = this.model.coinObj.coin100;
      this.view.renderValueInSpot($.coin100quality(), `${coin100}개`);
      this.model.coinObj.coin100 = ZERO;
    }
    return coin100;
  }

  calculateCoin50(changes, coin500, coin100) {
    let coin50 = Math.floor(
      (changes - coin500 * NUM_500 - coin100 * NUM_100) / NUM_50
    );
    if (this.model.coinObj.coin50 - coin50 >= ZERO) {
      this.model.coinObj.coin50 -= coin50;
      this.view.renderValueInSpot($.coin50quality(), `${coin50}개`);
    } else {
      coin50 = this.model.coinObj.coin50;
      this.view.renderValueInSpot($.coin50quality(), `${coin50}개`);
      this.model.coinObj.coin50 = ZERO;
    }
    return coin50;
  }

  calculateCoin10(changes, coin500, coin100, coin50) {
    let coin10 = Math.floor(
      (changes - coin500 * NUM_500 - coin100 * NUM_100 - coin50 * NUM_50) /
        NUM_10
    );
    if (this.model.coinObj.coin10 - coin10 >= ZERO) {
      this.model.coinObj.coin10 -= coin10;
      this.view.renderValueInSpot($.coin10quality(), `${coin10}개`);
    } else {
      coin10 = this.model.coinObj.coin10;
      this.view.renderValueInSpot($.coin10quality(), `${coin10}개`);
      this.model.coinObj.coin10 = ZERO;
    }
  }
}
