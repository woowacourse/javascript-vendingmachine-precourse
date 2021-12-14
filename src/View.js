import { fixedMenu, productAddMenu, coinChargeMenu, productPurchaseMenu } from './dom.js';

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
  }

  showCoinChargeMenu() {
    this.clearMenu();
    document.getElementById('container').insertAdjacentHTML('afterbegin', coinChargeMenu);
  }

  showPurchaseMenu() {
    this.clearMenu();
    document.getElementById('container').insertAdjacentHTML('afterbegin', productPurchaseMenu);
  }
}
