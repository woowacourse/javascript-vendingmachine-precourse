const MONEY = 0;
const AMOUNT_OF_COINS = {
  '500_WON': 0,
  '100_WON': 0,
  '50_WON': 0,
  '10_WON': 0
};

export class VendingMachine {
  constructor() {
    this._money = MONEY;
    this._amountOfCoins = AMOUNT_OF_COINS;
  }

  sumMoney(money) {
    this._money += Number(money);
    this.setLocalStorage(Number(money));
  }

  setLocalStorage(money) {
    if (localStorage.getItem('vending-machine-charge-amount')) {
      this._money = Number(localStorage.getItem('vending-machine-charge-amount')) + money;
    }
    localStorage.setItem('vending-machine-charge-amount', this._money);
  }

  getAmountOfCoins(money) {
    if (localStorage.getItem('amount-of-coins')) {
      this._amountOfCoins = JSON.parse(localStorage.getItem('amount-of-coins'));
    }
    const Array500 = Array.from({ length: money / 500 + 1 }, (_, i) => i);
    let randomNum500 = MissionUtils.Random.pickNumberInList(Array500);
    this._amountOfCoins['500_WON'] += randomNum500;
    let remainCharge = money - 500 * randomNum500;

    const Array100 = Array.from({ length: remainCharge / 100 + 1 }, (_, i) => i);

    let randomNum100 = MissionUtils.Random.pickNumberInList(Array100);
    this._amountOfCoins['100_WON'] += randomNum100;
    remainCharge = remainCharge - 100 * randomNum100;

    const Array50 = Array.from({ length: remainCharge / 50 + 1 }, (_, i) => i);

    let randomNum50 = MissionUtils.Random.pickNumberInList(Array50);
    this._amountOfCoins['50_WON'] += randomNum50;
    remainCharge = remainCharge - 50 * randomNum50;

    const Array10 = Array.from({ length: remainCharge / 10 + 1 }, (_, i) => i);

    this._amountOfCoins['10_WON'] += remainCharge / 10;
    remainCharge = 0;

    localStorage.setItem('amount-of-coins', JSON.stringify(this._amountOfCoins));
  }
}

export const vendingMachine = new VendingMachine();
