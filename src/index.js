import View from './view.js';

export default class VendingMachine {
  constructor() {
    this.view = new View();
    this.setFixedMenuEventListner();
  }

  setFixedMenuEventListner() {
    this.productAddMenuButton = document.getElementById('product-add-menu');
    this.coinChageMenuButton = document.getElementById('vending-machine-manage-menu');
    this.purchaseMenuButton = document.getElementById('product-purchase-menu');

    this.productAddMenuButton.addEventListener('click', () => this.view.showProductAddMenu());
    this.coinChageMenuButton.addEventListener('click', () => this.view.showCoinChargeMenu());
    this.purchaseMenuButton.addEventListener('click', () => this.view.showPurchaseMenu());
  }
}

new VendingMachine();
