import { ID } from '../constants/selectors.js';
import { generateCoinsRandomly } from '../utils/index.js';
import { isValidChargeAmount } from '../utils/validations.js';
import VendingMachineManageTabView from '../views/VendingMachineManageTabView.js';

export default class VendingMachineManageTab {
  constructor(storage) {
    this.view = new VendingMachineManageTabView();
    this.storage = storage;
  }

  initialize() {
    this.view.initialRender(this.storage.vendingMachineCharge);
    this.initInputElements();
    this.setButtonClickEvent();
  }

  initInputElements() {
    this.chargeInput = document.getElementById(ID.VENDING_MACHINE_MANAGE.CHARGE_INPUT);
  }

  setButtonClickEvent() {
    const chargeButton = document.getElementById(ID.VENDING_MACHINE_MANAGE.CHARGE_BUTTON);
    chargeButton.addEventListener('click', this.onClickVendingMachineCharging.bind(this));
  }

  onClickVendingMachineCharging(e) {
    e.preventDefault();
    const amountToAdd = Number(this.chargeInput.value);
    if (!isValidChargeAmount(amountToAdd)) return;
    const coinQuantityToAdd = generateCoinsRandomly(amountToAdd);
    this.storage.addVendingMachineCharge({ amount: amountToAdd, coinQuantity: coinQuantityToAdd });
    this.view.update(this.storage.vendingMachineCharge);
  }
}
