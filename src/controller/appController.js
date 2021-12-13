import AppView from '../view/appView.js';
import AddController from './add/addController.js';
import ManageController from './manage/manageController.js';
import PurchaseController from './purchase/purchaseController.js';

export default class AppController {
  constructor() {
    this.appView = new AppView();
    this.addController = new AddController();
    this.manageController = new ManageController();
    this.purchaseController = new PurchaseController();

    this.init();
  }

  init() {
    this.appView.renderHeader();
    this.appView.selectHeaderDOM();
    this.attachHeaderEvents();
  }

  attachHeaderEvents() {
    this.appView.$productAddMenu.addEventListener('click', this.handleChangeToAddTab.bind(this));
    this.appView.$productPurchaseMenu.addEventListener(
      'click',
      this.handleChangeToPurchaseTab.bind(this)
    );
    this.appView.$vendingMachineManageMenu.addEventListener(
      'click',
      this.handleChangeToManageTab.bind(this)
    );
  }

  handleChangeToManageTab(e) {
    e.preventDefault();

    this.manageController.init();
  }

  handleChangeToAddTab(e) {
    e.preventDefault();

    this.addController.init();
  }

  handleChangeToPurchaseTab(e) {
    e.preventDefault();

    this.purchaseController.init();
  }
}
