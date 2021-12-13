import { COIN_NOT_DIVIDE_10, LESS_THAN_10 } from "../constant/alertMessage.js";
import { isDivideTen } from "./utils.js";

export default class Coin {
  getCoinData(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  setCoinData(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  checkValid(targetCoin) {
    if (!isDivideTen(targetCoin)) {
      return alert(COIN_NOT_DIVIDE_10);
    }
    if (targetCoin < 10) {
      return alert(LESS_THAN_10);
    }
    return true;
  }
}
