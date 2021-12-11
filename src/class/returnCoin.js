import { updateReturnCoinTable } from '../dom/control/updateReturnCoinTable.js';
import { updateUserChargeAmount } from '../dom/control/updateUserChargeAmount.js';
import {
  updateVendingMachineCharge,
  updateVendingMachineTable,
} from '../dom/control/updateVendingMachineChargeTable.js';
import { vendingMachine } from '../index.js';
import { saveUserCharge } from '../localStorage/userCharge.js';
import { saveCharges } from '../localStorage/vendingMachineCharge.js';

export default class ReturnCoin {
  static returnedCoins = {
    500: 0,
    100: 0,
    50: 0,
    10: 0,
  };

  static returnCoin() {
    if (vendingMachine.userAmount <= 0) {
      alert('반환할 잔액이 없습니다.');
      return;
    }

    ReturnCoin.pickCoin();
    ReturnCoin.resetReturnedCoins();
  }

  static pickCoin() {
    const coins = [500, 100, 50, 10];

    coins.forEach((coin) => {
      while (vendingMachine.coins[coin] > 0 && vendingMachine.userAmount > 0) {
        vendingMachine.userAmount -= coin;
        vendingMachine.amount -= coin;
        vendingMachine.coins[coin] -= 1;
        ReturnCoin.returnedCoins[coin] += 1;
      }
    });

    saveUserCharge();
    saveCharges();
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
