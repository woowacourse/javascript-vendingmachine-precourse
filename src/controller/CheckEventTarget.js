import SetProductAdd from '../model/SetProductAdd.js';
import { DOM, LOCAL_STORAGE, EVENT, TEMPLATE, ERROR_MESSAGE } from '../utils/constant.js';
import SetVendingMachineCharge from '../model/SetVendingMachineCharge.js';
import SetVendingMachinePurchase from '../model/SetVendingMachinePurchase.js';

export default class CheckEventTarget {
  constructor(render, coins, product, vendingMachine) {
    this.render = render;
    this.coins = coins;
    this.product = product;
    this.vendingMachine = vendingMachine;
  }

  onClickProductAddButton = () => {
    const $productAddButton = document.querySelector(DOM.$PRODUCT_ADD_BUTTON);
    $productAddButton.addEventListener(EVENT.CLICK, () => {
      this.setProductAdd = new SetProductAdd(this.render, this.product);
      this.setProductAdd.setProduct();
    });
  };

  hasProductAddMenuTemplate = () => {
    const productAddMenuTemplate = localStorage.getItem(LOCAL_STORAGE.PRODUCT_ADD_MENU);
    if (!productAddMenuTemplate) {
      this.render.productAddMenuTemplate();
      this.onClickProductAddButton();

      return;
    }

    this.render.haveTemplate(productAddMenuTemplate);
    this.onClickProductAddButton();
  };

  isProductAddMenu = (eventTarget, $productAddMenu) => {
    if (eventTarget === $productAddMenu) {
      this.hasProductAddMenuTemplate();
    }
  };

  onClickVendingMachineChargeButton = () => {
    const $vendingMachineChargetButton = document.querySelector(DOM.$VENDING_MACHINE_CHARGE_BUTTON);
    $vendingMachineChargetButton.addEventListener(EVENT.CLICK, () => {
      new SetVendingMachineCharge(this.render, this.coins);
    });
  };

  hasVendingMachineManageMenuTemplate = () => {
    const vendingMachineManageMenuTemplate = localStorage.getItem(LOCAL_STORAGE.VENDING_MACHINE_MANAGE_MENU);
    if (!vendingMachineManageMenuTemplate) {
      this.render.vendingMachineManageMenuTemplate();
      this.onClickVendingMachineChargeButton();

      return;
    }

    this.render.haveTemplate(vendingMachineManageMenuTemplate);
    this.onClickVendingMachineChargeButton();
  };

  isVendingMachineManageMenu = (eventTarget, $vendingMachineManageMenu) => {
    if (eventTarget === $vendingMachineManageMenu) {
      this.hasVendingMachineManageMenuTemplate();
    }
  };

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

  reRenderPurchaseChargeAmount = (productPrice) => {
    if (!this.vendingMachine.decreaseChargeAmount(productPrice)) {
      this.render.alertMessage(ERROR_MESSAGE.NOT_ENOUGH_AMOUNT);

      return false;
    }

    this.render.chargeInputTemplate(TEMPLATE.CHARGE_INPUT(this.vendingMachine.getChargeAmount()));
    return true;
  };

  isOutOfStock = (productName, productPrice, productQuantity, $targetName, $targetPrice, $targetQuantity) => {
    if (productQuantity <= 0) {
      this.render.alertMessage(ERROR_MESSAGE.OUT_OF_STOCK);

      return;
    }

    if (this.reRenderPurchaseChargeAmount(productPrice)) {
      this.render.purchaseTemplate($targetName, $targetPrice, $targetQuantity);
      this.localStorageProductAddMenu = this.localStorageProductAddMenu.replace(
        TEMPLATE.PRODUCT_MANAGE_QUANTITY(productName, productQuantity),
        TEMPLATE.PRODUCT_MANAGE_QUANTITY(productName, productQuantity - 1)
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
    this.localStorageProductAddMenu = localStorage.getItem('productAddMenu');
    this.product.getProductsInformation().forEach((information) => {
      this.isTargetName(information, $targetName, $targetPrice, $targetQuantity);
    });

    localStorage.setItem('productAddMenu', this.localStorageProductAddMenu);
  };

  onClickPurchaseButton = ($purchaseButton) => {
    $purchaseButton.addEventListener(EVENT.CLICK, (event) => {
      const $targetQuantity = event.target.parentElement.previousElementSibling;
      const $targetPrice = $targetQuantity.previousElementSibling;
      const $targetName = $targetPrice.previousElementSibling;
      this.reRenderProductAddMenu($targetName, $targetPrice, $targetQuantity);
    });
  };

  getPurchaseButtons = () => {
    const $purchaseButtons = document.querySelectorAll('.purchase-button');
    $purchaseButtons.forEach(($purchaseButton) => this.onClickPurchaseButton($purchaseButton));
  };

  hasProductPurchaseMenuTemplate = () => {
    const productPurchaseMenuTemplate = localStorage.getItem(LOCAL_STORAGE.PRODUCT_PURCHASE_MENU);
    if (!productPurchaseMenuTemplate) {
      this.render.productPurchaseMenuTemplate();
    }

    if (productPurchaseMenuTemplate) {
      this.render.haveTemplate(productPurchaseMenuTemplate);
    }

    this.renderProductStatus();
    this.onClickChargeButton();
    this.getPurchaseButtons();
  };

  isProductPurchaseMenu = (eventTarget, $productPurchaseMenu) => {
    if (eventTarget === $productPurchaseMenu) {
      this.hasProductPurchaseMenuTemplate();
    }
  };
}
