const MONEY = 0;
const NUMBER_OF_COINS = {
  '500_WON': 0,
  '100_WON': 0,
  '50_WON': 0,
  '10_WON': 0
};

export class VendingMachine {
  constructor(money) {
    this._money = money;
    this._numberOfCoins = NUMBER_OF_COINS;
  }

  chargeMoney(money) {
    this._money += money;
  }

  randomCoins() {
    // 500, 100, 50, 10원 랜덤으로 개수 생성되다가 this.money 가격과 같으면 NUMBER_OF_COINS에 개수 반영
    let maxNumberOf500Coins = this._money / 500;
    let maxNumberOf100Coins = this._money / 100;
    let maxNumberOf50Coins = this._money / 50;
    let maxNumberOf10Coins = this._money / 10;
    let remain = this._money;

    let [numberOf500Coins, numberOf100Coins, numberOf50Coins, numberOf10Coins] = this._numberOfCoins;

    while (remain > 0) {
      numberOf500Coins = this._money / (500 * Random.pickNumberInList(0, maxNumberOf500Coins));
      remain = this._money % (500 * Random.pickNumberInList(0, maxNumberOf500Coins));

      numberOf100Coins = remain / (100 * Random.pickNumberInList(0, maxNumberOf100Coins));
      remain = remain % (100 * Random.pickNumberInList(0, maxNumberOf100Coins));

      numberOf50Coins = remain / (50 * Random.pickNumberInList(0, maxNumberOf50Coins));
      remain = remain % (50 * Random.pickNumberInList(0, maxNumberOf50Coins));

      numberOf10Coins = remain / (10 * Random.pickNumberInList(0, maxNumberOf10Coins));
      remain = remain % (10 * Random.pickNumberInList(0, maxNumberOf10Coins));
    }
    console.log(numberOf500Coins, numberOf100Coins, numberOf50Coins, numberOf10Coins);
  }

  get numberOfCoins() {
    return this._numberOfCoins;
  }
}
