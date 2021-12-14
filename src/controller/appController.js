import AppView from '../view/appView.js';
import AddController from './add/addController.js';
import ManageController from './manage/manageController.js';
import PurchaseController from './purchase/purchaseController.js';
import AppModel from '../model/appModel.js';

export default class AppController {
  constructor() {
    this.appView = new AppView();
    this.appModel = new AppModel();

    this.addController = new AddController(this.appModel);
    this.manageController = new ManageController(this.appModel);
    this.purchaseController = new PurchaseController(this.appModel);

    this.init();
  }

  init() {
    this.appView.renderHeader();
    this.appView.selectHeaderDOM();
    this.attachHeaderEvents();

    this.purchaseController.init();
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
