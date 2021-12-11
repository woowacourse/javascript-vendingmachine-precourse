import ProductModel from "./ProductModel.js";
import ProductView from "./ProductView.js";
import { ID } from "../util/constant.js";

export default class ProductController {
  constructor() {
    this.model = new ProductModel();
    this.view = new ProductView();
    this.$container = document.getElementById(ID.APP);
  }

  init = () => {
    this.initPage();
    this.initDOMS();
    this.setEvent();
    this.view.renderProductTable(this.$productTableBody, this.model.getProducts());
  };

  initDOMS = () => {
    this.$productNameInput = document.getElementById(ID.PRODUCT_NAME_INPUT);
    this.$productPriceInput = document.getElementById(ID.PRODUCT_PRICE_INPUT);
    this.$productQuantityInput = document.getElementById(ID.PRODUCT_QUANTITY_INPUT);
    this.$productAddButton = document.getElementById(ID.PRODUCT_ADD_BUTTON);
    this.$productTableBody = document.getElementById(ID.PRODUCT_TABLE_BODY);
  };

  initPage = () => {
    this.view.renderPage(this.$container);
  };

  setEvent = () => {
    this.$productAddButton.addEventListener("click", this.setAddProductEvent);
  };

  setAddProductEvent = () => {
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
