export default class View {
  constructor() {
    this.app = document.getElementById("app");
    const title = this.createElement("h1", "vending-machine", "🥤자판기🥤");
    this.menu = this.createElement("div", "menu");
    this.productAddMenu = this.createElement(
      "button",
      "product-add-menu",
      "상품 구매"
    );
    const vendingMachineManageMenu = this.createElement(
      "button",
      "vending-machine-manage-menu",
      "잔돈 충전"
    );
    const productPurchaseMenu = this.createElement(
      "button",
      "product-purchase-menu",
      "상품 관리"
    );

    this.menu.append(
      this.productAddMenu,
      vendingMachineManageMenu,
      productPurchaseMenu
    );
    this.app.append(title);
    this.app.append(this.menu);
    this.form = this.createElement("div", "form");
    this.app.append(this.form);
    this.displayProductAdd();
  }

  createElement(tag, id, textContent) {
    const element = document.createElement(tag);
    if (id) element.id = id;
    if (textContent) element.textContent = textContent;

    return element;
  }
}
