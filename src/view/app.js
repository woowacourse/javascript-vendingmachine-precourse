import ChangeController from '../controller/changeController.js';
import ManageController from '../controller/manageController.js';
import PurhcaseController from '../controller/purchaseController.js';
import { $, $$, showChangeTab, showManageTab, showPurchaseTab } from '../utils/dom.js';
import ChangeView from './changeView.js';
import ManageView from './manageView.js';
import PurchaseView from './purchaseView.js';

class App {
  constructor() {
    this.initViews();
    this.render();
    this.bindEvent();
    this.initControllers();
  }

  initViews() {
    this.manageView = new ManageView();
    this.changeView = new ChangeView();
    this.purchaseView = new PurchaseView();
  }

  initControllers() {
    this.manageController = new ManageController(this.manageView);
    this.changeController = new ChangeController(this.changeView);
    this.purchaseController = new PurhcaseController(this.purchaseView);
  }

  render() {
    $('#app').innerHTML = this.template();
    $('main').insertAdjacentHTML('beforeend', this.manageView.template());
    $('main').insertAdjacentHTML('beforeend', this.changeView.template());
    $('main').insertAdjacentHTML('beforeend', this.purchaseView.template());
    showManageTab();
    this.manageView.render();
  }

  template() {
    return `
      <header>
        <h1>🥤자판기🥤</h1>
        <button id="product-add-menu">상품 관리</button>
        <button id="vending-machine-manage-menu">잔돈 충전</button>
        <button id="product-purchase-menu">상품 구매</button>
      </header>
      <main></main>
    `;
  }

  bindEvent() {
    $('#product-add-menu').addEventListener('click', showManageTab);
    $('#vending-machine-manage-menu').addEventListener('click', showChangeTab);
    $('#product-purchase-menu').addEventListener('click', showPurchaseTab);
    this.preventFormSubmit();
  }

  preventFormSubmit() {
    $$('form').forEach((form) =>
      addEventListener('submit', (e) => {
        e.preventDefault();
      })
    );
  }
}

export default App;
