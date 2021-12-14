import AppView from '../view/appView.js';
import AddController from './add/addController.js';
import ManageController from './manage/manageController.js';
import PurchaseController from './purchase/purchaseController.js';
import AppModel from '../model/appModel.js';
import { TAB } from '../constants/constants.js';

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

    this.initController(this.appModel.currentTab);
  }

  initController(currentTab) {
    if (currentTab === TAB.MANAGE) return this.manageController.init();
    if (currentTab === TAB.PURCHASE) return this.purchaseController.init();
    return this.addController.init();
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
    this.appModel.setCurrentTab(TAB.MANAGE);
  }

  handleChangeToAddTab(e) {
    e.preventDefault();

    this.addController.init();
    this.appModel.setCurrentTab(TAB.ADD);
  }

  handleChangeToPurchaseTab(e) {
    e.preventDefault();

    this.purchaseController.init();
    this.appModel.setCurrentTab(TAB.PURCHASE);
  }
}
