import store from '../store/index.js';

class VendingMachine {
  constructor() {
    this.tabMenu = {
      currentTabMenu: 'product-add-menu',
      product_add_menu: [],
      vending_machine_manage_menu: [],
      product_purchase_menu: [],
    };

    this.init();
  }

  init() {
    if (store.getLocalStorage()) {
      this.tabMenu = store.getLocalStorage();
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

  setCurrentTabMenu(currentTabMenu) {
    this.tabMenu['currentTabMenu'] = currentTabMenu;
    this.setLocalStorage(this.tabMenu);
  }

  getCurrentTabMenu() {
    return this.tabMenu['currentTabMenu'];
  }
}

export default VendingMachine;
