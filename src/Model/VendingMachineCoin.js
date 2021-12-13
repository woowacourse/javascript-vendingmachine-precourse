import Coin from "./Coin.js";
import { VENDING_MACHINE_COIN } from "../constant/vendingMachine.js";

export default class VendingMachineCoin extends Coin {
  constructor() {
    super();
    this.key = VENDING_MACHINE_COIN;
  }

  charge(coinToInput) {
    if (super.checkValid(coinToInput)) {
      this.save(this.makeRandomCoin(coinToInput));
    }
  }

  makeRandomCoin(totalMoney) {
    const coinToHave = { 500: 0, 100: 0, 50: 0, 10: 0 };
    while (totalMoney) {
      const randomCoin = MissionUtils.Random.pickNumberInList([500, 100, 50, 10]);
      if (totalMoney - randomCoin >= 0) {
        coinToHave[randomCoin] += 1;
        totalMoney -= randomCoin;
      }
    }
    return coinToHave;
  }

  save(newCoinList) {
    const currentCoinList = this.getCurrentCoinToHave();
    if (currentCoinList) {
      for (const coin in currentCoinList) {
        newCoinList[coin] += currentCoinList[coin];
      }
    }
    super.setCoinData(this.key, newCoinList);
  }

  getTotalCoin() {
    const currentCoinList = this.getCurrentCoinToHave();
    let totalCoin = 0;
    for (const [coin, number] of Object.entries(currentCoinList)) {
      totalCoin += coin * number;
    }
    return totalCoin;
  }

  getCurrentCoinToHave() {
    return super.getCoinData(this.key);
  }
}
