import { $ } from '../utils/dom.js';
import {
  createVendingMachineHeaderTemplate,
  createTabButtonContainerTemplate,
  createTabContentContainerTemplate,
} from '../templates/common.js';

import SELECTOR from '../constants/selector.js';

class VendingMachineView {
  constructor() {
    this.render();
  }

  render() {
    $(`#${SELECTOR.vendingMachineApp}`).innerHTML =
      createVendingMachineHeaderTemplate() +
      createTabButtonContainerTemplate() +
      createTabContentContainerTemplate();
  }
}

export default VendingMachineView;
