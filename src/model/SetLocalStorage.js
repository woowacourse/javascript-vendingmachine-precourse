import { DOM } from '../utils/constant.js';

export default class SetLocalStorage {
  constructor(coins, product) {
    this.coins = coins;
    this.product = product;
  }

  productInformation = () => {
    localStorage.setItem('productsInformation', JSON.stringify(this.product.productsInformation));
    this.productAddMenu();
  };

  coinsInformation = () => {
    const coinsInformationHash = {
      coinsHash: this.coins.totalCoinsHash,
      coinAmount: this.coins.totalCoinAmount,
    };

    localStorage.setItem('coinsInformation', JSON.stringify(coinsInformationHash));

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
