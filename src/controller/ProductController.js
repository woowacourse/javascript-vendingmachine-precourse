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
    const products = this.model.addProduct(productName, price, quantity);
    if (products === undefined || products.length === 0) {
      // length를 왜 확인해주더라?
      return;
    }
    this.coreView.productView.showProduct(products);
  }
}
