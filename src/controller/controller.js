import View from "../view/view.js";
import VendingMachine from "../model/vendingMachine.js";

export default class Controller {
  constructor() {
    this.vendingMachine = "";
    this.view = "";
  }

  init() {
    if (this.view === "") {
      this.view = new View();
    }
    if (this.vendingMachine === "") {
      this.vendingMachine = new VendingMachine();
    }
    this.onClickTabBtn();
  }

  onClickTabBtn() {
    const $manageTabBtn = document.getElementById("product-add-menu");
    const $chargeTabBtn = document.getElementById(
      "vending-machine-manage-menu"
    );
    const $purchaseTabBtn = document.getElementById("product-purchase-menu");

    $manageTabBtn.addEventListener("click", () => {
      this.view.showSelectedID("manage-tab");
    });

    $chargeTabBtn.addEventListener("click", () => {
      this.view.showSelectedID("charge-tab");
    });

    $purchaseTabBtn.addEventListener("click", () => {
      this.view.showSelectedID("purchase-tab");
    });
  }
}
