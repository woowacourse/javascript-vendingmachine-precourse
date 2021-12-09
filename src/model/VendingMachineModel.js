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

  updateCharge(chargeMoney) {
    this.addChargeMoney(chargeMoney);
    this.addCoin(chargeMoney);
  }

  addChargeMoney(chargeMoney) {
    // 총 금액을 충천
    // 충전된 만큼 동전 추가
    this.chargeAmount += chargeMoney;
    localStorage.setItem('charge', JSON.stringify(this.chargeAmount));
    return this.chargeAmount;
  }

  addCoin(chargeMoney) {
    while (chargeMoney > 0) {
      const randomCoin = MissionUtils.Random.pickNumberInList(coinList);
      console.log(`randomCoin`, randomCoin);
      if (chargeMoney - randomCoin >= 0) {
        chargeMoney -= randomCoin;
        console.log(this.coins[randomCoin]);
        this.coins[randomCoin]++;
      }
    }
    console.log(`coins`, this.coins);
    localStorage.setItem('coins', JSON.stringify(this.coins));
    return this.coins;
  }
}
