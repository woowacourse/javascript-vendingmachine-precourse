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
  }

  renderProductControl () {
    this.proudctControlField.style = ("display: block");
    this.controlModel;
    this.getProductList();
  }

  getProductList() {
    this.product.length > 0 && this.controlModel.setLoacalProductList([this.product]);
    this.setProductList()
  }

  setProductList() {
    this.localProductList = this.controlModel.getLoacalProductList();
    this.renderProduct();
  }

}