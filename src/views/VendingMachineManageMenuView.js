import { $ } from '../utils/dom.js';
import {
  createTitleTemplate,
  createChargeFormTemplate,
  createChargeAmountTemplate,
  createCoinQuantityTableTemplate,
} from '../templates/vendingMachineManageMenu.js';

import Selector from '../constants/selector.js';

class VendingMachineManageMenuView {
  render() {
    $(`#${Selector.tabContentContainerId}`).innerHTML =
      createTitleTemplate() +
      createChargeFormTemplate() +
      createChargeAmountTemplate(0) +
      createCoinQuantityTableTemplate();
  }
}

export default VendingMachineManageMenuView;
