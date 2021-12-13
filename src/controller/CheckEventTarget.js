import CheckProductAddMenu from './CheckProductAddMenu.js';
import CheckVendingMachineManageMenu from './CheckVendingMachineManageMenu.js';
import CheckProductPurchaseMenu from './CheckProductPurchaseMenu.js';

export default class CheckEventTarget {
  constructor(render, coins, product, vendingMachine) {
    this.render = render;
    this.coins = coins;
    this.product = product;
    this.vendingMachine = vendingMachine;
  }

  isProductAddMenu = (eventTarget, $productAddMenu) => {
    if (eventTarget === $productAddMenu) {
      const checkProductAddMenu = new CheckProductAddMenu(this.render, this.product);
      checkProductAddMenu.hasTemplate();
    }
  };

  isVendingMachineManageMenu = (eventTarget, $vendingMachineManageMenu) => {
    if (eventTarget === $vendingMachineManageMenu) {
      const checkVendingMachineManageMenu = new CheckVendingMachineManageMenu(this.render, this.coins);
      checkVendingMachineManageMenu.hasTemplate();
    }
  };

  isProductPurchaseMenu = (eventTarget, $productPurchaseMenu) => {
    if (eventTarget === $productPurchaseMenu) {
      const checkProductPurchaseMenu = new CheckProductPurchaseMenu(
        this.render,
        this.coins,
        this.product,
        this.vendingMachine
      );
      checkProductPurchaseMenu.hasTemplate();
    }
  };
}
