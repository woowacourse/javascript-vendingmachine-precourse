import { $ } from '../utils/domElementTool.js';
import { PRODUCT_MENU } from '../data/elementData.js';
import { getErrorMessage } from './getErrorMessage.js';
import { showAlert } from '../utils/showAlert.js';
import TabMenuController from './tabMenuController.js';
import ProductManager from '../model/product.js';
import VendingMachineView from '../vendingMachineView.js';

export default class VendingMachine {
  constructor() {
    this.init();
  }
  
  createModels() {
    this.productModel = new ProductManager();
  }
  
  init() {
    this.createModels();
    this.tabMenu = new TabMenuController();
    this.view = new VendingMachineView(this.productModel.products);
    this.setEvent();
  }

  setEvent() {
    $('form').addEventListener('click', this.handleFormEvent.bind(this));
  }

  handleFormEvent(e) {
    e.preventDefault();
    if (e.target.id === PRODUCT_MENU.INPUT_SELECTOR.PRODUCT_ADD_BUTTON) {
      this.submitProduct();
      this.view.renderProducts($(`#${PRODUCT_MENU.TABLE_SELECTOR.TABLE}`), this.tabMenu.productMenu.productItemTemplate);
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
}
