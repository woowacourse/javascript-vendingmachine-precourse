/* global MissionUtils */

export default class Coins {
  constructor(store, coins) {
    this.store = store;
    this.fivehundred = coins['500'];
    this.hundred = coins['100'];
    this.fifty = coins['50'];
    this.ten = coins['10'];

    this.convertToCoins = (chargingAmount) => {
      let remain = chargingAmount;
      const convertedCoins = { '500': 0, '100': 0, '50': 0, '10': 0 };

      while (remain > 0) {
        const randomCoin = MissionUtils.Random.pickNumberInList([
          500, 100, 50, 10,
        ]);

        if (remain - randomCoin >= 0) {
          remain -= randomCoin;
          convertedCoins[randomCoin.toString()] =
            convertedCoins[randomCoin.toString()] + 1;
        }
      }

      return convertedCoins;
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

  // TODO: 예외 처리
  refill(chargeAmount) {
    const newCoins = this.convertToCoins(chargeAmount);

    this.fivehundred += newCoins['500'];
    this.hundred += newCoins['100'];
    this.fifty += newCoins['50'];
    this.ten += newCoins['10'];
    this.store.updateCoins(this.toMap());

    return this;
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
