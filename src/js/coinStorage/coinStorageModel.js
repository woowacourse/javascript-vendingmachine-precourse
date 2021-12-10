import { getLocalStorage, setLocalStorage } from "../util/localStorage.js";

export default class CoinStorageModel {
  constructor() {
    this.coins = getLocalStorage("coin") ?? { 500: 0, 100: 0, 50: 0, 10: 0 };
  }

  addMoney = (money) => {
    if (this.isNotPositiveNumber(money)) {
      throw new Error("금액은 0이하이면 안됩니다");
    }
    if (this.isNotPriceDividedByTen(money)) {
      throw new Error("10으로 나누어 떨어지는 금액을 입력해주세요");
    }

    this.addCoin(money);
    setLocalStorage("coin", this.coins);
  };

  addCoin = (money) => {
    let remainingMoney = money;
    while (remainingMoney > 0) {
      const coin = MissionUtils.Random.pickNumberInList([500, 100, 50, 10]);
      remainingMoney = this.calculateCoin(remainingMoney, coin);
    }
  };

  calculateCoin = (remainingMoney, coin) => {
    if (remainingMoney >= coin) {
      remainingMoney -= coin;
      this.coins[coin] += 1;
    }

    return remainingMoney;
  };

  returnChanges = (money) => {
    const returnedCoins = this.getChanges(money);
    this.returnCoins(returnedCoins);

    return returnedCoins;
  };

  getChanges = (money) => {
    let remainingMoney = money;
    const sortedCoin = Object.keys(this.coins).sort((a, b) => b - a);

    return sortedCoin.reduce((acc, coin) => {
      const maxAvailableAmount = Math.floor(remainingMoney / coin);
      const coinAmount = this.coins[coin];
      const amount = this.calculateAvailableAmount(maxAvailableAmount, coinAmount);
      remainingMoney -= amount * coin;
      return { ...acc, [coin]: amount };
    }, {});
  };

  calculateAvailableAmount = (maxAvailableAmount, coinAmount) => {
    if (coinAmount > maxAvailableAmount) {
      return maxAvailableAmount;
    }

    return coinAmount;
  };

  returnCoins = (returnedCoins) => {
    Object.entries(returnedCoins).forEach(([coin, count]) => {
      this.coins[coin] -= count;
    });
    setLocalStorage("coin", this.coins);
  };

  getTotalMoney = () => {
    return Object.entries(this.coins).reduce((sum, [coin, quantity]) => sum + coin * quantity, 0);
  };

  isNotPositiveNumber = (money) => {
    return money <= 0;
  };

  isNotPriceDividedByTen = (money) => {
    return money % 10 !== 0;
  };
}
