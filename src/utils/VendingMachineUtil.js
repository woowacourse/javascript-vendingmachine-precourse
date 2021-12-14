import { ALERT, COIN_ARR, MACHINE_MANAGE, ZERO } from '../constants.js';
import VendingMachine from '../elements/VendingMachine.js';
import Storage from './localStorage/Storage.js';
import { checkCoin } from './validators/checkInput.js';

export default class VendingMachineUtil {
  constructor() {
    this.machine = new VendingMachine();
    this.storage = new Storage();
    this.coin = 0;
    this.addCoin();
    this.originCoin = [0, 0, 0, 0];
    this.getCurrentCoin();
  }

  getCoin() {
    this.coinAmount = Number(this.machine.amount.dataset.machineAmount);
  }

  getCurrentCoin() {
    const current = this.storage.vendingMachinCoin;
    if (current.coin == null) {
      this.getCoin();
      return;
    }
    this.coinAmount = current.coin;
    const currentArr = [current.coin500, current.coin100, current.coin50, current.coin10];

    this.renderCoinAmount(this.coinAmount);
    this.setCoinTable(currentArr);
  }

  addCoin() {
    this.machine.submit.addEventListener('click', e => {
      e.preventDefault();
      if (this.getMachineCoin(this.machine.input)) {
        this.setCoinAmount(this.coin);
        this.renderCoinAmount(this.coinAmount);
        this.setRandomCoin(this.coin);
        this.setLocalStorage(this.originCoin, this.coinAmount);
      }
    });
  }

  getMachineCoin(input) {
    this.coin = Number(input.value);
    if (!checkCoin(this.coin)) {
      alert(ALERT.WRONG_COIN_CHARGE);
      return;
    }

    return this.coin;
  }

  setCoinAmount(coin) {
    this.coinAmount += coin;
  }

  renderCoinAmount(coinAmount) {
    this.machine.amount.innerHTML = coinAmount;
  }

  setRandomCoin(coin) {
    let remainCoin = coin;
    let coinIndexArr = [0, 0, 0, 0];
    while (remainCoin > ZERO) {
      let unit = MissionUtils.Random.pickNumberInList(COIN_ARR);
      if (unit <= remainCoin) {
        let idx = COIN_ARR.indexOf(unit);
        remainCoin -= unit;
        coinIndexArr[idx] += 1;
      }
    }

    this.setCoinTable(coinIndexArr);
  }

  setCoinTable(coinIndexArr) {
    this.mergeCoin(coinIndexArr);
    this.machine.coin500.innerHTML = this.originCoin[0] + MACHINE_MANAGE.COIN_UNIT;
    this.machine.coin100.innerHTML = this.originCoin[1] + MACHINE_MANAGE.COIN_UNIT;
    this.machine.coin50.innerHTML = this.originCoin[2] + MACHINE_MANAGE.COIN_UNIT;
    this.machine.coin10.innerHTML = this.originCoin[3] + MACHINE_MANAGE.COIN_UNIT;
  }

  mergeCoin(coinIndexArr) {
    coinIndexArr.forEach((v, idx) => {
      this.originCoin[idx] += v;
    });
  }

  setLocalStorage(originCoin, coinAmount) {
    const coin = {
      coin: coinAmount,
      coin500: originCoin[0],
      coin100: originCoin[1],
      coin50: originCoin[2],
      coin10: originCoin[3],
    };

    this.storage.updateMachineCoin(coin);
    this.renderCoinAmount(coinAmount);
  }
}
