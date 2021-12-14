const MONEY = 0;
export const COINS = [500, 100, 50, 10];
export const AMOUNT_OF_COINS = {
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

  setLocalStorageAmountOfCoins(money, moneyType) {
    let coin = Math.floor(money / moneyType);
    this._amountOfCoins[`${moneyType}_WON`] += coin;
    remainCharge = remainCharge - coinType[`type${moneyType}`] * coin;
  }

  getAmountOfCoins(money) {
    if (localStorage.getItem('amount-of-coins')) {
      this._amountOfCoins = JSON.parse(localStorage.getItem('amount-of-coins'));
    }

    remainCharge = money;
    for (let moneyType of Object.values(coinType)) {
      this.setLocalStorageAmountOfCoins(remainCharge, moneyType);
    }

    this._amountOfCoins['10_WON'] += remainCharge / coinType['type10'];
    remainCharge = 0;

    localStorage.setItem('amount-of-coins', JSON.stringify(this._amountOfCoins));
  }

  setProductPurchaseMoney(money) {
    if (localStorage.getItem('charge-input')) {
      money = Number(localStorage.getItem('charge-input')) + Number(money);
    }
    localStorage.setItem('charge-input', money);
  }
}

export const vendingMachine = new VendingMachine();
