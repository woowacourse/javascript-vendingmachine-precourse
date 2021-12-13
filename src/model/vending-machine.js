import { kindsOfCoins } from '../constant/constant.js';
import Coin from './coin.js';
import Item from './item.js';

export default class VendingMachine {
  constructor() {
    this.coins = [];
    this.items = [];
    this.inputMoney = 0;
    this.init();
  }

  init() {
    this.initCoin();
    this.initMenu();
  }

  initCoin() {
    kindsOfCoins.forEach((kind) => this.coins.push(new Coin(kind, 0)));
  }

  initMenu() {}

  addMenu({ name, price, quantity }) {
    const item = new Item(name, price, quantity);
    this.items.push(item);
    return item.array;
  }

  insertChange(money) {
    let change = money;
    while (change) {
      const randomCoin = MissionUtils.Random.pickNumberInList(kindsOfCoins);
      if (randomCoin <= change) {
        const kind = this.coins.filter((coin) => coin.kinds === randomCoin);
        kind.map((coin) => coin.charge());
        change -= randomCoin;
      }
    }
  }

  insertMoney(money) {
    this.inputMoney += money;
  }

  inquirePrice(name) {
    let price;
    this.items.forEach((item) => {
      if (item.name === name) {
        price = item.price;
      }
    });
    return price;
  }

  sellItem(name) {
    this.items.forEach((item) => {
      if (item.name === name) {
        item.sell();
        this.inputMoney -= item.price;
      }
    });
    this.soldOut();
  }

  soldOut() {
    this.items = this.items.filter((item) => item.quantity !== 0);
  }

  get change() {
    const changeArr = [];
    this.coins.forEach((coin) => {
      const max = Math.floor(this.inputMoney / coin.kinds);
      const amount = Math.min(max, coin.amount);
      this.inputMoney -= amount * coin.kinds;
      coin.change(amount);
      const change = new Coin(coin.kinds, amount);
      changeArr.push(change.obj);
    });
    return changeArr;
  }

  get totalMoney() {
    return this.inputMoney;
  }

  get names() {
    return this.items.map((item) => item.name);
  }

  get menu() {
    return this.items.map((item) => item.array);
  }

  get money() {
    return this.coins.reduce((acc, cur, idx) => acc + cur.amount * kindsOfCoins[idx], 0);
  }

  get coinsArr() {
    return this.coins.map((coin) => coin.obj);
  }
}
