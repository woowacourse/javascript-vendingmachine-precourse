import VendingMachineView from './view/vendingMachineView.js';
import ManageTab from './tabs/manageTab.js';
import BuyProductTab from './tabs/buyProductTab.js';
import ChangeChargeTab from './tabs/changeChargeTab.js';

export default class VendingMachine {
  constructor() {
    this.vendingMachineview = new VendingMachineView();
  }

  init() {
    this.vendingMachineview.render();
    this.initTab();
    this.onTabClick();
  }

  onTabClick() {
    this.vendingMachineview.manageProductTab.addEventListener('click', (e) => {
      this.manageTab.init();
    });
    this.vendingMachineview.changeChargeTab.addEventListener('click', (e) => {
      this.changeChargeTab.init();
    });
    this.vendingMachineview.buyProductTab.addEventListener('click', (e) => {
      this.buyProductTab.init();
    });
  }

  initTab() {
    this.manageTab = new ManageTab();
    this.changeChargeTab = new ChangeChargeTab();
    this.buyProductTab = new BuyProductTab();
  }
}
