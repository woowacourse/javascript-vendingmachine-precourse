import { COINS_PRICE } from '../../constants/index.js';
import Storage from './index.js';

class CoinStorage extends Storage {
  #idxRecord = {};

  constructor(countRecord = {}) {
    super();

    COINS_PRICE.forEach((price, idx) => {
      this.appendItem({ price, count: countRecord[price] || 0 });
      this.#idxRecord[price] = idx;
    });
  }

  get countRecord() {
    return this.items.reduce(
      (acc, item) => ({ ...acc, [item.price]: item.count }),
      {}
    );
  }

  getTotalAmount() {
    return this.items.reduce((acc, item) => acc + item.price * item.count, 0);
  }

  getCoin(price) {
    return this.getItem(this.#idxRecord[price]);
  }

  addCoin(price, count = 1) {
    this.addItem(this.#idxRecord[price], count);
  }

  useCoin(price, count = 1) {
    this.useItem(this.#idxRecord[price], count);
  }
}

export default CoinStorage;
