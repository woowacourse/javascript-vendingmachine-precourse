import $ from '../utils/dom.js';
import store from '../utils/store.js';
import { ERROR, PRICE, CHARGE } from '../utils/constants.js';
import { Coin, chargeMoney } from '../models/vendingMachineModel.js';
import { resetChargeInput, renderChargeMoney } from '../views/vendingMachineView.js';
import alertMessage from '../views/alertMessage.js';

export default function HandleVendingMachine() {
  this.coins = new Coin();

  this.init = () => {
    if (store.getLocalStorage('coins')) {
      this.coins = store.getLocalStorage('coins');
      renderChargeMoney();
    }
  };

  const isValidCharge = chargeInput => {
    if (chargeInput === '') {
      alertMessage(ERROR.CHARGE_BLANK);
      return false;
    }
    if (Number(chargeInput) < CHARGE.LEAST_INPUT_PRICE) {
      alertMessage(ERROR.CHARGE_LEAST_TEN);
      return false;
    }
    if (Number(chargeInput % PRICE.TEN_WON !== 0)) {
      alertMessage(ERROR.CHARGE_SHOULD_DIVIDED_INTO_TEN);
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
      renderChargeMoney();
    }
    resetChargeInput();
  });

  this.init();
}
