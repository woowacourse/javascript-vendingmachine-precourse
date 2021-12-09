export default class CoinStorageModel {
  constructor() {
    this.coins = {
      500: 0,
      100: 0,
      50: 0,
      10: 0,
    };
    this.totalMoney = 0;
  }

  addMoney = (money) => {
    this.totalMoney += money;
  };
}
