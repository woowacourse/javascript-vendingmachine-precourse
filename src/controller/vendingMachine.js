import { $, $$ } from '../utils/domElementTool.js';
import { COIN_MENU, PRODUCT_MENU, PURCHASE_MENU } from '../data/selector.js';
import { getErrorMessage, getNotValidMoneyErrorMessage, getHasNoReturnErrorMessage } from './getErrorMessage.js';
import { showAlert } from '../utils/showAlert.js';
import { setLocalStorage, getLocalStorage } from '../utils/localStorage.js';
import TabMenuController from './tabMenu.js';
import ProductManager from '../model/product.js';
import VendingMachineView from '../view/vendingMachineView.js';
import CoinStatus from '../model/coinStatus.js';
import ChangeCalculator from '../utils/changeCalculator.js';

export default class VendingMachine {
  constructor() {
    this.init();
  }

  init() {
    const data = getLocalStorage();
    this.view = new VendingMachineView(data[0]);
    this.tabMenu = new TabMenuController();
    this.createModels(data);
    this.initPage();
    this.setEvent();
  }

  createModels(data) {
    this.products = new ProductManager(data[0]);
    this.coin = new CoinStatus(data[1], data[2]);
  }

  initPage() {
    this.view.renderProducts(PRODUCT_MENU.TABLE_SELECTOR.TABLE, this.tabMenu.productMenu.productItemTemplate);
    this.view.renderProducts(PURCHASE_MENU.PRODUCT_TABLE_SELECTOR.TABLE, this.tabMenu.purchaseMenu.purchaseItemTemplate);
    this.view.renderChargeAmount(COIN_MENU.INPUT_SELECTOR.COIN_CHARGE_AMOUNT, this.coin.getAmount());
    this.view.renderChargeAmount(PURCHASE_MENU.INPUT_SELECTOR.PURCHASE_CHARGE_AMOUNT, this.coin.clientMoney);
    this.view.renderCoinStatus(COIN_MENU.TABLE_SELECTOR, this.coin.money);
  }

  setEvent() {
    $$('form').forEach(form => form.addEventListener('click', this.handleFormEvent.bind(this)));
    $(`#${PURCHASE_MENU.PRODUCT_TABLE_SELECTOR.TABLE}`).addEventListener('click', this.handlePurchaseEvent.bind(this));
    $(`#${PURCHASE_MENU.COIN_RETURN_BUTTON}`).addEventListener('click', this.handleReturnChangeEvent.bind(this));
  }

  handleFormEvent(e) {
    e.preventDefault();
    if (e.target.id === PRODUCT_MENU.INPUT_SELECTOR.PRODUCT_ADD_BUTTON) {
      this.addMenu();
    } else if (e.target.id === COIN_MENU.INPUT_SELECTOR.COIN_CHARGE_BUTTON) {
      this.chargeCoin();
    } else if (e.target.id === PURCHASE_MENU.INPUT_SELECTOR.PURCHASE_CHARGE_BUTTON) {
      this.clientChargeMoney();
    }

    setLocalStorage(this.products.products, this.coin.money, this.coin.clientMoney);
  }

  handlePurchaseEvent(e) {
    if (e.target.className === PURCHASE_MENU.PURCHASE_ITEM_BUTTON) {
      const name = e.target.parentNode.parentNode.childNodes[1].getAttribute(PURCHASE_MENU.DATASET.PRODUCT_NAME);
      const price = this.products.purchase(name);

      this.coin.clientMoney -= price;

      this.view.renderChargeAmount(PURCHASE_MENU.INPUT_SELECTOR.PURCHASE_CHARGE_AMOUNT, this.coin.clientMoney);
      this.view.renderProducts(PURCHASE_MENU.PRODUCT_TABLE_SELECTOR.TABLE, this.tabMenu.purchaseMenu.purchaseItemTemplate);
      this.view.renderProducts(PRODUCT_MENU.TABLE_SELECTOR.TABLE, this.tabMenu.productMenu.productItemTemplate);
      setLocalStorage(this.products.products, this.coin.money, this.coin.clientMoney);
    }
  }

  handleReturnChangeEvent() {
    this.changeModel = new ChangeCalculator(this.coin.money);
    const errorMessage = getHasNoReturnErrorMessage(this.coin.clientMoney);

    if (errorMessage) {
      showAlert(errorMessage);
      return;
    }

    this.coin.clientMoney = this.changeModel.returnChange(this.coin.clientMoney, this.coin.getAmount());

    this.setAfterReturnPage();
    setLocalStorage(this.products.products, this.coin.money, this.coin.clientMoney);
  }

  setAfterReturnPage() {
    this.view.renderCoinStatus(PURCHASE_MENU.RETURN_TABLE_SELECTOR, this.changeModel.change);
    this.view.renderCoinStatus(COIN_MENU.TABLE_SELECTOR, this.coin.money);
    this.view.renderChargeAmount(COIN_MENU.INPUT_SELECTOR.COIN_CHARGE_AMOUNT, this.coin.getAmount());
    this.view.renderChargeAmount(PURCHASE_MENU.INPUT_SELECTOR.PURCHASE_CHARGE_AMOUNT, this.coin.clientMoney);
  }

  submitProduct() {
    const name = $(`#${PRODUCT_MENU.INPUT_SELECTOR.PRODUCT_NAME_INPUT}`).value;
    const price = Number($(`#${PRODUCT_MENU.INPUT_SELECTOR.PRODUCT_PRICE_INPUT}`).value);
    const quantity = Number($(`#${PRODUCT_MENU.INPUT_SELECTOR.PRODUCT_QUANTITY_INPUT}`).value);
    const errorMessage = getErrorMessage(this.products.products, name, price);

    if (errorMessage) {
      showAlert(errorMessage);
      return;
    }

    this.products.add(name, price, quantity);
  }

  submitChargeInput(inputSelector, coin) {
    const money = $(`#${inputSelector}`).value;
    const errorMessage = getNotValidMoneyErrorMessage(money);

    if (errorMessage) {
      showAlert(errorMessage);
      return;
    }

    coin.putMoney(money);
  }

  addMenu() {
    this.submitProduct();
    this.view.renderProducts(PRODUCT_MENU.TABLE_SELECTOR.TABLE, this.tabMenu.productMenu.productItemTemplate);
    this.view.renderProducts(PURCHASE_MENU.PRODUCT_TABLE_SELECTOR.TABLE, this.tabMenu.purchaseMenu.purchaseItemTemplate);
  }

  chargeCoin() {
    this.submitChargeInput(COIN_MENU.INPUT_SELECTOR.COIN_CHARGE_INPUT, this.coin);
    this.view.renderChargeAmount(COIN_MENU.INPUT_SELECTOR.COIN_CHARGE_AMOUNT, this.coin.getAmount());
    this.view.renderCoinStatus(COIN_MENU.TABLE_SELECTOR, this.coin.money);
  }

  clientChargeMoney() {
    this.coin.clientMoney += Number($(`#${PURCHASE_MENU.INPUT_SELECTOR.PURCHASE_CHARGE_INPUT}`).value);
    this.view.renderChargeAmount(PURCHASE_MENU.INPUT_SELECTOR.PURCHASE_CHARGE_AMOUNT, this.coin.clientMoney);
  }
}
