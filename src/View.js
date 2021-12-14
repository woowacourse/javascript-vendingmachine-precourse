import { fixedMenu, productAddMenu, coinChargeMenu, productPurchaseMenu } from './dom.js';
import { initProductTable } from './Menu/productAddMenu.js';
import { initCoinMenu } from './Menu/coinChargeMenu.js';

export default class View {
  constructor() {
    this.$app = document.getElementById('app');
    this.$app.insertAdjacentHTML('afterbegin', fixedMenu);
  }

  clearMenu() {
    document.getElementById('container').innerHTML = '';
  }

  showProductAddMenu() {
    this.clearMenu();
    document.getElementById('container').insertAdjacentHTML('afterbegin', productAddMenu);
    initProductTable();
  }

  showCoinChargeMenu() {
    this.clearMenu();
    document.getElementById('container').insertAdjacentHTML('afterbegin', coinChargeMenu);
    initCoinMenu();
  }

  showPurchaseMenu() {
    this.clearMenu();
    document.getElementById('container').insertAdjacentHTML('afterbegin', productPurchaseMenu);
  }
}
