import { COINS } from "../assets/constants/public.js";
import VendingMachine from "./vendingMachine.js";

class ChargeChange extends VendingMachine {
  constructor() {
    super();
    this.init();
  }

  init() {
    this.loadFromLocalStorage();
  }

  loadCoins(coins) {
    coins = coins.split(",");
    COINS.forEach((coin, index) => {
      this.coins[`${coin}`] = coins[index];
    });
  }

  loadFromLocalStorage() {
    const coins = localStorage.getItem("coins");

    if (coins) {
      this.loadCoins(coins);
    }
  }
}

export const chargeChange = new ChargeChange();
