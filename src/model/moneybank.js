import Coin from './coin.js';

export default class MoneyBank {
  constructor() {
    this.coins = [new Coin(10, 0), new Coin(50, 0), new Coin(100, 0), new Coin(500, 0)];
    this.money = 0;
    this.insertedMoney = 0;
  }

  chargeMoney(money) {
    this.money += Number(money);
    localStorage.setItem('money', this.money);
  }

  chargeCoins(coinArray) {
    for (let i = 0; i < 4; i += 1) {
      this.coins[i].quantity += Number(coinArray[i]);
    }
    localStorage.setItem('10', this.coins[0].quantity);
    localStorage.setItem('50', this.coins[1].quantity);
    localStorage.setItem('100', this.coins[2].quantity);
    localStorage.setItem('500', this.coins[3].quantity);
  }

  updateMoney() {
    const storedMoney = Number(localStorage.getItem('money'));
    if (storedMoney > 0) {
      this.money = storedMoney;
    } else {
      this.initMoney();
    }
  }

  initMoney() {
    localStorage.setItem('money', 0);
    localStorage.setItem('10', 0);
    localStorage.setItem('50', 0);
    localStorage.setItem('100', 0);
    localStorage.setItem('500', 0);
  }

  updateCoins() {
    this.coins[0].quantity = Number(localStorage.getItem('10'));
    this.coins[1].quantity = Number(localStorage.getItem('50'));
    this.coins[2].quantity = Number(localStorage.getItem('100'));
    this.coins[3].quantity = Number(localStorage.getItem('500'));
  }

  updateInsertedMoney() {
    const insertedMoney = Number(localStorage.getItem('insertedMoney'));
    if (insertedMoney > 0) {
      this.insertedMoney = insertedMoney;
    } else {
      localStorage.setItem('insertedMoney', 0);
    }
  }

  updateAll() {
    this.updateMoney();
    this.updateCoins();
    this.updateInsertedMoney();
  }

  insertMoney(money) {
    this.insertedMoney += Number(money);
    localStorage.setItem('insertedMoney', this.insertedMoney);
  }

  useInsertedMoney(productPrice) {
    this.insertedMoney -= Number(productPrice);
    localStorage.setItem('insertedMoney', this.insertedMoney);
  }

  useMoney(returnMoney) {
    if (this.money >= Number(returnMoney)) {
      this.money -= Number(returnMoney);
    } else {
      this.money = 0;
    }
    localStorage.setItem('money', this.money);
  }

  returnCoins(money) {
    this.insertedMoney = 0;
    localStorage.setItem('insertedMoney', this.insertedMoney);
    this.useMoney(money);
    const returnCoins = [0, 0, 0, 0];
    let leftMoney = money;
    for (let i = 3; i >= 0; i -= 1) {
      while (leftMoney >= this.coins[i].value && this.coins[i].quantity !== 0) {
        this.coins[i].quantity -= 1;
        leftMoney -= this.coins[i].value;
        returnCoins[i] += 1;
      }
      localStorage.setItem(this.coins[i].value, this.coins[i].quantity);
    }
    return returnCoins;
  }
}