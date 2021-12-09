import * as $ from './dom.js';

export default class VendingController {
  constructor(model, view, dom) {
    this.model = model;
    this.view = view;
    this.dom = dom;
  }

  app() {
    this.view.renderInApp('afterbegin', $.tabMenus);
    this.view.renderInApp('beforeend', $.tab1);
    this.view.renderInApp('beforeend', $.tab2);
    this.view.renderInApp('beforeend', $.tab3);
    this.addAllEventListener();
  }

  addAllEventListener() {
    document
      .getElementById('product-add-menu')
      .addEventListener('click', () => this.view.switchTab('.tab1'));
    document
      .getElementById('vending-machine-manage-menu')
      .addEventListener('click', () => this.view.switchTab('.tab2'));
    document
      .getElementById('product-purchase-menu')
      .addEventListener('click', () => this.view.switchTab('.tab3'));
    document
      .getElementById('product-add-button')
      .addEventListener('click', this.addProduct);
  }

  addProduct(e) {
    e.preventDefault();
    console.log($.productNameInput().value);
    console.log($.productPriceInput().value);
    console.log($.productQuantityInput().value);
  }
}
