import { COINS_PRICE } from '../../constants/index.js';
import Storage from './index.js';

class CoinStorage extends Storage {
  #idxRecord = {};

  constructor() {
    super();

    COINS_PRICE.forEach((price, idx) => {
      this.appendItem({ price, count: 0 });
      this.#idxRecord[String(price)] = idx;
    });
  }

  #getPriceIdx(price) {
    return this.#idxRecord[String(price)];
  }

  getCoin(price) {
    return this.getItem(this.#getPriceIdx(price));
  }

  addCoin(price, count = 1) {
    this.addItem(this.#getPriceIdx(price), count);
  }

  useCoin(price, count = 1) {
    this.useItem(this.#getPriceIdx(price), count);
  }
}

export default CoinStorage;
