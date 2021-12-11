import { cloneObject } from '../utils/data-utils.js';
import { CONSTANTS } from '../constants/constants.js';

export default class Coins {
  constructor(coinsData) {
    this._items = cloneObject(coinsData); // 사이드 이펙트를 방지한다.
  }

  add(amount) {
    let balance = Number(amount);
    while (balance > 0) {
      const coinRange = CONSTANTS.COIN_TYPE.filter((value) => value <= balance);
      const coinType = MissionUtils.Random.pickNumberInList(coinRange);

      balance -= coinType;
      const index = this._items.findIndex((value) => value.coin === coinType);
      this._items[index].quantity += 1;
    }
    return this;
  }

  return(amount) {
    const returnCoins = cloneObject(CONSTANTS.COIN_LIST);

    let balance = amount;
    this._items.forEach((value, index) => {
      if (balance < value.coin) return false;

      let compar = parseInt(balance / value.coin, 10);
      compar = compar <= value.quantity ? compar : value.quantity;
      balance -= value.coin * compar;
      this._items[index].quantity -= compar;
      returnCoins[index].quantity += compar;
    });

    return { output: returnCoins, failed: balance };
  }

  get total() {
    return this._items.reduce(
      (prev, curr) => prev + curr.coin * curr.quantity,
      0
    );
  }

  get result() {
    return [...this._items];
  }
}
