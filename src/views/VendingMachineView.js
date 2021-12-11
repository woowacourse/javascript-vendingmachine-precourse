import ProductAddMenuView from './ProductAddMenuView.js';
import VendingMachineManageMenuView from './VendingMachineManageMenuView.js';
import ProductPurchaseMenuView from './ProductPurchaseMenuView.js';
import { $ } from '../utils/dom.js';
import {
  createVendingMachineHeaderTemplate,
  createTabButtonContainerTemplate,
  createTabContentContainerTemplate,
} from '../templates/common.js';

import Selector from '../constants/selector.js';

class VendingMachineView {
  constructor(menuName) {
    this.$productAddMenuView = new ProductAddMenuView();
    this.$vendingMachineManageMenuView = new VendingMachineManageMenuView();
    this.$productPurchaseMenuView = new ProductPurchaseMenuView();

    this.render();
    this.renderTab(menuName);
  }

  render() {
    $(`#${Selector.vendingMachineApp}`).innerHTML =
      createVendingMachineHeaderTemplate() +
      createTabButtonContainerTemplate() +
      createTabContentContainerTemplate();
  }

  renderTab(menuName) {
    switch (menuName) {
      case Selector.productAddMenuId:
        this.$productAddMenuView.render();
        break;
      case Selector.vendingMachineManageMenuId:
        this.$vendingMachineManageMenuView.render();
        break;
      case Selector.productPurchaseMenuId:
        this.$productPurchaseMenuView.render();
        break;
      default:
        break;
    }
  }
}

export default VendingMachineView;
