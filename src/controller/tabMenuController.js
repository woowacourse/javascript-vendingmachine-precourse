import { $App } from '../data/domElement.js';
import { TABMENU } from '../data/elementData.js';
import { HEADER } from '../data/template.js';
import TabMenu from '../components/tabMenu.js';
import ProductMenu from '../components/pages/producMenu.js';
import CoinMenu from '../components/pages/coinMenu.js';
import PurchaseMenu from '../components/pages/purchaseMenu.js';

export default class TabMenuController {
  constructor() {
    this.init();
  }
  
  init() {
    this.creatView();
    this.rederInitPage();
    this.appendTabMenuItems();
    this.setEvent();
  }
  
  creatView() {
    this.tabMenu = new TabMenu();
    this.productMenu = new ProductMenu();
    this.coinMenu = new CoinMenu();
    this.purchaseMenu = new PurchaseMenu();
  }

  rederInitPage() {
    $App.insertAdjacentHTML('beforeend', HEADER);
    $App.insertAdjacentHTML('beforeend', this.tabMenu.template);
  }

  appendTabMenuItems() {
    $App.append(this.productMenu.$main);
    $App.append(this.coinMenu.$main);
    $App.append(this.purchaseMenu.$main);
  }

  setEvent() {
    $App.addEventListener('click', this.handleClickTab.bind(this));
  }

  handleClickTab(e) {
    if (e.target.id === TABMENU.SELECTOR.PRODUCT_MENU) {
      this.purchaseMenu.closeMenu();
      this.coinMenu.closeMenu();
      this.productMenu.showMenu();
    } else if (e.target.id === TABMENU.SELECTOR.COIN_MENU) {
      this.productMenu.closeMenu();
      this.purchaseMenu.closeMenu();
      this.coinMenu.showMenu();
    } else if (e.target.id === TABMENU.SELECTOR.PURCHASE_MENU) {
      this.productMenu.closeMenu();
      this.coinMenu.closeMenu();
      this.purchaseMenu.showMenu();
    }
  }
}
