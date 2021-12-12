import ProductAddMenuController from './ProductAddMenuController.js';
import VendingMachineManageMenuController from './VendingMachineManageMenuController.js';
import ProductPurchaseMenuController from './ProductPurchaseMenuController.js';
import VendingMachineView from '../views/VendingMachineView.js';
import VendingMachineModel from '../models/VendingMachineModel.js';

import SELECTOR from '../constants/selector.js';
import { $ } from '../utils/dom.js';

class VendingMachineController {
  constructor() {
    this.$vendingMachineModel = new VendingMachineModel();
    this.$vendingMachineView = new VendingMachineView(this.$vendingMachineModel.getCurrentMenu());

    this.$productAddMenuController = new ProductAddMenuController(
      this.$vendingMachineModel.getCurrentMenu(),
    );
    this.$vendingMachineManageMenuController = new VendingMachineManageMenuController(
      this.$vendingMachineModel.getCurrentMenu(),
    );
    this.$productPurchaseMenuController = new ProductPurchaseMenuController(
      this.$vendingMachineModel.getCurrentMenu(),
    );

    this.initAddEventListeners();
    this.changeMenu(this.$vendingMachineModel.getCurrentMenu());
  }

  initAddEventListeners() {
    $(`#${SELECTOR.tabButtonContainerId}`).addEventListener(
      'click',
      this.onClickMenuButton.bind(this),
    );
  }

  onClickMenuButton(event) {
    const menuName = event.target.id;
    this.$vendingMachineModel.setCurrentMenu(menuName);
    this.changeMenu(menuName);
  }

  changeMenu(menuName) {
    switch (menuName) {
      case SELECTOR.productAddMenuId:
        this.$productAddMenuController.changeMenu();
        break;
      case SELECTOR.vendingMachineManageMenuId:
        this.$vendingMachineManageMenuController.changeMenu();
        break;
      case SELECTOR.productPurchaseMenuId:
        this.$productPurchaseMenuController.changeMenu();
        break;
      default:
        break;
    }
  }
}

export default VendingMachineController;
