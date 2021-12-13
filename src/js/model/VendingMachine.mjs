export let MONEY = 0;
const NUMBER_OF_COINS = {
  '500_WON': 0,
  '100_WON': 0,
  '50_WON': 0,
  '10_WON': 0
};

export class VendingMachine {
  constructor(money) {
    this._money = Number(money);
    this._numberOfCoins = NUMBER_OF_COINS;
    this.randomCoins();
    localStorage.setItem('vending-machine-charge-amount', this._money);
  }

  chargeMoney(money) {
    this._money += Number(money);
    localStorage.setItem('vending-machine-charge-amount', this._money);
  }

  randomCoins() {
    // 500, 100, 50, 10원 랜덤으로 개수 생성되다가 this.money 가격과 같으면 NUMBER_OF_COINS에 개수 반영
    let maxNumberOf500Coins = Math.ceil(this._money / 500);
    let maxNumberOf100Coins = Math.ceil(this._money / 100);
    let maxNumberOf50Coins = Math.ceil(this._money / 50);
    let maxNumberOf10Coins = Math.ceil(this._money / 10);
    // console.log(maxNumberOf500Coins, maxNumberOf100Coins, maxNumberOf50Coins, maxNumberOf10Coins);
    let remain = this._money;

    let Array500 = Array.from({ length: maxNumberOf500Coins }, (v, i) => i);
    let Array100 = Array.from({ length: maxNumberOf100Coins }, (v, i) => i);
    let Array50 = Array.from({ length: maxNumberOf50Coins }, (v, i) => i);
    let Array10 = Array.from({ length: maxNumberOf10Coins }, (v, i) => i);

    let { numberOf500Coins, numberOf100Coins, numberOf50Coins, numberOf10Coins } = this._numberOfCoins;

    while (remain > 0) {
      let random500coins = 500 * MissionUtils.Random.pickNumberInList(Array500);
      let random100coins = 100 * MissionUtils.Random.pickNumberInList(Array100);
      let random50coins = 50 * MissionUtils.Random.pickNumberInList(Array50);
      let random10coins = 10 * MissionUtils.Random.pickNumberInList(Array10);
      // console.log(random500coins, random100coins, random50coins, random10coins);

      numberOf500Coins = this._money / random500coins === Infinity ? 0 : this._money / random500coins;
      remain = this._money % random500coins;

      numberOf100Coins = Math.floor(remain / random100coins);
      remain = remain % random100coins;

      numberOf50Coins = Math.floor(remain / random50coins);
      remain = remain % random50coins;

      numberOf10Coins = remain / random10coins || 0;
      remain = remain % random10coins;
    }
    // console.log(numberOf500Coins, numberOf100Coins, numberOf50Coins, numberOf10Coins);
  }

  get numberOfCoins() {
    return this._numberOfCoins;
  }
}
