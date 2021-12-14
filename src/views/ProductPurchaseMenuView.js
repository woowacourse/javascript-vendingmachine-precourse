import productPurchaseMenu from "../components/product-purchase-menu.js";

export default class ProductPurchaseMenu {
  constructor() {
    this.contentContainer = document.querySelector("#content-container");
  }

  render(products) {
    this.contentContainer.innerHTML = productPurchaseMenu.tableHeader;
    this.tableBody = document.querySelector("#product-purchase-table > tbody");
    this.renderProductPerchaseTableItems(products);
  }

  renderProductPerchaseTableItems(products) {
    products.forEach((product) => {
      this.tableBody.innerHTML += productPurchaseMenu.tableRow(product);
    });
  }
}
