export default class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  static createProduct(productInput) {
    return new Product(
      productInput.productNameInput,
      productInput.productPriceInput,
      productInput.productQuantityInput
    );
  }
}
