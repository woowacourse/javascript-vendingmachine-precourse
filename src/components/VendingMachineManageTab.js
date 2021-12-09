import { $ } from '../utils/dom.js';
import { createTitle } from '../view/vendingMachineManageMenu.js';
import { SELECTOR } from '../constants.js';

class VendingMachineManageTab {
  render() {
    const title = createTitle();

    $(`#${SELECTOR.tabContentContainerId}`).innerHTML = title;
  }
}

export default VendingMachineManageTab;
