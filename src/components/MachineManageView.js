import { CHANGE, ERROR_MESSAGE, FIFTY, FIVE_HUNDRED, ONE_HUNDRED, TEN, VALUES, ZERO } from '../utils/constants.js';
import { HTML_OF_MACHINE_MANAGE_PART, HTML_OF_MACHINE_MANAGE_TABLE } from '../utils/html.js';
import MachineManageCheck from './MachineManageCheck.js';

export default class MachineManageView {
  static render() {
    document.getElementById('bottom-container').innerHTML =
      HTML_OF_MACHINE_MANAGE_PART + HTML_OF_MACHINE_MANAGE_TABLE;
  }

  static addEvent() {
    document.getElementById('vending-machine-charge-button').addEventListener('click', (e) => {
        e.preventDefault();

        const charge = document.getElementById('vending-machine-charge-input').value;


        const machineManageCheck = new MachineManageCheck(charge);
        if(machineManageCheck.checkAll()) {
            this.addChange(charge);
            this.chooseRandomCoin(charge);
        } else {
            alert(ERROR_MESSAGE);
        }
        
    });
  }

  static addChange(charge) {
      const change = JSON.parse(localStorage.getItem(CHANGE));

      if(localStorage.getItem(CHANGE) === null) {
          localStorage.setItem(CHANGE, JSON.stringify({values: charge}));
          this.showFirstChange(charge);
      } else {
          change[VALUES] = parseInt(change[VALUES]) + parseInt(charge);
          localStorage.setItem(CHANGE, JSON.stringify(change));
          this.showChange(change);
      }
  }

  static showFirstChange(charge) {
    document.getElementById('vending-machine-charge-amount').innerHTML = `${charge}원`;
  }

  static showChange(change) {
    document.getElementById('vending-machine-charge-amount').innerHTML = `${change[VALUES]}원`;
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
      console.log("500원:", countCoin[0], "100원:", countCoin[1], "50원:", countCoin[2], "10원:", countCoin[3]);
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

  static storeRandomCoin() {

  }
}
