import $ from '../utils/dom.js';
import store from '../utils/store.js';
import { isValidCharge, chargeMoney } from '../models/vendingMachineModel.js';
import { resetChargeInput, printChargeMoney } from '../views/vendingMachineView.js';

function HandleVendingMachine() {
  this.coins = { amount: 0, fiveHundred: 0, oneHundred: 0, fifty: 0, ten: 0 };

  this.init = () => {
    if (store.getLocalStorage('coins')) {
      this.coins = store.getLocalStorage('coins');
      printChargeMoney();
    }
  };

  $('#vending-machine-charge-button').addEventListener('click', e => {
    e.preventDefault();
    const chargeInput = $('#vending-machine-charge-input').value;

    if (isValidCharge(chargeInput)) {
      this.coins = chargeMoney(Number(chargeInput), this.coins);
      store.setLocalStorage('coins', this.coins);
      printChargeMoney();
    }
    resetChargeInput();
  });

  this.init();
}

export default HandleVendingMachine;
