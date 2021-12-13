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

  // 2. 돈 감소하기(상품가격)
  //  - 값 가져오기
  //  흐름: 상품 구매시 발생, 상품가격만큼 감소 -> 저장
}
