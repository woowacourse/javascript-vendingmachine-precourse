import { $ } from '../utils/dom.js';
import { createTitle, createChargeForm } from '../view/vendingMachineManageMenu.js';
import { SELECTOR } from '../constants.js';

class VendingMachineManageTab {
  render() {
    $(`#${SELECTOR.tabContentContainerId}`).innerHTML = createTitle() + createChargeForm();
  }
}

export default VendingMachineManageTab;
