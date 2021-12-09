import ProductModel from "./ProductModel.js";
import ProductView from "./ProductView.js";

export default class ProductController {
  constructor() {
    this.model = new ProductModel();
    this.view = new ProductView();
    this.$container = document.getElementById("app");
  }

  init = () => {
    this.view.renderPage(this.$container);
    this.initDOMS();
    this.setEvent();
    this.view.renderProductTable(this.$productTableBody, this.model.getProducts());
  };

  initDOMS = () => {
    this.$productNameInput = document.getElementById("product-name-input");
    this.$productPriceInput = document.getElementById("product-price-input");
    this.$productQuantityInput = document.getElementById("product-quantity-input");
    this.$productAddButton = document.getElementById("product-add-button");
    this.$productTableBody = document.getElementById("product-table-body");
  };

  setEvent = () => {
    this.$productAddButton.addEventListener("click", this.setAddProductHandler);
  };

  setAddProductHandler = () => {
    const name = this.$productNameInput.value;
    const price = Number(this.$productPriceInput.value);
    const quantity = Number(this.$productQuantityInput.value);

    try {
      this.model.addProduct({ name, price, quantity });
      this.updatePage();
    } catch (error) {
      alert(error);
    }
  };

  resetProductInput = () => {
    this.$productNameInput.value = "";
    this.$productPriceInput.value = "";
    this.$productQuantityInput.value = "";
  };

  updatePage = () => {
    this.view.renderProductTable(this.$productTableBody, this.model.getProducts());
    this.resetProductInput();
  };
}
