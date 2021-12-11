/* global MissionUtils */

export default class Coins {
  constructor(store, coins) {
    this.store = store;
    this.fivehundred = coins['500'];
    this.hundred = coins['100'];
    this.fifty = coins['50'];
    this.ten = coins['10'];

    this.generateCoins = (chargeAmount) => {
      let remain = chargeAmount;
      const coins = { '500': 0, '100': 0, '50': 0, '10': 0 };

      while (remain > 0) {
        const randomCoin = MissionUtils.Random.pickNumberInList([
          500, 100, 50, 10,
        ]);

        if (remain - randomCoin >= 0) {
          remain -= randomCoin;
          coins[randomCoin.toString()] = coins[randomCoin.toString()] + 1;
        }
      }

      return coins;
    };
  }

  sum() {
    return (
      this.fivehundred * 500 +
      this.hundred * 100 +
      this.fifty * 50 +
      this.ten * 10
    );
  }

  refill(chargeAmount) {
    const newCoins = this.generateCoins(chargeAmount);

    this.fivehundred += newCoins['500'];
    this.hundred += newCoins['100'];
    this.fifty += newCoins['50'];
    this.ten += newCoins['10'];
  }

  toMap() {
    return {
      '500': this.fivehundred,
      '100': this.hundred,
      '50': this.fifty,
      '10': this.ten,
    };
  }
}
