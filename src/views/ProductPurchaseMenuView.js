import productPurchaseMenu from "../components/product-purchase-menu.js";

export default class ProductPurchaseMenu {
  constructor() {
    this.contentContainer = document.querySelector("#content-container");
  }

  render() {
    this.contentContainer.innerHTML = productPurchaseMenu.tableHeader;
  }
}
