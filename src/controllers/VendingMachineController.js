import VendingMachineView from '../views/VendingMachineView.js';
import VendingMachineModel from '../models/VendingMachineModel.js';

import Selector from '../constants/selector.js';
import { $ } from '../utils/dom.js';

class VendingMachineController {
  constructor() {
    this.$vendingMachineModel = new VendingMachineModel();
    this.$vendingMachineView = new VendingMachineView(this.$vendingMachineModel.getCurrentMenu());

    this.initAddEventListeners();
  }

  initAddEventListeners() {
    $(`#${Selector.tabButtonContainerId}`).addEventListener(
      'click',
      this.onClickTabButton.bind(this),
    );
  }

  onClickTabButton(event) {
    const menuName = event.target.id;
    this.$vendingMachineModel.setCurrentMenu(menuName);
    this.$vendingMachineView.renderTab(menuName);
  }
}

export default VendingMachineController;
