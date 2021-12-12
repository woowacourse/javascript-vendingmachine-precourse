import TabView from './TabView.js';
import vendingMachineManageTemplate from '../templates/vending-machine-manage-template.js';
import { coinIndex } from '../utils/index.js';
import { ID } from '../constants/selectors.js';

export default class VendingMachineManageTabView extends TabView {
  initialRender(vendingMachineCharge) {
    this.contentContainer.innerHTML = vendingMachineManageTemplate.main;
    this.initElements();
    this.updateVendingMachineChargeValues(vendingMachineCharge);
  }

  initElements() {
    super.initElements();
    this.amount = document.getElementById(ID.VENDING_MACHINE_MANAGE.CHARGE_AMOUNT);
    this.coin500Quantity = document.getElementById(ID.VENDING_MACHINE_MANAGE.COIN_500_QUANTITY);
    this.coin100Quantity = document.getElementById(ID.VENDING_MACHINE_MANAGE.COIN_100_QUANTITY);
    this.coin50Quantity = document.getElementById(ID.VENDING_MACHINE_MANAGE.COIN_50_QUANTITY);
    this.coin10Quantity = document.getElementById(ID.VENDING_MACHINE_MANAGE.COIN_10_QUANTITY);
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
