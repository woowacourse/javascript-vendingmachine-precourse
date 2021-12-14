export default class Coin {
  static instance;

  constructor() {
    if (Coin.instance) return Coin.instance;
    if (localStorage.getItem('amountCost') == null) this.amountCost = 0;
    else this.amountCost = Number(localStorage.getItem('amountCost'));
    if (localStorage.getItem('currentCoin') == null)
      this.currentCoin = {
        500: 0,
        100: 0,
        50: 0,
        10: 0,
      };
    else this.currentCoin = JSON.parse(localStorage.getItem('currentCoin'));
    this.coinList = [500, 100, 50, 10];
    Coin.instance = this;
  }

  additionalInputCoin(inputCoin) {
    this.amountCost += inputCoin;
    this.addCoin(inputCoin);
    this.setLocalStorage();
    return this.amountCost;
  }

  addCoin(inputCoin) {
    let changeToCoinCost = inputCoin;
    while (true) {
      if (changeToCoinCost == 0) break;
      let coin = MissionUtils.Random.pickNumberInList(this.coinList);
      if (changeToCoinCost < coin) continue;
      changeToCoinCost -= coin;
      this.currentCoin[coin] += 1;
    }
  }

  returnCoin(chargeCoin) {
    let returnCoin = chargeCoin;
    let returnCoinList = {};
    this.coinList.forEach((coin) => {
      returnCoinList[coin] = this.calcCoinCount(returnCoin, coin);
      this.currentCoin[coin] -= returnCoinList[coin];
      returnCoin -= returnCoinList[coin] * coin;
    });
    returnCoinList['charge'] = returnCoin;
    this.amountCost -= chargeCoin - returnCoin;
    this.setLocalStorage();
    return returnCoinList;
  }

  calcCoinCount(returnCoin, coin) {
    let calcCoin = parseInt(returnCoin / coin, 10);
    if (calcCoin <= this.currentCoin[coin]) {
      return calcCoin;
    }
    return this.currentCoin[coin];
  }

  getCoin() {
    return this.currentCoin;
  }

  getCoinList() {
    return this.coinList;
  }

  setLocalStorage() {
    localStorage.setItem('currentCoin', JSON.stringify(this.currentCoin));
    localStorage.setItem('amountCost', this.amountCost);
  }
}
