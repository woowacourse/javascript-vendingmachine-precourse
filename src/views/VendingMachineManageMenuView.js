import { $ } from '../utils/dom.js';
import {
  createChargeFormTemplate,
  createChargeAmountTemplate,
  createCoinQuantityTableTemplate,
  createCoinQuantityTableBodyTemplate,
} from '../templates/vendingMachineManageMenu.js';
import { createMenuTitleTemplate } from '../templates/common.js';

import SELECTOR from '../constants/selector.js';
import { VENDING_MACHINE_MANAGE_MENU } from '../constants/common.js';

class VendingMachineManageMenuView {
  render() {
    $(`#${SELECTOR.tabContentContainerId}`).innerHTML =
      createMenuTitleTemplate(VENDING_MACHINE_MANAGE_MENU) +
      createChargeFormTemplate() +
      createChargeAmountTemplate(0) +
      createCoinQuantityTableTemplate(0, 0, 0, 0);
  }

  renderCoinQuantityTableBodyWithData(coin500, coin100, coin50, coin10) {
    $(`#${SELECTOR.vendingMachineCoinTableBody}`).innerHTML = createCoinQuantityTableBodyTemplate(
      coin500,
      coin100,
      coin50,
      coin10,
    );
  }

  renderCoinChargeAmountWithData(amount) {
    $(`#${SELECTOR.vendingMachineChargeAmountId}`).innerHTML = amount;
  }

  renderInputWithStorageData(charge) {
    $(`#${SELECTOR.vendingMachineChargeInputId}`).value = charge;
  }

  resetChargeAmountInput() {
    $(`#${SELECTOR.vendingMachineChargeInputId}`).value = null;
  }
}

export default VendingMachineManageMenuView;
