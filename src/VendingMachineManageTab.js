import { getVendingMachineCharge } from './utils/localStorage.js';
import VendingMachineManageTabView from './views/VendingMachineManageTabView.js';

export default class VendingMachineManageTab {
  constructor() {
    this.view = new VendingMachineManageTabView();
  }

  initialize() {
    this.vendingMachineCharge = getVendingMachineCharge();
    this.view.render(this.vendingMachineCharge);
  }
}
