import Product from './product.js';
import { ERROR } from '../utils/constant.js';

export default class ProductList {
  constructor() {
    this.products = [];
  }

  findIndex(productName) {
    let index = -1;
    let count = 0;
    this.products.forEach(element => {
      const compareResult = element.name.localeCompare(productName);
      if (compareResult === 0) {
        index = count;
      }
      count += 1;
    });
    return index;
  }

  addProduct(product) {
    const index = this.findIndex(product.name);
    if (index === -1) {
      this.products.push(product);
      localStorage.setItem(`product-${product.name}`, `${product.price}-${product.quantity}`);
    } else {
      let quantity = Number(this.products[index].quantity);
      quantity += Number(product.quantity);
      this.changePrice(index, product);
      localStorage.setItem(`product-${product.name}`, `${this.products[index].price}-${quantity}`);
      this.updateProducts();
    }
  }

  removeProduct(productName) {
    const index = this.findIndex(productName);
    if (index === -1) {
      alert(ERROR.CANTFINDPRODUCT); // 상수화 필요
    } else {
      this.products[index].quantity -= 1;
      localStorage.setItem(`product-${productName}`, `${this.products[index].price}-${this.products[index].quantity}`);
      this.updateProducts();
    }
  }

  changePrice(index, product) {
    const compareResult = this.products[index].price.localeCompare(product.price);
    if (compareResult !== 0) {
      this.products[index].price = product.price;
    }
  }

  updateProducts() {
    this.products = [];
    for (let i = 0; i < localStorage.length; i += 1) {
      if (this.isProduct(localStorage.key(i))) {
        const [, name] = localStorage.key(i).split('-');
        const [price, quantity] = localStorage.getItem(localStorage.key(i)).split('-');
        this.products.push(new Product(name, price, quantity));
      }
    }
  }

  isProduct(key) {
    return key.includes('product-');
  }

  getProductPrice(productName) {
    const index = this.findIndex(productName);
    return this.products[index].price;
  }

  getProductQuantity(productName) {
    const index = this.findIndex(productName);
    return this.products[index].quantity;
  }
}