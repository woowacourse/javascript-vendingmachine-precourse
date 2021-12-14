import VendingMachineView from './vendingMachineView.js';

export default class VendingMachine {
  constructor() {
    this.vendingMachineview = new VendingMachineView();
    this.onTabClick();
  }

  onTabClick() {
    this.vendingMachineview.manageProductTab.addEventListener('click', (e) => {
      console.log('manageProductTab');
    });
    this.vendingMachineview.changeChargeTab.addEventListener('click', (e) => {
      console.log('changeChargeTab');
    });
    this.vendingMachineview.buyProductTab.addEventListener('click', (e) => {
      console.log('buyProductTab');
    });
  }
}
