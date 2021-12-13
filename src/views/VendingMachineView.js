import { $ } from '../utils/dom.js';
import {
  createVendingMachineHeaderTemplate,
  createMenuButtonContainerTemplate,
  createMenuContentContainerTemplate,
} from '../templates/common.js';

import SELECTOR from '../constants/selector.js';

class VendingMachineView {
  constructor() {
    this.render();
  }

  render() {
    $(`#${SELECTOR.vendingMachineApp}`).innerHTML =
      createVendingMachineHeaderTemplate() +
      createMenuButtonContainerTemplate() +
      createMenuContentContainerTemplate();
  }
}

export default VendingMachineView;
