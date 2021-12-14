import Observable from './observable.js';
import CoinStorage from './storage/coinStorage.js';

class UserAgent extends Observable {
  amount;

  returnedCoinStorage;

  constructor(amount = 0, coinCount = {}) {
    super();
    this.amount = amount;
    this.returnedCoinStorage = new CoinStorage(coinCount);
  }

  charge(amount) {
    this.amount += amount;
  }

  canSpend(price) {
    return this.amount >= price;
  }

  spend(price) {
    this.amount -= price;
  }
}

export default UserAgent;
