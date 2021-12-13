import Coin from './coin.js';

export default class MoneyBank {
  constructor() {
    this.coins = [new Coin(10,0), new Coin(50,0), new Coin(100,0), new Coin(500,0)];
    this.money = 0;
  }

  chargeMoney(money) {
    this.money += Number(money);
    localStorage.setItem('money',this.money);
  }

  updateMoney(){
    const storedMoney = Number(localStorage.getItem('money'));
    console.log(`storedMoney: ${storedMoney}`);
    if (storedMoney > 0) {
      this.money = storedMoney; 
    } else {
      this.initMoney();
    }
  }

  initMoney(){
    localStorage.setItem('money',0);
  }
}