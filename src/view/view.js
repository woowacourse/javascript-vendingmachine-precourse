import { $ } from '../utils/selector.js';
import { TAB, TITLE, MARGIN } from '../utils/constant.js';
import ManagePage from './manage.js';

export default class View {
  constructor() {
    this.app = $('#app');
    this.manageTab = document.createElement('button');
    this.chargeTab = document.createElement('button');
    this.purchaseTab = document.createElement('button');
    this.managePage = document.createElement('div');
    this.chargePage = document.createElement('div');
    this.purchasePage = document.createElement('div');
    this.title = document.createElement('h1');
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
    this.app.appendChild(this.managePage);
    this.app.appendChild(this.chargePage);
    this.app.appendChild(this.purchasePage);
  }

  setBasicUI() {
    this.setText();
    this.app.appendChild(this.title);
    this.setTabs();
    this.getManagePage();
    this.setAllPage();
  }

  ///

  hideAllPage() {
    this.managePage.style.display = 'none';
    this.chargePage.style.display = 'none';
    this.purchasePage.style.display = 'node';
  }

  showSelectedPage(id) {
    $(`#${id}`).style.display = 'block';
  }

  getManagePage() {
    const mp = new ManagePage(this.managePage);
    mp.setUI();
  }
}
