import TabView from './TabView.js';
import vendingMachineManageTemplate from '../templates/vending-machine-manage-template.js';
import { coinIndex } from '../utils/index.js';

export default class VendingMachineManageTabView extends TabView {
  initialRender(vendingMachineCharge) {
    this.contentContainer.innerHTML = vendingMachineManageTemplate.main;
    this.initElements();
    this.updateVendingMachineChargeValues(vendingMachineCharge);
  }

  initElements() {
    super.initElements();
    this.amount = document.querySelector('#vending-machine-charge-amount');
    this.coin500Quantity = document.querySelector('#vending-machine-coin-500-quantity');
    this.coin100Quantity = document.querySelector('#vending-machine-coin-100-quantity');
    this.coin50Quantity = document.querySelector('#vending-machine-coin-50-quantity');
    this.coin10Quantity = document.querySelector('#vending-machine-coin-10-quantity');
  }

  update(vendingMachineCharge) {
    this.updateVendingMachineChargeValues(vendingMachineCharge);
    this.clearAllInput();
  }

  updateVendingMachineChargeValues(vendingMachineCharge) {
    this.amount.innerText = `${vendingMachineCharge.amount}원`;
    this.coin500Quantity.innerText = `${vendingMachineCharge.coinQuantity[coinIndex(500)]}개`;
    this.coin100Quantity.innerText = `${vendingMachineCharge.coinQuantity[coinIndex(100)]}개`;
    this.coin50Quantity.innerText = `${vendingMachineCharge.coinQuantity[coinIndex(50)]}개`;
    this.coin10Quantity.innerText = `${vendingMachineCharge.coinQuantity[coinIndex(10)]}개`;
  }
}
