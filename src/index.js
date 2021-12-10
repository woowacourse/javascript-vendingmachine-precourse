import ProductAddTab from './components/ProductAddTab.js';
import VendingMachineManageTab from './components/VendingMachineManageTab.js';
import ProductPurchaseTab from './components/ProductPurchaseTab.js';
import {
  createVendingMachineHeaderTemplate,
  createTabButtonContainerTemplate,
  createTabContentContainerTemplate,
} from './templates/common.js';
import SELECTOR from './constants/selector.js';
import STORE_KEY from './constants/store.js';
import { $ } from './utils/dom.js';
import store from './utils/store.js';

class VendingMachine {
  constructor() {
    this.render();
    this.addEventListeners();

    this.$productAddTab = new ProductAddTab();
    this.$vendingMachineManageTab = new VendingMachineManageTab();
    this.$productPurchaseTab = new ProductPurchaseTab();

    this.$currentTab = store.getLocalStorage(STORE_KEY.currentTab)
      ? store.getLocalStorage(STORE_KEY.currentTab)
      : SELECTOR.productAddMenuId;

    this.renderTab();
  }

  render() {
    $(`#${SELECTOR.vendingMachineApp}`).innerHTML =
      createVendingMachineHeaderTemplate() +
      createTabButtonContainerTemplate() +
      createTabContentContainerTemplate();
  }

  renderTab() {
    switch (this.$currentTab) {
      case SELECTOR.productAddMenuId:
        this.$productAddTab.render();
        break;
      case SELECTOR.vendingMachineManageMenuId:
        this.$vendingMachineManageTab.render();
        break;
      case SELECTOR.productPurchaseMenuId:
        this.$productPurchaseTab.render();
        break;
      default:
        break;
    }
  }

  addEventListeners() {
    $(`#${SELECTOR.tabButtonContainerId}`).addEventListener(
      'click',
      this.onClickTabButton.bind(this),
    );
    $(`#${SELECTOR.tabContentContainerId}`).addEventListener(
      'click',
      this.onClickTabContent.bind(this),
    );
  }

  onClickTabButton(event) {
    const tabId = event.target.id;
    this.$currentTab = tabId;
    store.setLocalStorage(STORE_KEY.currentTab, tabId);
    this.renderTab();
  }

  onClickTabContent(event) {
    const { id } = event.target;

    if (id === SELECTOR.productAddButtonId) this.$productAddTab.onClickProductAddButton();
  }
}

new VendingMachine();
