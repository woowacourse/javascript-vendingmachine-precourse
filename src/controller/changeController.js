import { $ } from '../utils/dom.js';
import { pickRandomCoin } from '../utils/pickRandomCoin.js';
import { reservedChange, store } from '../model/store.js';
import { COIN } from '../constants/index.js';
import ChangeValidator from '../validator/changeValidator.js';

class ChangeController {
  constructor(view) {
    this.view = view;
    this.bindEvent();
  }

  chargeCoin() {
    const changeInput = this.view.getInput();
    if (ChangeValidator.isInvalidChangeInput(changeInput)) {
      return;
    }
    this.randomCharge(changeInput);
    this.view.render();
  }

  randomCharge(changeInput) {
    while (changeInput >= COIN.MIN_VALUE) {
      const pickedCoin = pickRandomCoin();
      if (changeInput >= pickedCoin) {
        reservedChange[`coin${pickedCoin}`] += COIN.ADD_1;
        changeInput -= pickedCoin;
      }
    }
    store.setLocalStorage('reservedChange', reservedChange);
  }

  bindEvent() {
    $('#vending-machine-charge-button').addEventListener('click', this.chargeCoin.bind(this));
  }
}

export default ChangeController;
