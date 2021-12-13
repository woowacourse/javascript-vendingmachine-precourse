import Coin from "./Coin.js";
import { clearInputValue } from "./utils.js";
import { COIN_MANAGE, VENDING_MACHINE_COIN } from "../constant/vendingMachine.js";

export default class VendingMachineCoin extends Coin {
  constructor() {
    super();
    this.bindInput();
    this.key = VENDING_MACHINE_COIN;
  }

  bindInput() {
    this.input = document.getElementById(COIN_MANAGE.INPUT.ID);
  }

  getCoinToInput() {
    const coinToInput = this.input.value;
    clearInputValue([this.input]);
    return coinToInput;
  }

  charge() {
    const coinToInput = this.getCoinToInput();
    if (super.checkValid(coinToInput)) {
      this.save(this.makeRandomCoin(coinToInput));
    }
  }

  makeRandomCoin(totalMoney) {
    const coinToHave = { 10: 0, 50: 0, 100: 0, 500: 0 };
    while (totalMoney) {
      const randomCoin = MissionUtils.Random.pickNumberInList([10, 50, 100, 500]);
      if (totalMoney - randomCoin >= 0) {
        coinToHave[randomCoin] += 1;
        totalMoney -= randomCoin;
      }
    }
    return coinToHave;
  }

  save(newCoinList) {
    const currentCoinList = super.getCoinData(this.key);
    if (currentCoinList) {
      for (const coin in currentCoinList) {
        newCoinList[coin] += currentCoinList[coin];
      }
    }
    super.setCoinData(this.key, newCoinList);
  }

  getTotalCoin() {
    // 총 보유동전 리턴
  }
}
