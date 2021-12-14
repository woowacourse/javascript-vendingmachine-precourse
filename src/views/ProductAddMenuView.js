import productAddMenu from "../components/product-add-menu.js";

export default class ProductAddMenuView {
  constructor() {
    this.contentContainer = document.querySelector("#content-container");
  }

  render() {
    this.contentContainer.innerHTML = productAddMenu.tableHeader;
  }
}
