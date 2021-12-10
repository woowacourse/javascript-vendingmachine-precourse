export class ProductController {
  constructor(model, coreView) {
    this.model = model;
    this.coreView = coreView;

    this.loadProduct();
    this.triggerEvent();
  }

  triggerEvent() {
    this.coreView.productView.setOnProductSubmit(this.onProductSubmit.bind(this));
  }

  loadProduct() {
    const products = this.model.products;
    if (products.length === 0) {
      return;
    }
    this.coreView.productView.showProduct(products);
  }

  onProductSubmit(productName, price, quantity) {
    const products = this.model.addProduct(productName, price, quantity);
    if (products.length === 0) {
      return;
    }
    this.coreView.productView.showProduct(products);
  }
}
