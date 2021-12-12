import { COIN, NUMBER } from '../utils/constant.js';

export default class Coins {
  constructor(coinAmount, coinsHash) {
    this.totalCoinAmount = coinAmount;
    this.totalCoinsHash = coinsHash;
  }

  getRandomCoin = () => MissionUtils.Random.pickNumberInList(COIN.LIST);

  makeRandomCoins = (currentCoinAmount) => {
    while (currentCoinAmount > NUMBER.ZERO) {
      const randomCoin = this.getRandomCoin();

      if (randomCoin <= currentCoinAmount) {
        this.totalCoinsHash[randomCoin] += NUMBER.ONE;
        currentCoinAmount -= randomCoin;
      }
    }
  };

  setCoinAmount = (currentCoinAmount) => {
    this.makeRandomCoins(currentCoinAmount);
    this.totalCoinAmount += currentCoinAmount;
  };

  replaceCoinsHash = (coinsHash) => {
    const [coin10, coin50, coin100, coin500] = Object.values(coinsHash);
    this.totalCoinsHash[NUMBER.COIN_10] -= coin10;
    this.totalCoinsHash[NUMBER.COIN_50] -= coin50;
    this.totalCoinsHash[NUMBER.COIN_100] -= coin100;
    this.totalCoinsHash[NUMBER.COIN_500] -= coin500;
  };

  replaceCoinAmount = (coinAmount) => {
    this.totalCoinAmount = coinAmount;
  };

  getCoinAmount = () => this.totalCoinAmount;

  getCoinsHash = () => this.totalCoinsHash;

  getCoins = () => Object.values(this.totalCoinsHash);
}
