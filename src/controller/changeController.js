import { $ } from '../utils/dom.js';
import { pickRandomCoin } from '../utils/pickRandomCoin.js';
import { reservedChange, store } from '../model/store.js';
import ChangeValidator from '../validator/changeValidator.js';

class ChangeController {
  constructor(view) {
    this.view = view;
    this.bindEvent();
  }

  chargeCoin() {
    let moneyInput = this.view.getInput();
    if (ChangeValidator.isInvalidMoneyInput(moneyInput)) {
      return;
    }
    this.randomCharge(moneyInput);
    this.view.render();
  }

  randomCharge(moneyInput) {
    while (moneyInput >= 10) {
      let pickedCoin = pickRandomCoin();
      if (moneyInput >= pickedCoin) {
        reservedChange[`coin${pickedCoin}`] += 1;
        moneyInput -= pickedCoin;
      }
    }
    store.setLocalStorage('reservedChange', reservedChange);
  }

  bindEvent() {
    $('#vending-machine-charge-button').addEventListener('click', this.chargeCoin.bind(this));
  }
}

export default ChangeController;
