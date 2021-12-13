class VendingMachine {
  constructor() {
    this.currentTabMenu = 'product-add-menu';
  }

  setCurrentTabMenu(tabMenu) {
    this.currentTabMenu = tabMenu;
  }

  getCurrentTabMenu() {
    return this.currentTabMenu;
  }
}

export default VendingMachine;
