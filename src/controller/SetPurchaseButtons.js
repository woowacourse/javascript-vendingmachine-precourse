import { LOCAL_STORAGE, TEMPLATE, ERROR_MESSAGE, NUMBER } from '../utils/constant.js';

export default class SetPurchaseButtons {
  constructor(render, vendingMachine, product) {
    this.render = render;
    this.vendingMachine = vendingMachine;
    this.product = product;
  }

  reRenderPurchaseChargeAmount = (productPrice) => {
    if (!this.vendingMachine.decreaseChargeAmount(productPrice)) {
      this.render.alertMessage(ERROR_MESSAGE.NOT_ENOUGH_AMOUNT);

      return false;
    }

    this.render.chargeInputTemplate(TEMPLATE.CHARGE_INPUT(this.vendingMachine.getChargeAmount()));

    return true;
  };

  isOutOfStock = (productName, productPrice, productQuantity, $targetName, $targetPrice, $targetQuantity) => {
    if (productQuantity <= NUMBER.ZERO) {
      this.render.alertMessage(ERROR_MESSAGE.OUT_OF_STOCK);

      return;
    }

    if (this.reRenderPurchaseChargeAmount(productPrice)) {
      this.render.purchaseTemplate($targetName, $targetPrice, $targetQuantity);
      this.localStorageProductAddMenu = this.localStorageProductAddMenu.replace(
        TEMPLATE.PRODUCT_MANAGE_QUANTITY(productName, productQuantity),
        TEMPLATE.PRODUCT_MANAGE_QUANTITY(productName, productQuantity - NUMBER.ONE)
      );
    }
  };

  isTargetName = (information, $targetName, $targetPrice, $targetQuantity) => {
    const [productName, productPrice, productQuantity] = information;
    if ($targetName.textContent === productName) {
      this.isOutOfStock(productName, productPrice, productQuantity, $targetName, $targetPrice, $targetQuantity);
    }
  };

  reRenderProductAddMenu = ($targetName, $targetPrice, $targetQuantity) => {
    this.localStorageProductAddMenu = localStorage.getItem(LOCAL_STORAGE.PRODUCT_ADD_MENU);
    this.product.getProductsInformation().forEach((information) => {
      this.isTargetName(information, $targetName, $targetPrice, $targetQuantity);
    });

    localStorage.setItem(LOCAL_STORAGE.PRODUCT_ADD_MENU, this.localStorageProductAddMenu);
  };
}
