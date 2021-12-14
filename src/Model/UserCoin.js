import { LACK_OF_COIN, NO_RETURN_COIN } from "../constant/alertMessage.js";
import { USER_COIN } from "../constant/vendingMachine.js";
import Coin from "./Coin.js";

export default class UserCoin extends Coin {
  constructor() {
    super();
    this.key = USER_COIN;
    this.returnLogKey = "returnLog";
  }

  getCurrentCoinToHave() {
    return Number(super.getCoinData(this.key));
  }

  getReturnLog() {
    return super.getCoinData(this.returnLogKey);
  }

  saveReturnLog(returnCoin) {
    if (!super.getCoinData(this.returnLogKey)) {
      super.setCoinData(this.returnLogKey, {});
    }
    super.setCoinData(this.returnLogKey, returnCoin);
  }

  setCurrenCoinToHave(currentCoin) {
    return super.setCoinData(this.key, currentCoin);
  }

  insert(coinToInput) {
    const coin = Number(coinToInput);
    if (super.checkValid(coin)) {
      this.save(coin);
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

  hasCharge(currentCoin) {
    if (Number(currentCoin) === 0) {
      return alert(NO_RETURN_COIN);
    }
    return true;
  }
}
