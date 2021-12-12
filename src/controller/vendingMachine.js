import { $, $$ } from '../utils/domElementTool.js';
import { COIN_MENU, PRODUCT_MENU, PURCHASE_MENU } from '../data/elementData.js';
import { getErrorMessage, getNotValidMoneyErrorMessage } from './getErrorMessage.js';
import { showAlert } from '../utils/showAlert.js';
import TabMenuController from './tabMenuController.js';
import ProductManager from '../model/product.js';
import VendingMachineView from '../vendingMachineView.js';
import MoneyStatus from '../model/moneyStatus.js';

export default class VendingMachine {
  constructor() {
    this.init();
  }

  createModels() {
    this.productModel = new ProductManager();
    this.coinModel = new MoneyStatus();
    this.purchaseCoinModel = new MoneyStatus();
  }

  init() {
    this.createModels();
    this.tabMenu = new TabMenuController();
    this.view = new VendingMachineView(this.productModel.products);
    this.setEvent();
  }

  setEvent() {
    $$('form').forEach(form => form.addEventListener('click', this.handleFormEvent.bind(this)));
  }

  handleFormEvent(e) {
    e.preventDefault();
    if (e.target.id === PRODUCT_MENU.INPUT_SELECTOR.PRODUCT_ADD_BUTTON) {
      this.handleAddMenu();
    } else if (e.target.id === COIN_MENU.INPUT_SELECTOR.COIN_CHARGE_BUTTON) {
      this.handleChargeCoin();
    } else if (e.target.id === PURCHASE_MENU.INPUT_SELECTOR.PURCHASE_CHARGE_BUTTON) {
      this.handlePurchaseProduct();
    }
  }

  submitProduct() {
    const name = $(`#${PRODUCT_MENU.INPUT_SELECTOR.PRODUCT_NAME_INPUT}`).value;
    const price = $(`#${PRODUCT_MENU.INPUT_SELECTOR.PRODUCT_PRICE_INPUT}`).value;
    const quantity = $(`#${PRODUCT_MENU.INPUT_SELECTOR.PRODUCT_QUANTITY_INPUT}`).value;
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

  handlePurchaseProduct() {
    this.submitChargeInput(PURCHASE_MENU.INPUT_SELECTOR.PURCHASE_CHARGE_INPUT, this.purchaseCoinModel);
    this.view.renderChargeAmount(PURCHASE_MENU.INPUT_SELECTOR.PURCHASE_CHARGE_AMOUNT, this.purchaseCoinModel.getAmount());
  }
}
