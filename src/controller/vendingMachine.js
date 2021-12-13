import { $, $$ } from '../utils/domElementTool.js';
import { COIN_MENU, PRODUCT_MENU, PURCHASE_MENU } from '../data/elementData.js';
import { getErrorMessage, getNotValidMoneyErrorMessage, getHasNoReturnErrorMessage } from './getErrorMessage.js';
import { showAlert } from '../utils/showAlert.js';
import { setLocalStorage, getLocalStorage } from '../utils/localStorage.js';
import TabMenuController from './tabMenuController.js';
import ProductManager from '../model/product.js';
import VendingMachineView from '../vendingMachineView.js';
import MoneyStatus from '../model/moneyStatus.js';
import changeCalculator from '../utils/changeCalculator.js';

export default class VendingMachine {
  constructor() {
    this.init();
  }

  init() {
    const data = getLocalStorage();
    this.view = new VendingMachineView(data[0]);
    this.tabMenu = new TabMenuController();
    this.createModels(data);
    this.renderInitPage();
    this.setEvent();
  }

  createModels(data) {
    this.productModel = new ProductManager(data[0]);
    this.coinModel = new MoneyStatus(data[1], data[2]);
  }

  renderInitPage() {
    this.view.renderProducts(PRODUCT_MENU.TABLE_SELECTOR.TABLE, this.tabMenu.productMenu.productItemTemplate);
    this.view.renderProducts(PURCHASE_MENU.PRODUCT_TABLE_SELECTOR.TABLE, this.tabMenu.purchaseMenu.purchaseItemTemplate);
    this.view.renderChargeAmount(COIN_MENU.INPUT_SELECTOR.COIN_CHARGE_AMOUNT, this.coinModel.getAmount());
    this.view.renderChargeAmount(PURCHASE_MENU.INPUT_SELECTOR.PURCHASE_CHARGE_AMOUNT, this.coinModel.clientMoney);
    this.view.renderCoinStatus(COIN_MENU.TABLE_SELECTOR, this.coinModel.money);
  }

  setEvent() {
    $$('form').forEach(form => form.addEventListener('click', this.handleFormEvent.bind(this)));
    $(`#${PURCHASE_MENU.PRODUCT_TABLE_SELECTOR.TABLE}`).addEventListener('click', this.handlePurchaseEvent.bind(this));
    $(`#${PURCHASE_MENU.COIN_RETURN_BUTTON}`).addEventListener('click', this.handleReturnChangeEvent.bind(this));
  }

  handleFormEvent(e) {
    e.preventDefault();
    if (e.target.id === PRODUCT_MENU.INPUT_SELECTOR.PRODUCT_ADD_BUTTON) {
      this.handleAddMenu();
    } else if (e.target.id === COIN_MENU.INPUT_SELECTOR.COIN_CHARGE_BUTTON) {
      this.handleChargeCoin();
    } else if (e.target.id === PURCHASE_MENU.INPUT_SELECTOR.PURCHASE_CHARGE_BUTTON) {
      this.handleClientChargeMoney();
    }

    setLocalStorage(this.productModel.products, this.coinModel.money, this.coinModel.clientMoney);
  }

  handlePurchaseEvent(e) {
    if (e.target.className === PURCHASE_MENU.PURCHASE_ITEM_BUTTON) {
      const name = e.target.parentNode.parentNode.childNodes[1].getAttribute(PURCHASE_MENU.DATASET.PRODUCT_NAME);
      const price = this.productModel.purchaseProduct(name);

      this.coinModel.clientMoney -= price;

      this.view.renderChargeAmount(PURCHASE_MENU.INPUT_SELECTOR.PURCHASE_CHARGE_AMOUNT, this.coinModel.clientMoney);
      this.view.renderProducts(PURCHASE_MENU.PRODUCT_TABLE_SELECTOR.TABLE, this.tabMenu.purchaseMenu.purchaseItemTemplate);
      this.view.renderProducts(PRODUCT_MENU.TABLE_SELECTOR.TABLE, this.tabMenu.productMenu.productItemTemplate);
      setLocalStorage(this.productModel.products, this.coinModel.money, this.coinModel.clientMoney);
    }
  }

  handleReturnChangeEvent() {
    this.changeModel = new changeCalculator(this.coinModel.money);
    const errorMessage = getHasNoReturnErrorMessage(this.coinModel.clientMoney);

    if (errorMessage) {
      showAlert(errorMessage);
      return;
    }

    const balance = this.changeModel.returnChange(this.coinModel.clientMoney, this.coinModel.getAmount());
    this.coinModel.clientMoney = balance;

    this.renderAfterReturnStatus();
    setLocalStorage(this.productModel.products, this.coinModel.money, this.coinModel.clientMoney);
  }

  renderAfterReturnStatus() {
    this.view.renderCoinStatus(PURCHASE_MENU.RETURN_TABLE_SELECTOR, this.changeModel.change);
    this.view.renderCoinStatus(COIN_MENU.TABLE_SELECTOR, this.coinModel.money);
    this.view.renderChargeAmount(COIN_MENU.INPUT_SELECTOR.COIN_CHARGE_AMOUNT, this.coinModel.getAmount());
    this.view.renderChargeAmount(PURCHASE_MENU.INPUT_SELECTOR.PURCHASE_CHARGE_AMOUNT, this.coinModel.clientMoney);
  }

  submitProduct() {
    const name = $(`#${PRODUCT_MENU.INPUT_SELECTOR.PRODUCT_NAME_INPUT}`).value;
    const price = Number($(`#${PRODUCT_MENU.INPUT_SELECTOR.PRODUCT_PRICE_INPUT}`).value);
    const quantity = Number($(`#${PRODUCT_MENU.INPUT_SELECTOR.PRODUCT_QUANTITY_INPUT}`).value);
    const errorMessage = getErrorMessage(this.productModel.products, name, price);

    if (errorMessage) {
      showAlert(errorMessage);
      return;
    }

    this.productModel.addProduct(name, price, quantity);
  }

  submitChargeInput(inputSelector, model) {
    const money = $(`#${inputSelector}`).value;
    const errorMessage = getNotValidMoneyErrorMessage(money);

    if (errorMessage) {
      showAlert(errorMessage);
      return;
    }

    model.putMoney(money);
  }

  handleAddMenu() {
    this.submitProduct();
    this.view.renderProducts(PRODUCT_MENU.TABLE_SELECTOR.TABLE, this.tabMenu.productMenu.productItemTemplate);
    this.view.renderProducts(PURCHASE_MENU.PRODUCT_TABLE_SELECTOR.TABLE, this.tabMenu.purchaseMenu.purchaseItemTemplate);
  }

  handleChargeCoin() {
    this.submitChargeInput(COIN_MENU.INPUT_SELECTOR.COIN_CHARGE_INPUT, this.coinModel);
    this.view.renderChargeAmount(COIN_MENU.INPUT_SELECTOR.COIN_CHARGE_AMOUNT, this.coinModel.getAmount());
    this.view.renderCoinStatus(COIN_MENU.TABLE_SELECTOR, this.coinModel.money);
  }

  handleClientChargeMoney() {
    this.coinModel.clientMoney += Number($(`#${PURCHASE_MENU.INPUT_SELECTOR.PURCHASE_CHARGE_INPUT}`).value);
    this.view.renderChargeAmount(PURCHASE_MENU.INPUT_SELECTOR.PURCHASE_CHARGE_AMOUNT, this.coinModel.clientMoney);
  }
}
