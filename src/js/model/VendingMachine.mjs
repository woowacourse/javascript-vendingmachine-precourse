const MONEY = 0;
export const COINS = [500, 100, 50, 10];
const AMOUNT_OF_COINS = {
  '500_WON': 0,
  '100_WON': 0,
  '50_WON': 0,
  '10_WON': 0
};

export const coinType = {
  type500: 500,
  type100: 100,
  type50: 50,
  type10: 10
};

let remainCharge = 0;

export class VendingMachine {
  constructor() {
    this._money = MONEY;
    this._amountOfCoins = AMOUNT_OF_COINS;
  }

  sumMoney(money) {
    this._money += Number(money);
    this.setLocalStorageMoney(Number(money));
  }

  setLocalStorageMoney(money) {
    if (localStorage.getItem('vending-machine-charge-amount')) {
      this._money = Number(localStorage.getItem('vending-machine-charge-amount')) + money;
    }
    localStorage.setItem('vending-machine-charge-amount', this._money);
  }

  getRandomArray(money, moneyType) {
    return Array.from({ length: Math.ceil(money / coinType[`type${moneyType}`]) }, (_, i) => i);
  }

  setLocalStorageAmountOfCoins(money, moneyType) {
    let randomCoin = MissionUtils.Random.pickNumberInList(this.getRandomArray(money, moneyType));
    this._amountOfCoins[`${moneyType}_WON`] += randomCoin;
    remainCharge = remainCharge - coinType[`type${moneyType}`] * randomCoin;
  }

  getAmountOfCoins(money) {
    if (localStorage.getItem('amount-of-coins')) {
      this._amountOfCoins = JSON.parse(localStorage.getItem('amount-of-coins'));
    }

    remainCharge = money;
    for (let moneyType of Object.values(coinType)) {
      this.setLocalStorageAmountOfCoins(remainCharge, moneyType);
    }
    const Array10 = Array.from({ length: remainCharge / coinType['type10'] + 1 }, (_, i) => i);
    this._amountOfCoins['10_WON'] += remainCharge / coinType['type10'];
    remainCharge = 0;

    localStorage.setItem('amount-of-coins', JSON.stringify(this._amountOfCoins));
  }
}

export const vendingMachine = new VendingMachine();
