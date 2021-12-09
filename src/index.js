import ProductAddTab from './components/ProductAddTab.js';
import VendingMachineManageTab from './components/VendingMachineManageTab.js';
import ProductPurchaseTab from './components/ProductPurchaseTab.js';
import {
  createVendingMachineHeader,
  createTabButtons,
  createTabContentContainer,
} from './view/common.js';
import { SELECTOR, LOCAL_STORAGE_KEY } from './constants.js';
import { $ } from './utils/dom.js';
import store from './utils/store.js';

class VendingMachine {
  constructor() {
    createVendingMachineHeader();
    createTabButtons();
    createTabContentContainer();
    this.$currentTab = store.getLocalStorage(LOCAL_STORAGE_KEY.currentTab)
      ? store.getLocalStorage(LOCAL_STORAGE_KEY.currentTab)
      : SELECTOR.productAddMenuId;
    this.$productAddTab = new ProductAddTab();
    this.$vendingMachineManageTab = new VendingMachineManageTab();
    this.$productPurchaseTab = new ProductPurchaseTab();
    this.render();
    this.addEventListeners();
  }

  render() {
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
  }

  onClickTabButton(event) {
    const tabId = event.target.id;
    this.$currentTab = tabId;
    store.setLocalStorage(LOCAL_STORAGE_KEY.currentTab, tabId);
    this.render();
  }
}

new VendingMachine();
