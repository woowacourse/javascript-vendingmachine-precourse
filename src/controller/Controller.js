import Coins from '../model/Coins.js';
import Product from '../model/Product.js';
import VendingMachine from '../model/VendingMachine.js';
import { DOM, LOCAL_STORAGE, EVENT } from '../utils/constant.js';
import Render from '../view/Render.js';
import CheckEventTarget from './CheckEventTarget.js';

export default class Controller {
  constructor() {
    this.localStorageCoinsInformation = JSON.parse(localStorage.getItem(LOCAL_STORAGE.COINS_INFORMATION));
    this.localStorageProductsInformation = JSON.parse(localStorage.getItem(LOCAL_STORAGE.PRODUCTS_INFORMATION));
    this.localStoragePurchaseChargeAmount = JSON.parse(localStorage.getItem(LOCAL_STORAGE.PURCHASE_CHARGE_AMOUNT));
    this.coins = new Coins(
      this.localStorageCoinsInformation?.coinAmount || 0,
      this.localStorageCoinsInformation?.coinsHash || { 500: 0, 100: 0, 50: 0, 10: 0 }
    );
    this.product = new Product(this.localStorageProductsInformation || []);
    this.vendingMachine = new VendingMachine(this.coins, this.product, this.localStoragePurchaseChargeAmount || 0);
    this.render = new Render(this.coins, this.product, this.vendingMachine);
    this.checkEventTarget = new CheckEventTarget(this.render, this.coins, this.product, this.vendingMachine);
    this.$app = document.querySelector(DOM.$APP);
    this.main();
  }

  onClickMainTemplateButton = () => {
    this.$app.addEventListener(EVENT.CLICK, (event) => {
      const $productAddMenu = document.querySelector(DOM.$PRODUCT_ADD_MENU);
      this.checkEventTarget.isProductAddMenu(event.target, $productAddMenu);

      const $vendingMachineManageMenu = document.querySelector(DOM.$VENDING_MACHINE_MANAGE_MENU);
      this.checkEventTarget.isVendingMachineManageMenu(event.target, $vendingMachineManageMenu);

      const $productPurchaseMenu = document.querySelector(DOM.$PRODUCT_PURCHASE_MENU);
      this.checkEventTarget.isProductPurchaseMenu(event.target, $productPurchaseMenu);
    });
  };

  renderMainTemplate = () => {
    this.render.mainTemplate();
  };

  main = () => {
    this.renderMainTemplate();
    this.onClickMainTemplateButton();
  };
}
