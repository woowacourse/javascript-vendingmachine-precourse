import ProductControlModel from "../models/ProductControlModel.js";

export default class ProductControlController {
  constructor($app) {
    this.controlModel = new ProductControlModel();
    this.$app = $app;
    this.proudctControlField = document.createElement('div');
    this.render();
  }

  render () {}
}