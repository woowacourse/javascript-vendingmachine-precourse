import { $, $$ } from '../utils/domElementTool.js';
import { COIN_MENU, PRODUCT_MENU, PURCHASE_MENU } from '../data/elementData.js';
import { getErrorMessage, getNotValidMoneyErrorMessage } from './getErrorMessage.js';
import { showAlert } from '../utils/showAlert.js';
import TabMenuController from './tabMenuController.js';
import ProductManager from '../model/product.js';
import VendingMachineView from '../vendingMachineView.js';
import MoneyStatus from '../model/moneyStatus.js';
import changeCalculator from '../utils/changeCalculator.js';

export default class VendingMachine {
  constructor() {
    this.init();
  }

  createModels() {
    this.productModel = new ProductManager();
    this.coinModel = new MoneyStatus();
  }

  init() {
    this.createModels();
    this.tabMenu = new TabMenuController();
    this.view = new VendingMachineView(this.productModel.products);
    this.setEvent();
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
  }

  handlePurchaseEvent(e) {
    if (e.target.id === PURCHASE_MENU.PRODUCT_TABLE_SELECTOR.PURCHASE_BUTTON) {
      const name = e.target.parentNode.parentNode.childNodes[1].innerText;
      const price = this.productModel.purchaseProduct(name);

      this.coinModel.clientMoney -= price;

      this.view.renderChargeAmount(PURCHASE_MENU.INPUT_SELECTOR.PURCHASE_CHARGE_AMOUNT, this.coinModel.clientMoney);
      this.view.renderProducts(PURCHASE_MENU.PRODUCT_TABLE_SELECTOR.TABLE, this.tabMenu.purchaseMenu.purchaseItemTemplate);
      this.view.renderProducts(PRODUCT_MENU.TABLE_SELECTOR.TABLE, this.tabMenu.productMenu.productItemTemplate);
    }
  }

  handleReturnChangeEvent() {
    this.changeModel = new changeCalculator(this.coinModel.money);
    this.changeModel.returnChange(this.coinModel.clientMoney);
    
    this.coinModel.clientMoney = 0;

    this.view.renderCoinStatus(PURCHASE_MENU.RETURN_TABLE_SELECTOR, this.changeModel.change);
    this.view.renderCoinStatus(COIN_MENU.TABLE_SELECTOR, this.coinModel.money);
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