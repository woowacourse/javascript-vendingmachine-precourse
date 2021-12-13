import { ALERT, MACHINE_MANAGE } from '../constants.js';
import VendingMachine from '../elements/VendingMachine.js';
import { checkCoin } from './validators/checkInput.js';

export default class VendingMachineUtil {
  constructor() {
    this.machine = new VendingMachine();
    this.coin = 0;
    this.coinAmount = 0;
    this.addCoin();
  }

  addCoin() {
    this.machine.submit.addEventListener('click', e => {
      e.preventDefault();
      console.log('submit');
      if (this.getCoin(this.machine.input)) {
        this.setCoinAmount(this.coin);
        console.log(this.coinAmount);
      }
    });
  }

  getCoin(input) {
    this.coin = Number(input.value);
    if (!checkCoin(this.coin)) {
      alert(ALERT.WRONG_COIN_CHARGE);
      return;
    }
    return this.coin;
  }

  setCoinAmount(coin) {
    this.coinAmount += coin;
    this.machine.amount.innerHTML = MACHINE_MANAGE.COIN_STORAGE + this.coinAmount;
  }
}
