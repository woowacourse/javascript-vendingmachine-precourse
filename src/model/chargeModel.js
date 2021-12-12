import {
  CHARGE_ELEMENT_ID,
  CHARGE_ERR,
  CHARGE_RULES,
} from '../constants/constants.js';

export default class ChargeModel {
  constructor() {
    this.chargeInputEl = document.querySelector(
      `#${CHARGE_ELEMENT_ID.chargeInput}`,
    );
    this.chargeButtonEl = document.querySelector(
      `#${CHARGE_ELEMENT_ID.chargeButton}`,
    );
    this.chargeAmountEl = document.querySelector(
      `#${CHARGE_ELEMENT_ID.chargeAmount}`,
    );
    this.coinStorage = JSON.parse(localStorage.getItem('coinList'));
  }

  getChargeInput() {
    return this.chargeInputEl.value;
  }

  resetChargeInput() {
    this.chargeInputEl.value = '';
  }

  getCoinStorage() {
    return this.coinStorage;
  }

  updateCoinStorage() {
    this.coinStorage = JSON.parse(localStorage.getItem('coinList'));
  }

  getTotalMoney() {
    const coinStorage = this.getCoinStorage();
    const coinValue = [500, 100, 50, 10];
    let totalMoney = 0;
    if (coinStorage) {
      Object.values(coinStorage).forEach((coinNum, idx) => {
        totalMoney += coinValue[idx] * coinNum;
      });
    }

    return totalMoney;
  }

  isValidChargeInput() {
    if (
      this.getChargeInput() >= CHARGE_RULES.minCharge &&
      this.getChargeInput() % CHARGE_RULES.measures === 0
    ) {
      return true;
    }
    alert(CHARGE_ERR);

    return false;
  }

  randomCharge() {
    const coin500 = MissionUtils.Random.pickNumberInList(
      this.getPickNumberRange(0, 500),
    );
    const coin100 = MissionUtils.Random.pickNumberInList(
      this.getPickNumberRange(500 * coin500, 100),
    );
    const coin50 = MissionUtils.Random.pickNumberInList(
      this.getPickNumberRange(500 * coin500 + 100 * coin100, 50),
    );
    const coin10 = MissionUtils.Random.pickNumberInList(
      this.getPickNumberRange(500 * coin500 + 100 * coin100 + 50 * coin50, 10),
    );
    this.addCoinStorage({ coin500, coin100, coin50, coin10 });
  }

  getPickNumberRange(chargedAmount, type) {
    const chargeAmount = this.getChargeInput();
    const rangeArray = [];
    let rangeNum = 0;
    while (rangeNum * type <= chargeAmount - chargedAmount) {
      rangeArray.push(rangeNum);
      rangeNum += 1;
    }
    if (type === 10) {
      return [Math.max(...rangeArray)];
    }

    return rangeArray;
  }

  addCoinStorage(chargeCoins) {
    const { coin500, coin100, coin50, coin10 } = chargeCoins;
    const coinStorage = this.getCoinStorage();
    if (coinStorage) {
      coinStorage.coin500 += coin500;
      coinStorage.coin100 += coin100;
      coinStorage.coin50 += coin50;
      coinStorage.coin10 += coin10;
      localStorage.setItem('coinList', JSON.stringify(coinStorage));
    } else {
      localStorage.setItem('coinList', JSON.stringify(chargeCoins));
    }
    this.updateCoinStorage();
  }
}
