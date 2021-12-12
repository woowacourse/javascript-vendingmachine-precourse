import { $ } from '../utils/dom.js';
import { pickRandomCoin } from '../utils/pickRandomCoin.js';
import { change } from '../model/store.js';

class ChangeController {
  constructor(view) {
    this.view = view;
    this.bindEvent();
  }

  chargeCoin() {
    let inputMoney = this.view.getInput();
    while (inputMoney > 0) {
      let pickedCoin = pickRandomCoin();
      if (inputMoney >= pickedCoin) {
        change[`coin${pickedCoin}`] += 1;
        inputMoney -= pickedCoin;
      }
    }
    change.totalAmount = this.sumCoins();
    this.view.render();
  }

  sumCoins() {
    return change.coin500 * 500 + change.coin100 * 100 + change.coin50 * 50 + change.coin10 * 10;
  }

  bindEvent() {
    $('#vending-machine-charge-button').addEventListener('click', this.chargeCoin.bind(this));
  }
}

export default ChangeController;
