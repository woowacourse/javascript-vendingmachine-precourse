import { DOM, LOCAL_STORAGE } from '../utils/constant.js';

export default class SetLocalStorage {
  constructor(coins, product) {
    this.coins = coins;
    this.product = product;
  }

  productInformation = () => {
    localStorage.setItem(LOCAL_STORAGE.PRODUCTS_INFORMATION, JSON.stringify(this.product.productsInformation));
    this.productAddMenu();
  };

  coinsInformation = () => {
    const coinsInformationHash = {
      coinsHash: this.coins.totalCoinsHash,
      coinAmount: this.coins.totalCoinAmount,
    };

    localStorage.setItem(LOCAL_STORAGE.COINS_INFORMATION, JSON.stringify(coinsInformationHash));

    this.vendingMachineManageMenu();
  };

  vendingMachineManageMenu = () => {
    const $vendingMachineSection = document.querySelector(DOM.$VENDING_MACHINE_SECTION);
    localStorage.setItem(LOCAL_STORAGE.VENDING_MACHINE_MANAGE_MENU, $vendingMachineSection.innerHTML);
  };

  productAddMenu = () => {
    const $vendingMachineSection = document.querySelector(DOM.$VENDING_MACHINE_SECTION);
    localStorage.setItem(LOCAL_STORAGE.PRODUCT_ADD_MENU, $vendingMachineSection.innerHTML);
  };
}
