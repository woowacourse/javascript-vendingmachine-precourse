/* global MissionUtils */

import divmod from '../utils/divmod.js';

export default class Coins {
  // TODO: map 객체로 수정
  constructor(coins) {
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
          convertedCoins[String(randomCoin)] =
            convertedCoins[String(randomCoin)] + 1;
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
  }

  toMap() {
    return {
      '500': this.fivehundred,
      '100': this.hundred,
      '50': this.fifty,
      '10': this.ten,
    };
  }

  // TODO: divisor를 map 객체의 keys()로 구할 수 있게 수정
  returnChange(amount) {
    const change = {
      '500': 0,
      '100': 0,
      '50': 0,
      '10': 0,
    };
    const coinsJson = this.toMap();
    const divisor = [10, 50, 100, 500];
    let remain = amount;

    // TODO: array 비어있는 여부 조사 좀더 좋은 방법 찾기, 타입체크도 리팩터링
    while (remain > 0 && divisor.length > 0) {
      const div = divisor.pop();
      const { quotient } = divmod(remain, div);
      const coinAmount = Math.min(quotient, coinsJson[String(div)]);

      change[String(div)] = coinAmount;
      remain -= coinAmount * div;
    }

    // TODO: 메서드 분리
    this.fivehundred -= change['500'];
    this.hundred -= change['100'];
    this.fifty -= change['50'];
    this.ten -= change['10'];

    return { change, amount: amount - remain };
  }
}
