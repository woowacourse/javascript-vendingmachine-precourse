import { $ } from '../utils/dom.js';
import {
  createVendingMachineHeaderTemplate,
  createTabButtonContainerTemplate,
  createTabContentContainerTemplate,
} from '../templates/common.js';

import Selector from '../constants/selector.js';

class VendingMachineView {
  constructor() {
    this.render();
  }

  render() {
    $(`#${Selector.vendingMachineApp}`).innerHTML =
      createVendingMachineHeaderTemplate() +
      createTabButtonContainerTemplate() +
      createTabContentContainerTemplate();
  }
}

export default VendingMachineView;
