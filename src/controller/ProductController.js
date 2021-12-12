import { isProductInputsValid } from '../utils/validator.js';

export class ProductController {
  constructor(model, coreView) {
    this.model = model;
    this.coreView = coreView;

    this.loadLocalStorage();
    this.triggerEvent();
  }

  triggerEvent() {
    this.coreView.productView.setOnProductSubmit(this.onProductSubmit.bind(this));
  }

  loadLocalStorage() {
    const products = this.model.products;
    if (products.length === 0) {
      return;
    }
    this.coreView.productView.showProduct(products);
  }

  onProductSubmit(productName, price, quantity) {
    if (!isProductInputsValid(productName, price, quantity)) {
      return;
    }
    const products = this.model.addProduct(productName, price, quantity);
    this.coreView.productView.showProduct(products);
  }
}
