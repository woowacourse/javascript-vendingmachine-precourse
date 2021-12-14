import VendingMachineView from "./views/VendingMachineView.js";
import Menu from "./Menu.js";

export default class VendingMachine {
  constructor() {
    this.view = new VendingMachineView();
  }

  setMenuClickEvent() {
    this.view.productAddMenuBtn.addEventListener("click", () => {
      this.menu.productAddMenuInitialize();
    });
    this.view.vendingMachineManageMenuBtn.addEventListener("click", () => {
      this.menu.vendingMachineManageMenuInitialize();
    });
    this.view.productPurchaseMenuBtn.addEventListener("click", () => {
      console.log("상품구매");
    });
  }

  initMenu() {
    this.menu = new Menu();
  }

  initialize() {
    this.view.render();
    this.setMenuClickEvent();
    this.initMenu();
  }
}
