import ProductControlModel from "../models/ProductControlModel.js";

export default class ProductControlController {
  constructor($app) {
    this.controlModel = new ProductControlModel();
    this.$app = $app;
    this.product = [];
    this.localProductList = [];
    this.proudctControlField = document.createElement('div');
    this.render();
    this.setEvent();
    this.setProductList();
    this.renderProduct();
  }

  renderProductControl () {
    this.proudctControlField.style = ("display: block");
    this.controlModel;
  }

  getProductList(product) {
    product.length > 0 && this.controlModel.setLoacalProductList([product]);
  }

  setProductList() {
    this.localProductList = this.controlModel.getLoacalProductList();
  }

}