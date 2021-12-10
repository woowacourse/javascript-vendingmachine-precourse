import SetProductAdd from '../model/SetProductAdd.js';
import { DOM } from '../utils/constant.js';

export default class CheckEventTarget {
  constructor(render) {
    this.render = render;
  }

  onClickProductAddButton = () => {
    const $productAddButton = document.querySelector(DOM.$PRODUCT_ADD_BUTTON);
    $productAddButton.addEventListener('click', () => {
      new SetProductAdd(this.render);
    });
  };

  isProductAddMenu = (eventTarget, $productAddMenu) => {
    if (eventTarget === $productAddMenu) {
      this.render.productAddMenuTemplate();
      this.onClickProductAddButton();
    }
  };

  isVendingMachineManageMenu = (eventTarget, $vendingMachineManageMenu) => {
    if (eventTarget === $vendingMachineManageMenu) {
      this.render.vendingMachineManageMenuTemplate();
    }
  };
}
