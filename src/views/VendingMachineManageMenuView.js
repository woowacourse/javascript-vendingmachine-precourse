import { $ } from '../utils/dom.js';
import {
  createTitleTemplate,
  createChargeFormTemplate,
  createChargeAmountTemplate,
  createCoinQuantityTableTemplate,
  createCoinQuantityTableBodyTemplate,
} from '../templates/vendingMachineManageMenu.js';

import SELECTOR from '../constants/selector.js';

class VendingMachineManageMenuView {
  render() {
    $(`#${SELECTOR.tabContentContainerId}`).innerHTML =
      createTitleTemplate() +
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

  resetChargeAmountInput() {
    $(`#${SELECTOR.vendingMachineChargeInputId}`).value = null;
  }
}

export default VendingMachineManageMenuView;
