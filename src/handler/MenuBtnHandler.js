import {
  ProductAdd,
  ProductPurchase,
  VendingMachine,
} from './elementDivClass.js';

export default class MenuBtnHandler {
  constructor() {
    this.productAdd = new ProductAdd();
    this.vendingMachine = new VendingMachine();
    this.productPurchase = new ProductPurchase();
    this.clickProductAdd();
    this.clickVendingMachine();
    this.clickProductPurchase();
    this.app = document.querySelector('#app');
  }

  clickProductAdd() {
    this.productAdd.btn.addEventListener('click', e => {
      e.preventDefault();
      this.productAdd.setVisible(true);
      this.vendingMachine.setVisible(false);
      this.productPurchase.setVisible(false);
      this.app.insertBefore(this.productAdd.div, this.app.childNodes[1]);
    });
  }

  clickVendingMachine() {
    this.vendingMachine.btn.addEventListener('click', e => {
      e.preventDefault();
      this.productAdd.setVisible(false);
      this.vendingMachine.setVisible(true);
      this.productPurchase.setVisible(false);
      this.app.insertBefore(this.vendingMachine.div, this.app.childNodes[1]);
    });
  }

  clickProductPurchase() {
    this.productPurchase.btn.addEventListener('click', e => {
      e.preventDefault();
      this.productAdd.setVisible(false);
      this.vendingMachine.setVisible(false);
      this.productPurchase.setVisible(true);
      this.app.insertBefore(this.productPurchase.div, this.app.childNodes[1]);
    });
  }
}
