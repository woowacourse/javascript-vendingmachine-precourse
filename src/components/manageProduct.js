import Product from "./product.js";
import VendingMachine from "./vendingMachine.js";

class ManageProduct extends VendingMachine {
  constructor() {
    super();
    this.init();
  }

  init() {
    this.loadFromLocalStorage();
  }

  loadProducts(productsData) {
    productsData = productsData.slice(1, productsData.length - 1).split(",");
    this.products = productsData.map(product => {
      const productInfo = product.slice(1, product.length - 1).split("-");
      const newProduct = new Product(
        productInfo[0],
        productInfo[1],
        productInfo[2]
      );
      return newProduct;
    });
  }

  loadFromLocalStorage() {
    const products = localStorage.getItem("products");

    if (products) {
      this.loadProducts(products);
    }
  }
}

export const manageProduct = new ManageProduct();
