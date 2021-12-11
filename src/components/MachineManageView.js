import { CHANGE, ERROR_MESSAGE, FIFTY, FIVE_HUNDRED, ONE_HUNDRED, TEN, VALUES, ZERO, COINS } from '../utils/constants.js';
import { HTML_OF_MACHINE_MANAGE_PART, HTML_OF_MACHINE_MANAGE_TABLE } from '../utils/html.js';
import MachineManageCheck from './MachineManageCheck.js';

export default class MachineManageView {
  static render() {
    this.showPage();
    if(localStorage.getItem(CHANGE) !== null && localStorage.getItem(COINS)) {
        this.showChange();
        this.showTable();
    }
  }

  static showPage() {
    document.getElementById('bottom-container').innerHTML =
    HTML_OF_MACHINE_MANAGE_PART + HTML_OF_MACHINE_MANAGE_TABLE;
  }

  static showChange() {
    const change = JSON.parse(localStorage.getItem(CHANGE));

    document.getElementById('vending-machine-charge-amount').innerHTML = `${change[VALUES]}`;
  }

  static showTable() {
    const coins = JSON.parse(localStorage.getItem(COINS));

    document.getElementById('vending-machine-coin-500-quantity').innerHTML = `${coins[FIVE_HUNDRED]}개`;
    document.getElementById('vending-machine-coin-100-quantity').innerHTML = `${coins[ONE_HUNDRED]}개`;
    document.getElementById('vending-machine-coin-50-quantity').innerHTML = `${coins[FIFTY]}개`;
    document.getElementById('vending-machine-coin-10-quantity').innerHTML = `${coins[TEN]}개`;
}

  static addMachineChargeEvent() {
    document.getElementById('vending-machine-charge-button').addEventListener('click', (e) => {
        e.preventDefault();
        const charge = document.getElementById('vending-machine-charge-input').value;
        const machineManageCheck = new MachineManageCheck(charge);

        this.checkResult(charge, machineManageCheck);
    });
  }

  static checkResult(charge, machineManageCheck) {
    if(machineManageCheck.checkAll()) {
        this.storeChange(charge);
        this.storeRandomCoin(this.chooseRandomCoin(charge));
        this.showTable();
        this.showChange();
    } else {
        alert(ERROR_MESSAGE);
    }
  }

  static storeChange(charge) {
      const change = JSON.parse(localStorage.getItem(CHANGE));

      if(localStorage.getItem(CHANGE) === null) {
          localStorage.setItem(CHANGE, JSON.stringify({values: charge}));
      } else {
          change[VALUES] = parseInt(change[VALUES]) + parseInt(charge);
          localStorage.setItem(CHANGE, JSON.stringify(change));
      }
  }

  static chooseRandomCoin(charge) {
      let remain = charge;
      let countCoin = [ZERO, ZERO, ZERO, ZERO];

      while(remain >= 0){
        const coin = MissionUtils.Random.pickNumberInList(this.checkCoin(remain));        
        this.countCoin(coin, countCoin);
        remain -= coin;
        if(remain === 0) {
            break;
        }
      }
    return countCoin;
  }

  static checkCoin(remain) {
    if(remain < FIFTY) {
        return [TEN];
    } else if(remain < ONE_HUNDRED) {
        return [TEN, FIFTY];
    } else if(remain < FIVE_HUNDRED) {
        return [TEN, FIFTY, ONE_HUNDRED];
    } else {
        return [TEN, FIFTY, ONE_HUNDRED, FIVE_HUNDRED];
    }
  }

  static countCoin(coin, countCoin) {
      if(coin === FIVE_HUNDRED) {
          countCoin[0] += 1;
      } else if(coin === ONE_HUNDRED) {
          countCoin[1] += 1;
      } else if(coin === FIFTY) {
          countCoin[2] += 1;
      } else {
          countCoin[3] += 1;
      }
  }

  static storeRandomCoin(countCoin) {
      const coins = JSON.parse(localStorage.getItem(COINS));

      if(localStorage.getItem(COINS) === null) {
        localStorage.setItem(COINS, JSON.stringify({ [FIVE_HUNDRED]: countCoin[0], [ONE_HUNDRED]: countCoin[1], [FIFTY]: countCoin[2], [TEN]: countCoin[3]}));
      } else {
          coins[FIVE_HUNDRED] += countCoin[0];
          coins[ONE_HUNDRED] += countCoin[1];
          coins[FIFTY] += countCoin[2];
          coins[TEN] += countCoin[3];
          localStorage.setItem(COINS, JSON.stringify(coins));
      }
  }
}
