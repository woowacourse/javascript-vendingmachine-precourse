import productAddMenu from "../components/product-add-menu.js";

export default class ProductAddMenuView {
  constructor() {
    this.contentContainer = document.querySelector("#content-container");
  }

  render(products) {
    this.contentContainer.innerHTML = productAddMenu.tableHeader;
    this.tableBody = document.querySelector("#product-add-table > tbody");
    this.renderProductManageTableItems(products);
  }

  renderProductManageTableItems(products) {
    products.forEach((product) => {
      this.tableBody.innerHTML += productAddMenu.tableRow(product);
    });
  }
}
