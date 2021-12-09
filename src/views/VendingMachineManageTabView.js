import vendingMachineManageTemplate from '../templates/vending-machine-manage-template.js';

export default class VendingMachineManageTabView {
  constructor() {
    this.contentContainer = document.querySelector('#content-container');
  }

  render() {
    this.contentContainer.innerHTML = vendingMachineManageTemplate.main;
  }
}
