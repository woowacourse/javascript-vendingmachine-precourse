import { kindsOfCoins } from '../constant/constant.js';
import Coin from './coin.js';
import Item from './item.js';

export default class VendingMachine {
  constructor() {
    this.coins = [];
    this.items = [];
    this.init();
  }

  init() {
    this.initCoin();
    this.initMenu();
  }

  initCoin() {}

  initMenu() {}

  addMenu({ name, price, quantity }) {
    const item = new Item(name, price, quantity);
    this.items.push(item);
    return item.array;
  }

  insertChange(money) {}

  buyItem(item) {}

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
