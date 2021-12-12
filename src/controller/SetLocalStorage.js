import { DOM, LOCAL_STORAGE } from '../utils/constant.js';

export default class SetLocalStorage {
  constructor(coins, product, vendingMachine) {
    this.coins = coins;
    this.product = product;
    this.vendingMachine = vendingMachine;
  }

  reVendingMachineManageMenu = (vendingMachineManageMenuTemplate) => {
    localStorage.setItem(LOCAL_STORAGE.VENDING_MACHINE_MANAGE_MENU, vendingMachineManageMenuTemplate);
  };

  productInformation = () => {
    localStorage.setItem(LOCAL_STORAGE.PRODUCTS_INFORMATION, JSON.stringify(this.product.productsInformation));
  };

  coinsInformation = () => {
    const coinsInformationHash = {
      coinsHash: this.coins.totalCoinsHash,
      coinAmount: this.coins.totalCoinAmount,
    };

    localStorage.setItem(LOCAL_STORAGE.COINS_INFORMATION, JSON.stringify(coinsInformationHash));
  };

  purchaseChargeAmount = () => {
    localStorage.setItem(LOCAL_STORAGE.PURCHASE_CHARGE_AMOUNT, this.vendingMachine.totalChargeAmount);
  };

  productPurchaseMenu = () => {
    const $vendingMachineSection = document.querySelector(DOM.$VENDING_MACHINE_SECTION);
    localStorage.setItem(LOCAL_STORAGE.PRODUCT_PURCHASE_MENU, $vendingMachineSection.innerHTML);
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
