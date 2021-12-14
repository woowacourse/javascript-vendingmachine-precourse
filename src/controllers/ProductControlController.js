import ProductControlModel from "../models/ProductControlModel.js";
import { ELEMENT_SHOW, NUMBER } from "../utils/constants.js";

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
    this.proudctControlField.style = ELEMENT_SHOW;
    this.controlModel;
    this.getProductList();
  }

  getProductList() {
    this.product.length > NUMBER.ZERO && this.controlModel.setLoacalProductList([this.product]);
    this.setProductList()
  }

  setProductList() {
    this.localProductList = this.controlModel.getLoacalProductList();
    this.renderProduct();
  }

}