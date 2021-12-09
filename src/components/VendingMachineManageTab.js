import { $ } from '../utils/dom.js';
import {
  createTitleTemplate,
  createChargeFormTemplate,
  createChargeAmountTemplate,
} from '../templates/vendingMachineManageMenu.js';
import { SELECTOR } from '../constants.js';

class VendingMachineManageTab {
  render() {
    $(`#${SELECTOR.tabContentContainerId}`).innerHTML =
      createTitleTemplate() + createChargeFormTemplate() + createChargeAmountTemplate(0);
  }
}

export default VendingMachineManageTab;
