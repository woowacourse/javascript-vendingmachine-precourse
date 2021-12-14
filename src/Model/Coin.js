import { COIN_NOT_DIVIDE_10, LESS_THAN_10, NOT_EMPTY } from "../constant/alertMessage.js";
import { isDivideTen } from "./utils.js";

export default class Coin {
  getCoinData(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  setCoinData(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  checkValid(targetCoin) {
    if (targetCoin === 0) {
      alert(NOT_EMPTY);
      return false;
    }
    if (targetCoin < 10) {
      alert(LESS_THAN_10);
      return false;
    }
    if (!isDivideTen(targetCoin)) {
      alert(COIN_NOT_DIVIDE_10);
      return false;
    }
    return true;
  }
}
