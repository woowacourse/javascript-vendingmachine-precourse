export default class Coin {
  static instance;

  constructor() {
    if (Coin.instance) return Coin.instance;
    this.amountCost = 0;
    this.currentCoin = {
      500: 0,
      100: 0,
      50: 0,
      10: 0,
    };
    this.coinList = [500, 100, 50, 10];
    Coin.instance = this;
  }

  additionalInputCoin(inputCoin) {
    this.amountCost += inputCoin;
    this.addCoin(inputCoin);
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
}
