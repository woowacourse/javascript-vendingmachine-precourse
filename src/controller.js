import * as $ from './dom.js';

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

  addProduct(e) {
    e.preventDefault();
    this.view.addTableRow($.tbodyOfTab1(), $.newRowOfTab1());
    const name = $.productNameInput().value;
    const price = $.productPriceInput().value;
    const quantity = $.productQuantityInput().value;
    this.model.productObj = { name, price, quantity };
    console.log(this.model.productObj);
  }

  switchTab(tab) {
    this.view.hideTab();
    this.view.showTab(tab);
  }
}
