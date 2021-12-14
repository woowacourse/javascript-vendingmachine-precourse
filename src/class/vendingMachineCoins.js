/* eslint-disable no-undef */
const coinTypes = [500, 100, 50, 10];

export default class VendingMachineCoins {
  constructor() {
    this.coins = {};
    this.initCoins();
  }

  initCoins() {
    const saved = localStorage.getItem("vendingMachineCoins");
    if (saved !== null) {
      this.coins = JSON.parse(saved);
      return;
    }

    coinTypes.forEach((coin) => {
      this.coins[coin] = 0;
    });
    this.saveCoins();
  }

  saveCoins() {
    localStorage.setItem("vendingMachineCoins", JSON.stringify(this.coins));
  }

  addCoins(amount) {
    let chargeAmount = amount;
    while (chargeAmount > 0) {
      const randCoin = this.getRandomCoin();
      if (chargeAmount >= randCoin) {
        this.coins[randCoin] += 1;
        chargeAmount -= randCoin;
      }
    }
    this.saveCoins();
  }

  removeCoins(amount) {
    let currAmount = amount;
    const changeCoins = {};
    for (let i = 0; i < coinTypes.length; i += 1) {
      const coinCount = Math.min(
        Math.floor(currAmount / coinTypes[i]),
        this.coins[coinTypes[i]]
      );
      changeCoins[coinTypes[i]] = coinCount;
      this.coins[coinTypes[i]] -= coinCount;
      currAmount -= coinCount * coinTypes[i];
    }
    this.saveCoins();
    return changeCoins;
  }

  getRandomCoin() {
    return MissionUtils.Random.pickNumberInList(coinTypes);
  }

  getCoins() {
    return this.coins;
  }
}
