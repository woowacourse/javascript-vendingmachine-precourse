import vendingMachineManageTemplate from '../templates/vending-machine-manage-template.js';

export default class VendingMachineManageTabView {
  constructor() {
    this.contentContainer = document.querySelector('#content-container');
  }

  render(vendingMachineCharge) {
    this.contentContainer.innerHTML = vendingMachineManageTemplate.main;
    this.initElements();
    this.renderVendingMachineChargeValues(vendingMachineCharge);
  }

  initElements() {
    this.amount = document.querySelector('#vending-machine-charge-amount');
    this.coin500Quantity = document.querySelector('#vending-machine-coin-500-quantity');
    this.coin100Quantity = document.querySelector('#vending-machine-coin-100-quantity');
    this.coin50Quantity = document.querySelector('#vending-machine-coin-50-quantity');
    this.coin10Quantity = document.querySelector('#vending-machine-coin-10-quantity');
  }

  renderVendingMachineChargeValues(vendingMachineCharge) {
    this.amount.innerText = `${vendingMachineCharge.amount}원`;
    this.coin500Quantity.innerText = `${vendingMachineCharge.coin500Quantity}개`;
    this.coin100Quantity.innerText = `${vendingMachineCharge.coin100Quantity}개`;
    this.coin50Quantity.innerText = `${vendingMachineCharge.coin50Quantity}개`;
    this.coin10Quantity.innerText = `${vendingMachineCharge.coin10Quantity}개`;
  }
}
