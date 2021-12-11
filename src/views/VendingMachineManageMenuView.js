import { $ } from '../utils/dom.js';
import {
  createTitleTemplate,
  createChargeFormTemplate,
  createChargeAmountTemplate,
  createCoinQuantityTableTemplate,
  createCoinQuantityTableBodyTemplate,
} from '../templates/vendingMachineManageMenu.js';

import Selector from '../constants/selector.js';

class VendingMachineManageMenuView {
  render() {
    $(`#${Selector.tabContentContainerId}`).innerHTML =
      createTitleTemplate() +
      createChargeFormTemplate() +
      createChargeAmountTemplate(0) +
      createCoinQuantityTableTemplate(0, 0, 0, 0);
  }

  renderCoinQuantityTableBodyWithData(coin500, coin100, coin50, coin10) {
    $(`#${Selector.vendingMachineCoinTableBody}`).innerHTML = createCoinQuantityTableBodyTemplate(
      coin500,
      coin100,
      coin50,
      coin10,
    );
  }

  renderCoinChargeAmountWithData(amount) {
    $(`#${Selector.vendingMachineChargeAmountId}`).innerHTML = amount;
  }
}

export default VendingMachineManageMenuView;
