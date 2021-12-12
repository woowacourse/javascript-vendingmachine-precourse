import { $, $$ } from '../utils/domElementTool.js';
import { COIN_MENU, PRODUCT_MENU } from '../data/elementData.js';
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
      this.submitProduct();
      this.view.renderProducts($(`#${PRODUCT_MENU.TABLE_SELECTOR.TABLE}`), this.tabMenu.productMenu.productItemTemplate);
    } else if (e.target.id === COIN_MENU.INPUT_SELECTOR.COIN_CHARGE_BUTTON) {
      this.submitChargeInput(COIN_MENU.INPUT_SELECTOR.COIN_CHARGE_INPUT);
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

  submitChargeInput(inputSelector) {
    const money = $(`#${inputSelector}`).value;
    const errorMessage = getNotValidMoneyErrorMessage(money);

    if (errorMessage) {
      showAlert(errorMessage);
      return;
    }

    this.coinModel.putMoney(money);
  }
}
