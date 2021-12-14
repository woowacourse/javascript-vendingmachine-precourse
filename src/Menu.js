import ProductAddMenuView from "./views/ProductAddMenuView.js";
import VendingMachineManageMenu from "./views/VendingMachineManageMenuView.js";
import ProductPurchaseMenu from "./views/ProductPurchaseMenuView.js";

export default class Menu {
  constructor() {
    this.productAddMenu = new ProductAddMenuView();
    this.vendingMachineManageMenu = new VendingMachineManageMenu();
    this.productPurchaseMenu = new ProductPurchaseMenu();
  }

  productAddMenuInitialize() {
    this.productAddMenu.render();
  }

  vendingMachineManageMenuInitialize() {
    this.vendingMachineManageMenu.render();
  }

  productPurchaseMenuInitialize() {
    this.productPurchaseMenu.render();
  }
}
