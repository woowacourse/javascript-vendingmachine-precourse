import { $ } from '../controller/utils.js';
import {
  fixMenus,
  productAddMenu,
  vendingMachineManageMenu,
  productPurchaseMenu,
} from '../model/dom.js';
import { initAllProductAdd } from '../controller/productAdd.js';
import { initAllVending } from '../controller/vending.js';

export default class View {
  constructor() {
    this.$app = $('app');
    this.$app.insertAdjacentHTML('afterbegin', fixMenus);
    this.drawAddMenu();
  }

  clearContainer() {
    $('container').innerHTML = '';
  }

  drawAddMenu() {
    this.clearContainer();
    $('container').insertAdjacentHTML('afterbegin', productAddMenu);
    initAllProductAdd();
  }

  drawVendingMenu() {
    this.clearContainer();
    $('container').insertAdjacentHTML('afterbegin', vendingMachineManageMenu);
    initAllVending();
  }

  drawPurchaseMenu() {
    this.clearContainer();
    $('container').insertAdjacentHTML('afterbegin', productPurchaseMenu);
  }
}
