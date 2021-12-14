import { CHARGE_MANAGE, CHARGE_MANAGE_COIN, UNIT, COIN_TABLES } from "../constants/constants.js";
import { createCoinTable, setCoinTable } from "../view/DOM_coinTable.js";

export default class ChargeManage {
  constructor() {
    this.addCoin();
    createCoinTable(COIN_TABLES.HAVE, CHARGE_MANAGE_COIN);
  }

  addCoin() {
    const $addCoinBtn = document.querySelector(`#${CHARGE_MANAGE.BUTTON_ID}`);
    const $coinInput = document.querySelector(`#${CHARGE_MANAGE.INPUT_ID}`);
    const $amount = document.querySelector(`#${CHARGE_MANAGE.AMOUNT_ID}`);

    $addCoinBtn.addEventListener('click', e => {
      const money = $coinInput.value;
      $amount.innerHTML = `${money}원`;

      const coins = this.setRandomCoin(money);
      this.setLocalStroage(coins);
      setCoinTable(CHARGE_MANAGE_COIN, coins);

    });

  }

  setLocalStroage(coins) {
    localStorage.setItem("coins", coins);
  }

  getLocalStroage() {
    return localStorage.getItem("coins").split(",");
  }

  setRandomCoin (money) {
    const radomCoin = [];
    const coinUnit = [UNIT.COIN_500, UNIT.COIN_100, UNIT.COIN_50, UNIT.COIN_10];

    let charge = Number(money);

    while(charge !== 0) {
      let coin = MissionUtils.Random.pickNumberInList(coinUnit);
      charge -= coin;

      charge >= 0 ? radomCoin.push(coin) : charge += coin;
    }

    return this.countCoin(radomCoin);
  }

  countCoin(coinArray) {
    const countResult = [0, 0, 0, 0];

    coinArray.forEach((coin) => {
      if(coin === UNIT.COIN_500) {
        countResult[0]++;
      }
      else if(coin === UNIT.COIN_100) {
        countResult[1]++;
      }
      else if(coin === UNIT.COIN_50) {
        countResult[2]++;
      }
      else if(coin === UNIT.COIN_10) {
        countResult[3]++;
      }
    });

    return countResult;
  }
};