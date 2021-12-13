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
      let coin = MissionUtils.Random.pickNumberInList([10, 50, 100, 500]);
      typeNuberCharge -= coin;
      if (typeNuberCharge >= 0) {
        randomCoins.push(coin);
      } else if (typeNuberCharge < 0) {
        typeNuberCharge += coin;
      }
    }
    this.setContainCoin(randomCoins);
  }

  setContainCoin(randomCoins) {
    this.randomCoin = this.getRandonCoin();
    randomCoins.map((coin) => {
      if (coin === 500) {
        this.randomCoin[0]++;
      } else if (coin === 100) {
        this.randomCoin[1]++;
      } else if (coin === 50) {
        this.randomCoin[2]++;
      } else if (coin === 10) {
        this.randomCoin[3]++;
      }
    });
    localStorage.setItem("RANDOM_COIN", JSON.stringify(this.randomCoin));
  }

  getRandonCoin() {
    const randomCoinLocal = JSON.parse(localStorage.getItem("RANDOM_COIN"));

    return randomCoinLocal ? randomCoinLocal : [0, 0, 0, 0];
  }


}