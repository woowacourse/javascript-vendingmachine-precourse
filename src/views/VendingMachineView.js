import ProductAddMenuView from './ProductAddMenuView.js';
import VendingMachineManageMenuView from './VendingMachineManageMenuView.js';
import ProductPurchaseMenuView from './ProductPurchaseMenuView.js';
import SELECTOR from '../constants/selector.js';
import { $ } from '../utils/dom.js';
import {
  createVendingMachineHeaderTemplate,
  createTabButtonContainerTemplate,
  createTabContentContainerTemplate,
} from '../templates/common.js';

class VendingMachineView {
  constructor(menuName) {
    this.$productAddMenuView = new ProductAddMenuView();
    this.$vendingMachineManageMenuView = new VendingMachineManageMenuView();
    this.$productPurchaseMenuView = new ProductPurchaseMenuView();

    this.render();
    this.renderTab(menuName);
  }

  render() {
    $(`#${SELECTOR.vendingMachineApp}`).innerHTML =
      createVendingMachineHeaderTemplate() +
      createTabButtonContainerTemplate() +
      createTabContentContainerTemplate();
  }

  renderTab(menuName) {
    switch (menuName) {
      case SELECTOR.productAddMenuId:
        this.$productAddMenuView.render();
        break;
      case SELECTOR.vendingMachineManageMenuId:
        this.$vendingMachineManageMenuView.render();
        break;
      case SELECTOR.productPurchaseMenuId:
        this.$productPurchaseMenuView.render();
        break;
      default:
        break;
    }
  }
}

export default VendingMachineView;
