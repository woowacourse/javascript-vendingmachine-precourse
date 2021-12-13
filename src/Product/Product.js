export default class Product {
  static instance;

  constructor() {
    console.log(Product.instance);
    if (Product.instance) return Product.instance;
    this.currentProducts = [];
    Product.instance = this;
    console.log(Product.instance);
  }

  addProduct(name, price, quantity) {
    const product = {
      name,
      price,
      quantity,
    };
    this.currentProducts.push(product);
  }

  purchaseProduct(index) {
    let selectProduct = this.currentProducts[index];
    selectProduct.quantity -= 1;
    if (selectProduct.quantity == 0) {
      this.currentProducts.slice(index, 1);
      return false;
    }
    return true;
  }

  getProduct() {
    return this.currentProducts;
  }
}
