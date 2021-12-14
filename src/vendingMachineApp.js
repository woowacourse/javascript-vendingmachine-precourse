import { BUTTONS_INFO } from './header/headerViewInfo.js';
import { $ } from './utils/common.js';
import HeaderView from './header/headerView.js';
import ProductAddComponent from './productAdd/productAddComponent.js';
import VendingMachineManageComponent from './vendingMachineManage/vendingMachineManageComponent.js';
import ProductPurchaseComponent from './productPurchase/productPurchaseComponent.js';

export default class VendingMachineApp {
  constructor() {
    this.headerView = new HeaderView();
    this.productAddComponent = new ProductAddComponent();
    this.vendingMachineComponent = new VendingMachineManageComponent();
    this.productPurchaseComponent = new ProductPurchaseComponent();
    this.configureButtons();
  }

  configureButtons() {
    Object.values(BUTTONS_INFO).forEach((item) => {
      $(`#${item.ID}`).addEventListener('click', this.onClickButton);
    });
  }

  onClickButton = (event) => {
    switch (event.path[0].id) {
      case BUTTONS_INFO.PRODUCT_ADD.ID:
        this.productAddComponent.render();
        return;
      case BUTTONS_INFO.VENDING_MACHINE_MANAGE.ID:
        this.vendingMachineComponent.render();
        return;
      case BUTTONS_INFO.PRODUCT_PURCHASE.ID:
        this.productPurchaseComponent.render();
        return;
    }
  };
}
