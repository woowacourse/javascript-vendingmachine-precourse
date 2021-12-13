import VendingMachine from '../model/VendingMachine.js';
import View from '../view/View.js';

class Controller {
  constructor() {
    this.vendingMachine = new VendingMachine();
    this.view = new View();

    this.init();
  }

  init() {
    this.view.showTabMenuScreen();
    this.initDOM();
    this.triggerTabMenuClickEvent();
    this.initScreen();
  }

  initScreen() {
    const currentTabMenu = this.vendingMachine.getCurrentTabMenu();

    switch (currentTabMenu) {
      case 'product-add-menu':
        this.view.showProduceAddScreen();
        break;
      case 'vending-machine-manage-menu':
        this.view.showVendingMachineManageScreen();
        break;
      case 'product-purchase-menu':
        this.view.showProductPurchaseScreen();
        break;
    }
  }

  initDOM() {
    this.$product_purchase_menu = document.getElementById('product-purchase-menu');
    this.$vending_machine_manage_menu = document.getElementById('vending-machine-manage-menu');
    this.$produce_add_menu = document.getElementById('product-add-menu');
  }

  render(currentTabMenu) {
    if (currentTabMenu == this.vendingMachine.getCurrentTabMenu()) {
      return;
    }

    this.vendingMachine.setCurrentTabMenu(currentTabMenu);

    switch (currentTabMenu) {
      case 'product-add-menu':
        this.view.hideScreen();
        this.view.showProduceAddScreen();
        break;
      case 'vending-machine-manage-menu':
        this.view.hideScreen();
        this.view.showVendingMachineManageScreen();
        break;
      case 'product-purchase-menu':
        this.view.hideScreen();
        this.view.showProductPurchaseScreen();
        break;
    }
  }

  triggerTabMenuClickEvent() {
    this.$product_purchase_menu.addEventListener('click', (e) => {
      const currentTabMenu = e.target.id;
      this.render(currentTabMenu);
    });

    this.$vending_machine_manage_menu.addEventListener('click', (e) => {
      const currentTabMenu = e.target.id;
      this.render(currentTabMenu);
    });

    this.$produce_add_menu.addEventListener('click', (e) => {
      const currentTabMenu = e.target.id;
      this.render(currentTabMenu);
    });
  }
}

export default Controller;
