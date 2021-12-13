import { makeElement } from "./View/template.js";
import {
  TITLE,
  PRODUCT_MANAGE,
  COIN_MANAGE,
  PRODUCT_PURCHASE_MANAGE,
  VENDING_MACHINE_COIN,
  USER_COIN,
} from "./constant/vendingMachine.js";
import ProductAddView from "./View/productAddView.js";
import CoinManageView from "./View/coinMangeView.js";
import ProductPurchaseView from "./View/productPurchaseView.js";

class VendingMachine {
  constructor() {
    this.app = document.querySelector("#app");
    this.contentContainer = makeElement({ tag: "div", id: "content-container" });
  }

  turnOn() {
    const vendingMachineTitle = makeElement({ tag: "h1", innerText: TITLE });
    const menuButton = this.makeMenuButton();
    this.app.append(vendingMachineTitle, menuButton);
    menuButton.insertAdjacentElement("afterend", this.contentContainer);
    this.setLocalStorage();
  }

  setLocalStorage() {
    this.setData("Product", []);
    this.setData(VENDING_MACHINE_COIN, []);
    this.setData(USER_COIN, []);
  }

  setData(key, value) {
    if (localStorage.getItem(key) == null) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  makeMenuButton() {
    const buttonArea = makeElement({ tag: "div", id: "buttons" });
    const productAddMenuButton = makeElement({
      tag: "button",
      id: "product-add-menu",
      innerText: PRODUCT_MANAGE.BUTTON,
    });
    const coinManageMenuButton = makeElement({
      tag: "button",
      id: "vending-machine-manage-menu",
      innerText: COIN_MANAGE.BUTTON,
    });
    const productPurchaseMenuButton = makeElement({
      tag: "button",
      id: "product-purchase-menu",
      innerText: PRODUCT_PURCHASE_MANAGE.BUTTON,
    });

    productAddMenuButton.addEventListener("click", () =>
      new ProductAddView(this.contentContainer).render()
    );
    coinManageMenuButton.addEventListener("click", () =>
      new CoinManageView(this.contentContainer).render()
    );
    productPurchaseMenuButton.addEventListener("click", () =>
      new ProductPurchaseView(this.contentContainer).render()
    );

    buttonArea.append(productAddMenuButton, coinManageMenuButton, productPurchaseMenuButton);
    return buttonArea;
  }
}

const vendingMachine = new VendingMachine();
vendingMachine.turnOn();
