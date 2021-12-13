import store from '../store/index.js';

class VendingMachine {
  constructor() {
    this.currentTabMenu = 'product-add-menu';
    this.tabMenu = {
      produce_add_menu: [],
      vending_machine_manage_menu: [],
      product_purchase_menu: [],
    };

    this.init();
  }

  init() {
    if (store.getLocalStorage()) {
      this.menu = store.getLocalStorage();
      return;
    }

    store.setLocalStorage(this.tabMenu);
  }

  getLocalStorage() {
    return this.tabMenu;
  }

  setLocalStorage(tabMenu) {
    this.tabMenu = tabMenu;
    store.setLocalStorage(this.tabMenu);
  }

  setCurrentTabMenu(tabMenu) {
    this.currentTabMenu = tabMenu;
  }

  getCurrentTabMenu() {
    return this.currentTabMenu;
  }
}

export default VendingMachine;
