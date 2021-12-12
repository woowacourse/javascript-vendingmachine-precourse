import { CHARGE, COINS, COINS_INIT_OBJECT } from '../utils/constants.js';

const initCoins = () => {
  return JSON.parse(localStorage.getItem('coins'))
    ? JSON.parse(localStorage.getItem('coins'))
    : COINS_INIT_OBJECT;
};

export default {
  coins: initCoins(),
  charge(money) {
    while (money >= CHARGE.COIN_10) {
      const availableCoins = COINS.filter((coin) => coin <= money);
      const randomCoin = MissionUtils.Random.pickNumberInList(availableCoins);
      this.coins[randomCoin] += 1;
      money -= randomCoin;
    }
    console.log(this.coins);
  },
};
