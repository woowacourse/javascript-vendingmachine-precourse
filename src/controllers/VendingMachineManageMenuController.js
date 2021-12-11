import VendingMachineManageMenuView from '../views/VendingMachineManageMenuView.js';
import VendingMachineManageMenuModel from '../models/VendingMachineManageMenuModel.js';

class VendingMachineManageMenuController {
  constructor() {
    this.$vendingMachineManageMenuView = new VendingMachineManageMenuView();
    this.$vendingMachineManageMenuModel = new VendingMachineManageMenuModel();

    this.initAddEventListeners();
  }

  initAddEventListeners() {}

  changeMenu() {
    this.$vendingMachineManageMenuView.render();
  }
}

export default VendingMachineManageMenuController;
