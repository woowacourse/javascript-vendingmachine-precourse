import { cloneObject } from '../utils/data-utils.js';
import { CONSTANTS } from '../constants/constants.js';

export default class Coins {
  constructor(coinsData) {
    this._items = cloneObject(coinsData); // 사이드 이펙트를 방지한다.
  }

  _getCoinTypeToIndex(coinType) {
    return this._items.findIndex((value) => value.coin === coinType);
  }

  _pickRandomCoinType(maximum) {
    const coinRange = CONSTANTS.COIN_TYPE.filter((value) => value <= maximum);
    return MissionUtils.Random.pickNumberInList(coinRange);
  }

  add(amount) {
    let balance = Number(amount);
    while (balance > 0) {
      const coinType = this._pickRandomCoinType(balance);
      balance -= coinType;

      const index = this._getCoinTypeToIndex(coinType);
      this._items[index].quantity += 1;
    }
    return this;
  }

  _getCoinLimitQuantity(balance, { coin, quantity }) {
    let compar = parseInt(balance / coin, 10);
    compar = compar <= quantity ? compar : quantity;

    return compar;
  }

  return(amount) {
    const returnCoins = cloneObject(CONSTANTS.COIN_LIST);

    let balance = amount;
    this._items.forEach((coinInfo, index) => {
      if (balance < coinInfo.coin) return false;

      const limit = this._getCoinLimitQuantity(balance, coinInfo);

      balance -= coinInfo.coin * limit;
      this._items[index].quantity -= limit;
      returnCoins[index].quantity += limit;
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
