import VendingMachineView from './views/VendingMachineView.js';

export default class VendingMachine {
  constructor() {
    this.view = new VendingMachineView();
  }

  initialize() {
    this.view.render();
    this.setMenuClickEvent();
  }

  setMenuClickEvent() {
    this.view.productAddMenu.addEventListener('click', () => { console.log('product-add-menu'); });
    this.view.vendingMachineManageMenu.addEventListener('click', () => { console.log('vending-machine-manage-menu'); });
    this.view.productPurchaseMenu.addEventListener('click', () => { console.log('product-purchase-menu'); });
  }
}
