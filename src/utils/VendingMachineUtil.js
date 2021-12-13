import { ALERT, COIN_ARR, MACHINE_MANAGE } from '../constants.js';
import VendingMachine from '../elements/VendingMachine.js';
import { checkCoin } from './validators/checkInput.js';

export default class VendingMachineUtil {
  constructor() {
    this.machine = new VendingMachine();
    this.coin = 0;
    this.coinAmount = 0;
    this.addCoin();
    this.originCoin = [0, 0, 0, 0];
  }

  addCoin() {
    this.machine.submit.addEventListener('click', e => {
      e.preventDefault();
      console.log('submit');
      if (this.getCoin(this.machine.input)) {
        this.setCoinAmount(this.coin);
        this.setRandomCoin(this.coin);
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

  setRandomCoin(coin) {
    let coinIndexArr = [0, 0, 0, 0];
    while (true) {
      let unit = MissionUtils.Random.pickNumberInList(COIN_ARR);
      let idx = COIN_ARR.indexOf(unit);
      if (unit <= coin) {
        coin -= unit;
        coinIndexArr[idx] += 1;
      }

      if (coin == 0) {
        break;
      }
    }
    this.setCoinTable(coinIndexArr);
  }

  setCoinTable(coinIndexArr) {
    coinIndexArr.forEach((v, idx) => {
      this.originCoin[idx] += v;
    });
    console.log(this.originCoin);
    this.machine.coin500.innerHTML = this.originCoin[0] + MACHINE_MANAGE.COIN_UNIT;
    this.machine.coin100.innerHTML = this.originCoin[1] + MACHINE_MANAGE.COIN_UNIT;
    this.machine.coin50.innerHTML = this.originCoin[2] + MACHINE_MANAGE.COIN_UNIT;
    this.machine.coin10.innerHTML = this.originCoin[3] + MACHINE_MANAGE.COIN_UNIT;
  }
}