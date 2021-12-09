import { coinList } from '../utils/constant.js';

export class VendingMachineModel {
  products = JSON.parse(localStorage.getItem('products')) || [];
  coins = JSON.parse(localStorage.getItem('coins')) || {
    500: 0,
    100: 0,
    50: 0,
    10: 0,
  };
  machineChargeAmount = Number(JSON.parse(localStorage.getItem('machineCharge'))) || 0;
  totalInsertedMoney = 0;

  addProduct(productName, price, quantity) {
    this.products = [...this.products, { productName, price, quantity }];
    localStorage.setItem('products', JSON.stringify(this.products));
    return this.products;
  }

  addChargeMoney(chargeMoney) {
    this.machineChargeAmount += chargeMoney;
    localStorage.setItem('machineCharge', JSON.stringify(this.machineChargeAmount));
    return this.machineChargeAmount;
  }

  addInsertedMoney(insertedMoney) {
    this.totalInsertedMoney += insertedMoney;
    return this.totalInsertedMoney;
  }

  addCoin(chargeMoney) {
    while (chargeMoney > 0) {
      const randomCoin = MissionUtils.Random.pickNumberInList(coinList);
      if (chargeMoney - randomCoin >= 0) {
        chargeMoney -= randomCoin;
        this.coins[randomCoin]++;
      }
    }
    localStorage.setItem('coins', JSON.stringify(this.coins));
    return this.coins;
  }
}
