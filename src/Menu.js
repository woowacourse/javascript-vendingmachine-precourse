import ProductAddMenuView from "./views/ProductAddMenuView.js";
import VendingMachineManageMenu from "./views/VendingMachineManageMenuView.js";

export default class Menu {
  constructor() {
    this.productAddMenu = new ProductAddMenuView();
    this.vendingMachineManageMenu = new VendingMachineManageMenu();
  }

  productAddMenuInitialize() {
    this.productAddMenu.render();
  }

  vendingMachineManageMenuInitialize() {
    this.vendingMachineManageMenu.render();
  }
}
