import { isProductInputsValid } from '../utils/validator.js';

export class ProductController {
  constructor(model, coreView) {
    this.model = model;
    this.coreView = coreView;
  }

  loadLocalStorage() {
    const products = this.model.products;
    this.coreView.productView.showProduct(products);
  }

  triggerEvent() {
    this.coreView.productView.setOnProductSubmit(this.onProductSubmit.bind(this));
  }

  onProductSubmit(productName, price, quantity) {
    if (!isProductInputsValid(productName, price, quantity)) {
      return;
    }
    const products = this.model.addProduct(productName, price, quantity);
    if (products === undefined) {
      return;
    }
    this.coreView.productView.showProduct(products);
  }
}
