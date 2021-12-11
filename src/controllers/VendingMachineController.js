import ProductAddMenuController from './ProductAddMenuController.js';
import VendingMachineManageMenuController from './VendingMachineManageMenuController.js';
import ProductPurchaseMenuController from './ProductPurchaseMenuController.js';
import VendingMachineView from '../views/VendingMachineView.js';
import VendingMachineModel from '../models/VendingMachineModel.js';

import Selector from '../constants/selector.js';
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
    $(`#${Selector.tabButtonContainerId}`).addEventListener(
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
      case Selector.productAddMenuId:
        this.$productAddMenuController.changeMenu();
        break;
      case Selector.vendingMachineManageMenuId:
        this.$vendingMachineManageMenuController.changeMenu();
        break;
      case Selector.productPurchaseMenuId:
        this.$productPurchaseMenuController.changeMenu();
        break;
      default:
        break;
    }
  }
}

export default VendingMachineController;
