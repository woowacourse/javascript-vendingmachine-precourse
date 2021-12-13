import $ from '../utils/dom.js';
import store from '../utils/store.js';
import chargeMoney from '../models/vendingMachineModel.js';
import { resetChargeInput, printChargeMoney } from '../views/vendingMachineView.js';
import { ERROR, PRICE, CHARGE } from '../utils/constants.js';

function HandleVendingMachine() {
  this.coins = { amount: 0, fiveHundred: 0, oneHundred: 0, fifty: 0, ten: 0 };

  this.init = () => {
    if (store.getLocalStorage('coins')) {
      this.coins = store.getLocalStorage('coins');
      printChargeMoney();
    }
  };

  const isValidCharge = chargeInput => {
    if (chargeInput === '') {
      alert(ERROR.CHARGE_BLANK);
      return false;
    }
    if (Number(chargeInput) < CHARGE.LEAST_INPUT_PRICE) {
      alert(ERROR.CHARGE_LEAST_TEN);
      return false;
    }
    if (Number(chargeInput % PRICE.TEN_WON !== 0)) {
      alert(ERROR.CHARGE_SHOULD_DIVIDED_INTO_TEN);
      return false;
    }
    return true;
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
