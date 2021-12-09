import { $ } from '../utils/dom.js';
import { createTitleTemplate, createChargeFormTemplate } from '../view/vendingMachineManageMenu.js';
import { SELECTOR } from '../constants.js';

class VendingMachineManageTab {
  render() {
    $(`#${SELECTOR.tabContentContainerId}`).innerHTML =
      createTitleTemplate() + createChargeFormTemplate();
  }
}

export default VendingMachineManageTab;
