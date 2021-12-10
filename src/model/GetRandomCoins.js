export default class GetRandomCoins {
  constructor(coins) {
    this.coins = coins;
    this.coinsHash = {
      500: 0,
      100: 0,
      50: 0,
      10: 0,
    };
  }

  getRandomCoin = () => MissionUtils.Random.pickNumberInList([10, 50, 100, 500]);

  makeCoinsHash = () => {
    while (this.coins > 0) {
      const randomCoin = this.getRandomCoin();

      if (randomCoin <= this.coins) {
        this.coinsHash[randomCoin] += 1;
        this.coins -= randomCoin;
      }
    }
  };

  hash = () => {
    this.makeCoinsHash();

    return this.coinsHash;
  };
}
