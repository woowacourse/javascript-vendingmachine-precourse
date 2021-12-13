import { CHARGE, COINS, COINS_INIT_OBJECT, LOCALSTORAGE } from '../utils/constants.js';
import { isValidMoneyInput } from '../utils/validation.js';

const initCoins = () => {
  return JSON.parse(localStorage.getItem(LOCALSTORAGE.COINS))
    ? JSON.parse(localStorage.getItem(LOCALSTORAGE.COINS))
    : COINS_INIT_OBJECT;
};

export default {
  coins: initCoins(),
  charge(money) {
    if (!isValidMoneyInput(money)) {
      return;
    }
    while (money >= CHARGE.COIN_10) {
      const availableCoins = COINS.filter((coin) => coin <= money);
      const randomCoin = MissionUtils.Random.pickNumberInList(availableCoins);
      this.coins[randomCoin] += 1;
      money -= randomCoin;
    }
    this.setCoins();
  },
  total() {
    return COINS.reduce((sum, coin) => parseInt(sum + this.coins[coin] * coin), 0);
  },
  list() {
    return this.coins;
  },
  return(money) {
    COINS.forEach((coin) => {
      while (money >= coin && this.coins[coin]) {
        money -= coin;
        this.coins[coin] -= 1;
      }
    });
    this.setCoins();
  },
  setCoins() {
    localStorage.setItem(LOCALSTORAGE.COINS, JSON.stringify(this.coins));
  },
};
