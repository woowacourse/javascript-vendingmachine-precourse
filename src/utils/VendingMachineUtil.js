import { ALERT } from '../constants.js';
import VendingMachine from '../elements/VendingMachine.js';
import { checkCoin } from './validators/checkInput.js';

export default class VendingMachineUtil {
  constructor() {
    this.machine = new VendingMachine();
    this.coin = 0;
    this.addCoin();
  }

  addCoin() {
    this.machine.submit.addEventListener('click', e => {
      e.preventDefault();
      console.log('submit');
      this.getCoin(this.machine.input);
    });
  }

  getCoin(input) {
    this.coin = input.value;
    if (!checkCoin(this.coin)) {
      alert(ALERT.WRONG_COIN_CHARGE);
    }
    console.log(this.coin);
  }
}
