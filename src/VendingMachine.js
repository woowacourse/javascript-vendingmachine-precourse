import VendingMachineView from "./views/VendingMachineView.js";
import Menu from "./Menu.js";

export default class VendingMachine {
  constructor() {
    this.view = new VendingMachineView();
  }

  setMenuClickEvent() {
    this.view.productAddMenuBtn.addEventListener("click", () => {
      this.menu.initialize();
    });
    this.view.vendingMachineManageMenuBtn.addEventListener("click", () => {
      console.log("잔돈충전");
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
