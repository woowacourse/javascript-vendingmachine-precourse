import MachineManageCheck from './MachineManageCheck.js';
import MachineManageView from './MachineManageView.js';
import {
  CHANGE,
  ERROR_MESSAGE,
  FIFTY,
  FIVE_HUNDRED,
  ONE_HUNDRED,
  TEN,
  VALUES,
  ZERO,
  COINS,
} from '../../utils/constants.js';

export default class MachineManageEvent {
  static addEvent() {
    this.addMachineChargeEvent();
  }

  static storeChange(charge) {
    const change = JSON.parse(localStorage.getItem(CHANGE));

    if (localStorage.getItem(CHANGE) === null) {
      localStorage.setItem(CHANGE, JSON.stringify({ values: charge }));
    } else {
      change[VALUES] = parseInt(change[VALUES]) + parseInt(charge);
      localStorage.setItem(CHANGE, JSON.stringify(change));
    }
  }

  static storeRandomCoin(countCoin) {
    const coins = JSON.parse(localStorage.getItem(COINS));

    if (localStorage.getItem(COINS) === null) {
      localStorage.setItem(COINS, JSON.stringify({ [FIVE_HUNDRED]: countCoin[0], [ONE_HUNDRED]: countCoin[1], [FIFTY]: countCoin[2], [TEN]: countCoin[3] }));
    } else {
      coins[FIVE_HUNDRED] += countCoin[0];
      coins[ONE_HUNDRED] += countCoin[1];
      coins[FIFTY] += countCoin[2];
      coins[TEN] += countCoin[3];
      localStorage.setItem(COINS, JSON.stringify(coins));
    }
  }

  static checkCoin(remain) {
    if (remain < FIFTY) {
      return [TEN];
    }
    if (remain < ONE_HUNDRED) {
      return [TEN, FIFTY];
    }
    if (remain < FIVE_HUNDRED) {
      return [TEN, FIFTY, ONE_HUNDRED];
    }
    return [TEN, FIFTY, ONE_HUNDRED, FIVE_HUNDRED];
  }

  static countCoin(coin, countCoin) {
    if (coin === FIVE_HUNDRED) {
      countCoin[0] += 1;
    } else if (coin === ONE_HUNDRED) {
      countCoin[1] += 1;
    } else if (coin === FIFTY) {
      countCoin[2] += 1;
    } else {
      countCoin[3] += 1;
    }
  }

  static chooseRandomCoin(charge) {
    let remain = charge;
    const countCoin = [ZERO, ZERO, ZERO, ZERO];

    while (remain >= 0) {
      const coin = MissionUtils.Random.pickNumberInList(this.checkCoin(remain));
      this.countCoin(coin, countCoin);
      remain -= coin;
      if (remain === 0) {
        break;
      }
    }
    return countCoin;
  }

  static checkResult(charge, machineManageCheck) {
    if (machineManageCheck.checkAll()) {
      this.storeChange(charge);
      this.storeRandomCoin(this.chooseRandomCoin(charge));
      MachineManageView.showTable();
      MachineManageView.showChange();
    } else {
      alert(ERROR_MESSAGE);
    }
  }

  static addMachineChargeEvent() {
    document.getElementById('vending-machine-charge-button').addEventListener('click', (e) => {
      e.preventDefault();
      const charge = document.getElementById('vending-machine-charge-input').value;
      const machineManageCheck = new MachineManageCheck(charge);

      this.checkResult(charge, machineManageCheck);
    });
  }
}
