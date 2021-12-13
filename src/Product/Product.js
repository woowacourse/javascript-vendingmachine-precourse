export default class Product {
  static instance;

  constructor() {
    if (Product.instance) return Product.instance;
    this.currentProducts = [];
    this.chargeCost = 0;
    Product.instance = this;
  }

  addProduct(name, price, quantity) {
    const product = {
      name,
      price,
      quantity,
    };
    this.currentProducts.push(product);
  }

  additionalInputCharge(inputCharge) {
    this.chargeCost += inputCharge;
    return this.chargeCost;
  }

  purchaseProduct(index) {
    let selectProduct = this.currentProducts[index];
    if (this.chargeCost < selectProduct.price) {
      alert('상품을 구입할 돈이 부족합니다.');
      return true;
    }
    this.chargeCost -= selectProduct.price;
    selectProduct.quantity -= 1;
    if (selectProduct.quantity == 0) {
      this.currentProducts.splice(index, 1);
    }
  }

  getProduct() {
    return this.currentProducts;
  }
}
