import CoinStorage from './storage/coinStorage.js';

class UserAgent {
  amount;

  returnedCoinStorage;

  constructor(amount = 0, coinCount = {}) {
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
