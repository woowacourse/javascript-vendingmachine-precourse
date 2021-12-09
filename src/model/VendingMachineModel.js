import { coinList } from '../utils/constant.js';

export class VendingMachineModel {
  products = JSON.parse(localStorage.getItem('products')) || [];
  coins = JSON.parse(localStorage.getItem('coins')) || {
    500: 0,
    100: 0,
    50: 0,
    10: 0,
  };
  chargeAmount = Number(JSON.parse(localStorage.getItem('charge'))) || 0;
  insertedMoney = 0;

  addProduct(productName, price, quantity) {
    this.products = [...this.products, { productName, price, quantity }];
    localStorage.setItem('products', JSON.stringify(this.products));
    return this.products;
  }

  addChargeMoney(chargeMoney) {
    this.chargeAmount += chargeMoney;
    localStorage.setItem('charge', JSON.stringify(this.chargeAmount));
    return this.chargeAmount;
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
