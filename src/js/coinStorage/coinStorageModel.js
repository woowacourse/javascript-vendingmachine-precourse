import { getLocalStorage, setLocalStorage } from "../util/localStorage.js";
import { checkValidChargeMoney } from "../util/validator.js";
import { COIN_LIST, LOCAL_STORAGE_KEY } from "../util/constant.js";

export default class CoinStorageModel {
  constructor() {
    this.coins = getLocalStorage(LOCAL_STORAGE_KEY.COIN) ?? { 500: 0, 100: 0, 50: 0, 10: 0 };
  }

  getCoins = () => {
    return this.coins;
  };

  addMoney = (money) => {
    checkValidChargeMoney(money);

    this.addCoin(money);
    setLocalStorage(LOCAL_STORAGE_KEY.COIN, this.coins);
  };

  addCoin = (money) => {
    let remainingMoney = money;
    while (remainingMoney > 0) {
      const coin = MissionUtils.Random.pickNumberInList(COIN_LIST);
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
    setLocalStorage(LOCAL_STORAGE_KEY.COIN, this.coins);
  };

  getTotalMoney = () => {
    return Object.entries(this.coins).reduce((sum, [coin, quantity]) => sum + coin * quantity, 0);
  };
}
