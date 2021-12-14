import { CHARGE_MANAGE, UNIT } from "../constants/constants.js";

export default class ChargeManage {
 constructor() {
  this.addCoin();
 }

 addCoin() {
  const $addCoinBtn = document.querySelector(`#${CHARGE_MANAGE.BUTTON_ID}`);
  const $coinInput = document.querySelector(`#${CHARGE_MANAGE.INPUT_ID}`);

  $addCoinBtn.addEventListener('click', e => {
    const money = $coinInput.value;
    console.log(money);

    const coins = this.setRandomCoin(money);
    console.log(coins)
    this.setLocalStorage()
  });

 }

 setLocalStorage(won, coins) {
  
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


}