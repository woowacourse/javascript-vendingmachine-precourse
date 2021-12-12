import { $ } from '../utils/dom.js';
import { pickRandomCoin } from '../utils/pickRandomCoin.js';
import { change, store } from '../model/store.js';
import ChangeValidator from '../utils/changeValidator.js';

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
    while (moneyInput > 0) {
      let pickedCoin = pickRandomCoin();
      if (moneyInput >= pickedCoin) {
        change[`coin${pickedCoin}`] += 1;
        moneyInput -= pickedCoin;
      }
    }
    change.totalAmount = this.sumCoins();
    store.setLocalStorage('change', change);
  }

  sumCoins() {
    return change.coin500 * 500 + change.coin100 * 100 + change.coin50 * 50 + change.coin10 * 10;
  }

  bindEvent() {
    $('#vending-machine-charge-button').addEventListener('click', this.chargeCoin.bind(this));
  }
}

export default ChangeController;
