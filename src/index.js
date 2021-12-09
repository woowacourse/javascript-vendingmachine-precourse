import VENDING_MACHINE from "./constant/vendingMachine.js";
import { makeElement } from "./utils.js";
import productAddView from "./view/productAddView.js";
import productPurchaseView from "./view/productPurchaseView.js";
import coinManageView from "./view/coinMangeView.js";

class VendingMachine {
  constructor() {
    this.app = document.querySelector("#app");
    this.contentContainer = makeElement({ tag: "div", id: "content-container" });
  }

  turnOn() {
    const vendingMachineTitle = makeElement({ tag: "h1", innerText: VENDING_MACHINE.TITLE });
    const menuButton = this.makeMenuButton();
    this.app.append(vendingMachineTitle, menuButton);
    menuButton.insertAdjacentElement("afterend", this.contentContainer);
  }

  makeMenuButton() {
    const buttonArea = makeElement({ tag: "div", id: "buttons" });
    const productAddMenuButton = makeElement({
      tag: "button",
      id: "product-add-menu",
      innerText: VENDING_MACHINE.PRODUCT_MANAGE.BUTTON,
    });
    const coinManageMenuButton = makeElement({
      tag: "button",
      id: "vending-machine-manage-menu",
      innerText: VENDING_MACHINE.COIN_MANAGE.BUTTON,
    });
    const productPurchaseMenuButton = makeElement({
      tag: "button",
      id: "product-purchase-menu",
      innerText: VENDING_MACHINE.PRODUCT_PURCHASE_MANAGE.BUTTON,
    });

    productAddMenuButton.addEventListener("click", () => productAddView(this.contentContainer));
    coinManageMenuButton.addEventListener("click", () => coinManageView(this.contentContainer));
    productPurchaseMenuButton.addEventListener("click", () =>
      productPurchaseView(this.contentContainer)
    );

    buttonArea.append(productAddMenuButton, coinManageMenuButton, productPurchaseMenuButton);
    return buttonArea;
  }
}

const vendingMachine = new VendingMachine();
vendingMachine.turnOn();
