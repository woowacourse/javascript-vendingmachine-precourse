import { LACK_OF_COIN } from "../constant/alertMessage.js";
import { USER_COIN } from "../constant/vendingMachine.js";
import Coin from "./Coin.js";

export default class UserCoin extends Coin {
  constructor() {
    super();
    this.key = USER_COIN;
  }

  getCurrentCoinToHave() {
    return Number(super.getCoinData(this.key));
  }

  insert(coinToInput) {
    if (super.checkValid(coinToInput)) {
      this.save(coinToInput);
    }
  }

  save(coinToInput) {
    const updateCoin = this.getCurrentCoinToHave() + coinToInput;
    super.setCoinData(this.key, updateCoin);
  }

  checkBuy(coinToNeed) {
    if (this.getCurrentCoinToHave() - coinToNeed >= 0) {
      return true;
    }
    return alert(LACK_OF_COIN);
  }

  pay(productPrice) {
    const updateCoin = this.getCurrentCoinToHave() - productPrice;
    super.setCoinData(this.key, updateCoin);
  }
}
