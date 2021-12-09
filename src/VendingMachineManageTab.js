import VendingMachineManageTabView from './views/VendingMachineManageTabView.js';

export default class VendingMachineManageTab {
  constructor() {
    this.view = new VendingMachineManageTabView();
  }

  initialize() {
    this.view.render();
  }
}
