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
    const localCoins = JSON.parse(localStorage.getItem('coins'));
    if (localCoins) {
      this.coins = localCoins.map((coin) => new Coin(...Object.values(coin)));
    }
    if (!localCoins) {
      kindsOfCoins.forEach((kind) => this.coins.push(new Coin(kind, 0)));
    }
  }

  initMenu() {
    const savedMenu = JSON.parse(localStorage.getItem('items'));
    if (savedMenu) {
      this.items = savedMenu.map((item) => new Item(...Object.values(item)));
    }
  }

  addMenu({ name, price, quantity }) {
    const item = new Item(name, price, quantity);
    this.items.push(item);
    localStorage.setItem('items', JSON.stringify(this.items));
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
    localStorage.setItem('coins', JSON.stringify(this.coins));
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
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  soldOut() {
    this.items = this.items.filter((item) => item.quantity !== 0);
  }

  caculateChange() {
    const changeArr = [];
    this.coins.forEach((coin) => {
      const max = Math.floor(this.inputMoney / coin.kinds);
      const amount = Math.min(max, coin.amount);
      this.inputMoney -= amount * coin.kinds;
      coin.change(amount);
      const change = new Coin(coin.kinds, amount);
      changeArr.push(change.obj);
    });
    localStorage.setItem('coins', JSON.stringify(this.coins));
    this.changeArr = changeArr;
  }

  get change() {
    return this.changeArr;
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
