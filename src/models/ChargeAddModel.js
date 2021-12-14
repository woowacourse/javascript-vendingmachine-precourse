import { COIN_TYPE, NUMBER } from "../utils/constants.js";

export default class ChargeAddModel {
  constructor() {
    this.totalCharge;
    this.randomCoin;
  }

  setLocalCharge(charge) {
    const localCharge = JSON.parse(localStorage.getItem("CHARGE"));  
    localCharge 
    ? this.totalCharge = Number(localCharge) + Number(charge)
    : this.totalCharge = Number(charge);
    localStorage.setItem("CHARGE", JSON.stringify(this.totalCharge));
    this.setRandomCoinArray(charge);
  }

  getLocalCharge () {
    const localTotalCharge = localStorage.getItem("CHARGE");
    const parseLocalTotalCharge = JSON.parse(localTotalCharge);
    
    return parseLocalTotalCharge;
  }

  setRandomCoinArray(charge) {
    const randomCoins = [];
    let typeNuberCharge = Number(charge);
    while(typeNuberCharge !== 0) {
      let coin = MissionUtils.Random.pickNumberInList([NUMBER.TEN, NUMBER.FIFTY, NUMBER.ONEHUN, NUMBER.FIVEHUN]);
      typeNuberCharge -= coin;
      if (typeNuberCharge >= NUMBER.ZERO) {
        randomCoins.push(coin);
      } else if (typeNuberCharge < NUMBER.ZERO) {
        typeNuberCharge += coin;
      }
    }
    this.setContainCoin(randomCoins);
  }

  setContainCoin(randomCoins) {
    this.randomCoin = this.getRandonCoin();
    randomCoins.map((coin) => {
      if (coin === NUMBER.FIVEHUN) {
        this.randomCoin[COIN_TYPE.FIVEHUN]++;
      } else if (coin === NUMBER.ONEHUN) {
        this.randomCoin[COIN_TYPE.ONEHUN]++;
      } else if (coin === NUMBER.FIFTY) {
        this.randomCoin[COIN_TYPE.FIFTY]++;
      } else if (coin === NUMBER.TEN) {
        this.randomCoin[COIN_TYPE.TEN]++;
      }
    });
    localStorage.setItem("RANDOM_COIN", JSON.stringify(this.randomCoin));
  }

  getRandonCoin() {
    const randomCoinLocal = JSON.parse(localStorage.getItem("RANDOM_COIN"));

    return randomCoinLocal ? randomCoinLocal : [NUMBER.ZERO, NUMBER.ZERO, NUMBER.ZERO, NUMBER.ZERO];
  }


}