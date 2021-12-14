import Coin from "./Coin.js";
import { VENDING_MACHINE_COIN } from "../constant/vendingMachine.js";
import { MACHINE_NO_COIN } from "../constant/alertMessage.js";

export default class VendingMachineCoin extends Coin {
  constructor() {
    super();
    this.key = VENDING_MACHINE_COIN;
    this.coinTemplate = { 500: 0, 100: 0, 50: 0, 10: 0 };
    this.useCoinArray = [500, 100, 50, 10];
  }

  charge(coinToInput) {
    if (super.checkValid(coinToInput)) {
      this.saveInsertCoin(this.makeRandomCoin(coinToInput));
    }
  }

  makeRandomCoin(totalMoney) {
    const coinToHave = { ...this.coinTemplate };
    while (totalMoney) {
      const randomCoin = MissionUtils.Random.pickNumberInList(this.useCoinArray);
      if (totalMoney - randomCoin >= 0) {
        coinToHave[randomCoin] += 1;
        totalMoney -= randomCoin;
      }
    }
    return coinToHave;
  }

  saveInsertCoin(newCoinList) {
    const currentCoinList = this.getCurrentCoinToHave();
    const updateCoinList = { ...newCoinList };
    if (currentCoinList) {
      for (const coin in currentCoinList) {
        updateCoinList[coin] += currentCoinList[coin];
      }
    }
    super.setCoinData(this.key, updateCoinList);
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

  returnCharge(coinToReturn) {
    const returnTemplate = { ...this.coinTemplate };
    const currentCoinToHave = this.getCurrentCoinToHave();
    let haveToReturnCoin = Number(coinToReturn);

    this.useCoinArray.forEach(coin => {
      while (currentCoinToHave[coin] && haveToReturnCoin - coin >= 0) {
        returnTemplate[coin] += 1;
        haveToReturnCoin -= coin;
        currentCoinToHave[coin] -= 1;
      }
    });
    this.setCoinData(this.key, currentCoinToHave);
    return [returnTemplate, haveToReturnCoin];
  }

  checkEmpty(currentCharge) {
    if (currentCharge) {
      alert(MACHINE_NO_COIN);
    }
  }
}
