export default class Coins {
  constructor(coinAmount = { 500: 0, 100: 0, 50: 0, 10: 0 }, coinsHash = 0) {
    this.totalCoinsHash = coinsHash;
    this.totalCoinAmount = coinAmount;
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

  getCoinAmount = () => this.totalCoinAmount;

  getCoins = () => Object.values(this.totalCoinsHash);
}
