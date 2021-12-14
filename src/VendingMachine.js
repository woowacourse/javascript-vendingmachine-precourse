import VendingMachineView from "./views/VendingMachineView.js";

export default class VendingMachine {
  constructor() {
    this.view = new VendingMachineView();
  }

  setMenuClickEvent() {
    this.view.productAddMenuBtn.addEventListener("click", () => {
      console.log("상품관리");
    });
    this.view.vendingMachineManageMenuBtn.addEventListener("click", () => {
      console.log("잔돈충전");
    });
    this.view.productPurchaseMenuBtn.addEventListener("click", () => {
      console.log("상품구매");
    });
  }

  initialize() {
    this.view.render();
    this.setMenuClickEvent();
  }
}
