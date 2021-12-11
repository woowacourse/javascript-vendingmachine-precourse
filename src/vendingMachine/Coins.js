import {
  INDEX_500,
  INDEX_100,
  INDEX_50,
  INDEX_10,
  COIN_VALUE_500,
  COIN_VALUE_100,
  COIN_VALUE_50,
  COIN_VALUE_10,
  TITLE_500,
  TITLE_100,
  TITLE_50,
  TITLE_10,
  CHARGE_500_QUANTITY_ID,
  CHARGE_100_QUANTITY_ID,
  CHARGE_50_QUANTITY_ID,
  CHARGE_10_QUANTITY_ID,
  COIN_SUM_KEY,
  COINS_STORAGE_KEY,
} from '../constant/constant.js';
import $ from '../util/$.js';
import { coinListHeaderTemplate } from '../view/initCharge.js';

export default class Coins {
  constructor() {
    this.coins = JSON.parse(localStorage.getItem(COINS_STORAGE_KEY)) || [0, 0, 0, 0];
  }

  chargeRandomCoins(money) {
    let currentMoney = money;
    const coinValues = [
      COIN_VALUE_500,
      COIN_VALUE_100,
      COIN_VALUE_50,
      COIN_VALUE_10,
    ];

    while (currentMoney !== 0) {
      const randomCoin = window.MissionUtils.Random.pickNumberInList(coinValues);
      if (randomCoin <= currentMoney) {
        this.coins[coinValues.indexOf(randomCoin)] += 1;
        currentMoney -= randomCoin;
      }
    }
  }

  getSum() {
    let sum = 0;
    const coinValues = [
      COIN_VALUE_500,
      COIN_VALUE_100,
      COIN_VALUE_50,
      COIN_VALUE_10,
    ];

    this.coins.forEach((coin, index) => {
      sum += coin * coinValues[index];
    });
    localStorage.setItem(COIN_SUM_KEY, sum);
    return sum;
  }

  template() {
    return `
      <tr align="center" bgcolor="white" height="40">
        <td align="center" width="62">${TITLE_500}</td> 
        <td id="${CHARGE_500_QUANTITY_ID}" align="center" width="62">${this.coins[INDEX_500]}개</td>
      </tr>
      <tr align="center" bgcolor="white" height="40">
        <td align="center" width="62">${TITLE_100}</td> 
        <td id="${CHARGE_100_QUANTITY_ID}" align="center" width="62">${this.coins[INDEX_100]}개</td>
      </tr>
      <tr align="center" bgcolor="white" height="40">
        <td align="center" width="62">${TITLE_50}</td> 
        <td id="${CHARGE_50_QUANTITY_ID}" align="center" width="62">${this.coins[INDEX_50]}개</td>
      </tr>
      <tr align="center" bgcolor="white" height="40">
        <td align="center" width="62">${TITLE_10}</td> 
        <td id="${CHARGE_10_QUANTITY_ID}" align="center" width="62">${this.coins[INDEX_10]}개</td>
      </tr>
    `;
  }

  render(dom) {
    const $table = $(`#${dom}`);

    $table.innerHTML = `
      ${coinListHeaderTemplate()}
      ${this.template()}
    `;
  }
}
