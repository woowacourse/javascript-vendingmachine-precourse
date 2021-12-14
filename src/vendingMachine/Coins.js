import {
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
  COINS_STORAGE_KEY,
} from '../constant/constant.js';
import $ from '../util/$.js';
import { coinListHeaderTemplate } from '../view/renderCharge.js';

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
    return sum;
  }

  decreaseCoin(decrease, index) {
    let decreaseCount = 0;

    for (let count = 0; count < decrease; count += 1) {
      if (this.coins[index] > 0) {
        this.coins[index] -= 1;
        decreaseCount += 1;
      }
    }
    return decreaseCount;
  }

  template() {
    const ids = [
      CHARGE_500_QUANTITY_ID,
      CHARGE_100_QUANTITY_ID,
      CHARGE_50_QUANTITY_ID,
      CHARGE_10_QUANTITY_ID,
    ];
    const title = [TITLE_500, TITLE_100, TITLE_50, TITLE_10];
    return (
      ids.map((id, index) => `
        <tr align="center" bgcolor="white" height="40">
          <td align="center" width="62">${title[index]}</td> 
          <td id="${id}" align="center" width="62">${this.coins[index]}개</td>
        </tr>
      `).join('')
    );
  }

  render(dom) {
    const $table = $(`#${dom}`);

    $table.innerHTML = `
      ${coinListHeaderTemplate()}
      ${this.template()}
    `;
  }
}
