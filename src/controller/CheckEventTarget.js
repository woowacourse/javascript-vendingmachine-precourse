import GetLocalStorage from '../model/GetLocalStorage.js';
import SetProductAdd from '../model/SetProductAdd.js';
import { DOM } from '../utils/constant.js';
import SetVendingMachineCharge from '../model/SetVendingMachineCharge.js';

export default class CheckEventTarget {
  constructor(render, coins) {
    this.render = render;
    this.coins = coins;
    this.getLocalStorage = new GetLocalStorage();
  }

  onClickProductAddButton = () => {
    const $productAddButton = document.querySelector(DOM.$PRODUCT_ADD_BUTTON);
    $productAddButton.addEventListener('click', () => {
      new SetProductAdd(this.render);
    });
  };

  isProductAddMenuTemplate = () => {
    const productAddMenuTemplate = this.getLocalStorage.productAddMenu();
    if (!productAddMenuTemplate) {
      this.render.productAddMenuTemplate();
      this.onClickProductAddButton();

      return;
    }

    this.render.hasProductAddMenuTemplate(productAddMenuTemplate);
    this.onClickProductAddButton();
  };

  isProductAddMenu = (eventTarget, $productAddMenu) => {
    if (eventTarget === $productAddMenu) {
      this.isProductAddMenuTemplate();
    }
  };

  onClickVendingMachineChargeButton = () => {
    const $vendingMachineChargetButton = document.querySelector(DOM.$VENDING_MACHINE_CHARGE_BUTTON);
    $vendingMachineChargetButton.addEventListener('click', () => {
      new SetVendingMachineCharge(this.render, this.coins);
    });
  };

  isVendingMachineManageMenu = (eventTarget, $vendingMachineManageMenu) => {
    if (eventTarget === $vendingMachineManageMenu) {
      this.render.vendingMachineManageMenuTemplate();
      this.onClickVendingMachineChargeButton();
    }
  };
}
