import SetProductAdd from '../model/SetProductAdd.js';
import { DOM } from '../utils/constant.js';
import SetVendingMachineCharge from '../model/SetVendingMachineCharge.js';

export default class CheckEventTarget {
  constructor(render, coins, product) {
    this.render = render;
    this.coins = coins;
    this.product = product;
  }

  onClickProductAddButton = () => {
    const $productAddButton = document.querySelector(DOM.$PRODUCT_ADD_BUTTON);
    $productAddButton.addEventListener('click', () => {
      new SetProductAdd(this.render, this.product);
    });
  };

  hasProductAddMenuTemplate = () => {
    const productAddMenuTemplate = localStorage.getItem('productAddMenu');
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
    $vendingMachineChargetButton.addEventListener('click', () => {
      new SetVendingMachineCharge(this.render, this.coins);
    });
  };

  hasVendingMachineManageMenuTemplate = () => {
    const vendingMachineManageMenuTemplate = localStorage.getItem('vendingMachineManageMenu');
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
}
