import * as $ from './dom.js';
import VendingModel from './model.js';

export default class VendingController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  app() {
    this.view.renderInApp('afterbegin', $.tabMenus);
    this.view.renderInApp('beforeend', $.tab1);
    this.view.showTab('.tab1');
    this.view.renderInApp('beforeend', $.tab2);
    this.view.renderInApp('beforeend', $.tab3);
    this.addAllEventListener();
    this.loadData();
  }

  loadData() {
    const productObj = JSON.parse(VendingModel.getLocalStorage('tab1'));
    for (const name in productObj) {
      if (Object.hasOwnProperty.call(productObj, name)) {
        this.makeTab1Table(
          name,
          productObj[name].price,
          productObj[name].quantity
        );
      }
    }
  }

  addAllEventListener() {
    document
      .getElementById('product-add-menu')
      .addEventListener('click', () => this.switchTab('.tab1'));
    document
      .getElementById('vending-machine-manage-menu')
      .addEventListener('click', () => this.switchTab('.tab2'));
    document
      .getElementById('product-purchase-menu')
      .addEventListener('click', () => this.switchTab('.tab3'));
    document
      .getElementById('product-add-button')
      .addEventListener('click', e => this.addProduct.call(this, e));
  }

  makeTab1Table(name, price, quantity) {
    const newRowOfTab1 = () => $.createTbody(name, price, quantity);
    this.view.addTableRow($.tbodyOfTab1(), newRowOfTab1());
  }

  addProduct(e) {
    e.preventDefault();
    const name = $.productNameInput().value;
    const price = $.productPriceInput().value;
    const quantity = $.productQuantityInput().value;
    this.makeTab1Table(name, price, quantity);
    this.model.productObj = { name, price, quantity };
    VendingModel.setLocalStorage('tab1', this.model.productObj);
  }

  switchTab(tab) {
    this.view.hideTab();
    this.view.showTab(tab);
  }
}
