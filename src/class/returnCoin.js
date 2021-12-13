import updateReturnCoinTable from '../dom/update/updateReturnCoinTable.js';
import updateUserChargeAmount from '../dom/update/updateUserCharge.js';
import {
  updateVendingMachineCharge,
  updateVendingMachineTable,
} from '../dom/update/updateVendingMachineCharge.js';
import { vendingMachine } from '../index.js';
import { saveUserCharge } from '../storage/userCharge.js';
import { saveCharges } from '../storage/vendingMachineCharge.js';
import { COINS } from '../constants/data.js';
import { ACTION_WITHDRAW } from '../constants/action.js';
import { ALERT_NO_USER_AMOUNT } from '../constants/alert.js';

export default class ReturnCoin {
  static returnedCoins = {
    500: 0,
    100: 0,
    50: 0,
    10: 0,
  };

  static returnCoin() {
    if (vendingMachine.userAmount <= 0) {
      alert(ALERT_NO_USER_AMOUNT);
      return;
    }

    ReturnCoin.pickCoin();
    ReturnCoin.updateModel();
    ReturnCoin.updateView();
    ReturnCoin.resetReturnedCoins();
  }

  static pickCoin() {
    COINS.forEach(coin => {
      while (vendingMachine.coins[coin] > 0 && vendingMachine.userAmount > 0) {
        vendingMachine.updateUserAmountModel(ACTION_WITHDRAW, coin);
        vendingMachine.updateVendingMachineChargeModel(ACTION_WITHDRAW, coin);
        ReturnCoin.returnedCoins[coin] += 1;
      }
    });
  }

  static updateModel() {
    saveUserCharge();
    saveCharges();
  }

  static updateView() {
    updateReturnCoinTable();
    updateUserChargeAmount();
    updateVendingMachineCharge();
    updateVendingMachineTable();
  }

  static resetReturnedCoins() {
    ReturnCoin.returnedCoins = {
      500: 0,
      100: 0,
      50: 0,
      10: 0,
    };
  }
}
