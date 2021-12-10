import { DOM } from '../utils/constant.js';

export default class SetLocalStorage {
  constructor(coins) {
    this.coins = coins;
  }

  coinsInfo = () => {
    const coinsInfoHash = {
      coinsHash: this.coins.totalCoinsHash,
      coinAmount: this.coins.totalCoinAmount,
    };

    localStorage.setItem('coinsInfo', JSON.stringify(coinsInfoHash));

    this.vendingMachineManageMenu();
  };

  vendingMachineManageMenu = () => {
    const $vendingMachineSection = document.querySelector(DOM.$VENDING_MACHINE_SECTION);
    localStorage.setItem('vendingMachineManageMenu', $vendingMachineSection.innerHTML);
  };

  productAddMenu = () => {
    const $vendingMachineSection = document.querySelector(DOM.$VENDING_MACHINE_SECTION);
    localStorage.setItem('productAddMenu', $vendingMachineSection.innerHTML);
  };
}
