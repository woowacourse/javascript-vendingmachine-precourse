import { $style } from "../constant.js";

export default class VendingMachineView {
  constructor() {
    this.app = document.querySelector("#app");
  }

  render() {
    this.renderTitle();
    this.renderContainer();
    this.renderMenu();
    this.renderSytle();
  }

  renderSytle() {
    const head = document.querySelector("head");
    head.innerHTML = $style;
  }

  renderTitle() {
    const appTitle = document.createElement("h1");
    appTitle.innerText = "🥤자판기🥤";
    this.app.appendChild(appTitle);
  }

  renderContainer() {
    this.menuContainer = document.createElement("nav");
    this.menuContainer.setAttribute("id", "menu-container");
    this.app.appendChild(this.menuContainer);

    const contentContainer = document.createElement("section");
    contentContainer.setAttribute("id", "content-container");
    this.app.appendChild(contentContainer);
  }

  renderMenu() {
    this.productAddMenuBtn = this.renderMenuButton(
      "product-add-menu",
      "상품 관리"
    );
    this.vendingMachineManageMenuBtn = this.renderMenuButton(
      "vending-machine-manage-menu",
      "잔돈 충전"
    );
    this.productPurchaseMenuBtn = this.renderMenuButton(
      "product-purchase-menu",
      "상품 구매"
    );
  }

  renderMenuButton(valueOfID, innerText) {
    const menuButton = document.createElement("button");
    menuButton.setAttribute("id", valueOfID);
    menuButton.innerText = innerText;
    this.menuContainer.appendChild(menuButton);
    return menuButton;
  }
}
