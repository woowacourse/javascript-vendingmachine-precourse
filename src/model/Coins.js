export default class Coins {
  constructor(coinAmount, coinsHash) {
    this.totalCoinAmount = coinAmount;
    this.totalCoinsHash = coinsHash;
  }

  getRandomCoin = () => MissionUtils.Random.pickNumberInList([10, 50, 100, 500]);

  makeRandomCoins = (currentCoinAmount) => {
    while (currentCoinAmount > 0) {
      const randomCoin = this.getRandomCoin();

      if (randomCoin <= currentCoinAmount) {
        this.totalCoinsHash[randomCoin] += 1;
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
    this.totalCoinsHash[10] -= coin10;
    this.totalCoinsHash[50] -= coin50;
    this.totalCoinsHash[100] -= coin100;
    this.totalCoinsHash[500] -= coin500;
  };

  replaceCoinAmount = (coinAmount) => {
    this.totalCoinAmount = coinAmount;
  };

  getCoinAmount = () => this.totalCoinAmount;

  getCoinsHash = () => this.totalCoinsHash;

  getCoins = () => Object.values(this.totalCoinsHash);
}
