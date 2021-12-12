import { $ } from '../utils/selector.js';
import { TAB, TITLE, MARGIN } from '../utils/constant.js';
import ManagePage from './manage.js';
import ChargePage from './charge.js';
import PurchasePage from './purchase.js';

export default class View {
  constructor(inventory) {
    this.app = $('#app');
    this.manageTab = document.createElement('button');
    this.chargeTab = document.createElement('button');
    this.purchaseTab = document.createElement('button');
    this.managePageDiv = document.createElement('div');
    this.chargePageDiv = document.createElement('div');
    this.purchasePageDiv = document.createElement('div');
    this.title = document.createElement('h1');
    this.inventory = inventory;
    this.managePage = new ManagePage(this.inventory);
    this.chargePage = new ChargePage();
    this.purchasePage = new PurchasePage();
  }

  setText() {
    this.title.innerText = TITLE;
    this.manageTab.innerText = TAB.TEXT_PRODUCT_MANAGE;
    this.chargeTab.innerText = TAB.TEXT_CHARGE;
    this.purchaseTab.innerText = TAB.TEXT_PURCHASE;
  }

  setTabId() {
    this.manageTab.setAttribute('id', TAB.ID_PRODUCT_MANAGE);
    this.chargeTab.setAttribute('id', TAB.ID_CHARGE);
    this.purchaseTab.setAttribute('id', TAB.ID_PURCHASE);
  }

  // index.html에 생성한 tab들 넣기
  setTabs() {
    this.setTabId();
    this.chargeTab.style.margin = MARGIN;
    this.app.appendChild(this.manageTab);
    this.app.appendChild(this.chargeTab);
    this.app.appendChild(this.purchaseTab);
  }

  setAllPage() {
    this.app.appendChild(this.managePageDiv);
    this.app.appendChild(this.chargePageDiv);
    this.app.appendChild(this.purchasePageDiv);
  }

  setBasicUI() {
    this.setText();
    this.app.appendChild(this.title);
    this.setTabs();
    this.getManagePage();
    // this.getChargePage();
    // this.getPurchasePage();
    this.setAllPage();
    
  }

  hideAllPage() {
    this.managePage.style.display = 'none';
    this.chargePage.style.display = 'none';
    this.purchasePage.style.display = 'node';
  }

  showSelectedPage(id) {
    $(`#${id}`).style.display = 'block';
  }

  getManagePage() {
    this.managePage.setUI(this.managePageDiv);
    this.managePage.showProductListAll();
    this.managePage.buttonHandler(this.inventory);
  }

  getChargePage() {
    this.chargePage.setUI(this.chargePageDiv);
  }

  getPurchasePage() {
    this.purchasePage.setUI(this.purchasePage);
  }
}
