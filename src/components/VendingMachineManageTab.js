import { $ } from '../utils/dom.js';
import {
  createTitleTemplate,
  createChargeFormTemplate,
  createChargeAmountTemplate,
  createCoinQuantityTableTemplate,
} from '../templates/vendingMachineManageMenu.js';
import SELECTOR from '../constants/selector.js';

class VendingMachineManageTab {
  render() {
    $(`#${SELECTOR.tabContentContainerId}`).innerHTML =
      createTitleTemplate() +
      createChargeFormTemplate() +
      createChargeAmountTemplate(0) +
      createCoinQuantityTableTemplate();
  }
}

export default VendingMachineManageTab;
