import { DOM, LOCAL_STORAGE, EVENT, TEMPLATE } from '../utils/constant.js';
import CheckCoinReturn from './CheckCoinReturn.js';
import SetVendingMachinePurchase from './SetVendingMachinePurchase.js';

export default class CheckProductPurchaseMenu {
  constructor(render, coins, product, vendingMachine) {
    this.render = render;
    this.coins = coins;
    this.product = product;
    this.vendingMachine = vendingMachine;
  }

  onClickChargeButton = () => {
    const $chargeButton = document.querySelector(DOM.$CHARGE_BUTTON);
    $chargeButton.addEventListener(EVENT.CLICK, () => {
      this.setVendingMachinePurchase = new SetVendingMachinePurchase(this.render, this.vendingMachine);
      this.setVendingMachinePurchase.setVendingMachineCharge();
    });
  };

  renderProductStatus = () => {
    this.render.productPurchaseStatusResetTemplate();
    const productsStatus = this.vendingMachine.getCurrentProductStatus();
    productsStatus.forEach((productStatus) => {
      const [productName, productPrice, productQuantity] = productStatus;
      this.render.productPurchaseStatusTemplate(
        TEMPLATE.PRODUCT_PURCHASE_STATUS(productName, productPrice, productQuantity)
      );
    });
  };

  hasTemplate = () => {
    const productPurchaseMenuTemplate = localStorage.getItem(LOCAL_STORAGE.PRODUCT_PURCHASE_MENU);
    if (!productPurchaseMenuTemplate) {
      this.render.productPurchaseMenuTemplate();
    }

    if (productPurchaseMenuTemplate) {
      this.render.haveTemplate(productPurchaseMenuTemplate);
    }

    this.renderProductStatus();
    this.onClickChargeButton();
    const checkCoinReturn = new CheckCoinReturn(this.render, this.coins, this.product, this.vendingMachine);
    checkCoinReturn.main();
  };
}
