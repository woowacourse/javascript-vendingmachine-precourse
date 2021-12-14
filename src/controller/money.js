import Validation from '../utils/validation.js';
import { ERROR } from '../utils/constant.js';

export class Money {
  constructor(moneyBank) {
    this.valid = new Validation();
    this.moneyBank = moneyBank;
  }

  chargeMoney(money) {
    const isValid = this.valid.checkMoneyInput(money);
    if (isValid) {
      this.moneyBank.chargeMoney(money);
      const coinArray = this.getRandomCoins(money);
      this.moneyBank.chargeCoins(coinArray);
    } else {
      alert(ERROR.MONEYINPUT);
    }
  }

  showCurrentMoney(view) {
    view.showCurrentMoney(this.moneyBank.money);
  }

  showCurrentCoins(view) {
    view.showCurrentCoins(this.moneyBank.coins);
  }

  getRandomCoins(money) {
    let inputMoney = Number(money);
    const coinArray = [0, 0, 0, 0];
    while (inputMoney !== 0) {
      const coin = MissionUtils.Random.pickNumberInList([10, 50, 100, 500]);
      if (inputMoney >= coin) {
        inputMoney -= coin;
        coinArray[this.classifyCoin(coin)] += 1;
      }
    }
    return coinArray;
  }

  classifyCoin(coin) {
    if (coin === 10) {
      return 0;
    }
    if (coin === 50) {
      return 1;
    }
    if (coin === 100) {
      return 2;
    }
    return 3;
  }
}