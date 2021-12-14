import Coin from '../Model/Coin.js';
import CoinInputCheck from './CoinInputCheck.js';
import VendingMachineManageTemplate from './VendingMachineManageTemplate.js';

export default class VendingMachineManage {
  constructor() {
    const vendingMachineManageTemplate = new VendingMachineManageTemplate();
    this.coin = new Coin();
    document.getElementById('vending-machine-charge-button').onclick =
      this.submitCoinInput.bind(this);
  }

  submitCoinInput(e) {
    e.preventDefault();
    const inputCoin = document.getElementById(
      'vending-machine-charge-input'
    ).value;
    if (CoinInputCheck(inputCoin)) {
      this.coinInsert(Number(inputCoin));
      this.insertCoinTableData();
    }
  }

  coinInsert(inputCoin) {
    const totalCost = this.coin.additionalInputCoin(inputCoin);
    const chargeAmount = document.getElementById(
      'vending-machine-charge-amount'
    );
    chargeAmount.textContent = `${totalCost}`;
  }

  insertCoinTableData() {
    const currentCoin = this.coin.getCoin();
    this.coin.getCoinList().forEach((coinValue) => {
      document.getElementById(
        `vending-machine-coin-${coinValue}-quantity`
      ).innerHTML = `${currentCoin[coinValue]}개`;
    });
  }

  update() {
    this.coinInsert(0);
    this.insertCoinTableData();
  }

  updateScreen() {
    this.update();
    return document.getElementById('vending-machine-manage-screen');
  }
}
