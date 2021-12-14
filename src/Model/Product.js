import {
  DUPLICATE_NAME,
  EMPTY_NAME,
  EMPTY_PRICE,
  EMPTY_QUANTITY,
  IN_AVAILABLE_QUANTITY,
  LESS_THAN_100,
  NOT_DIVIDE_10,
  SOLD_OUT,
} from "../constant/alertMessage.js";
import { PRODUCT } from "../constant/vendingMachine.js";
import { isDivideTen, isEmpty } from "./utils.js";

export default class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  addNewProduct(newProduct) {
    const [name, price, quantity] = newProduct;
    const updateProductList = [...this.getProductData(), new Product(name, price, quantity)];
    this.setProductData(updateProductList);
  }

  checkValidNewProductData(productData) {
    const [name, price, quantity] = productData;
    return this.checkName(name) && this.checkPrice(price) && this.checkQuantity(quantity);
  }

  checkName(name) {
    if (isEmpty(name)) {
      return alert(EMPTY_NAME);
    }
    const productList = this.getProductData().map(product => product.name);
    const isDuplicate = productList.some(existProductName => existProductName === name);
    if (isDuplicate) {
      return alert(DUPLICATE_NAME);
    }
    return !isDuplicate;
  }

  checkPrice(price) {
    if (isEmpty(price)) {
      return alert(EMPTY_PRICE);
    }
    if (!isDivideTen(price)) {
      return alert(NOT_DIVIDE_10);
    }
    if (price < 100) {
      return alert(LESS_THAN_100);
    }
    return true;
  }

  checkQuantity(quantity) {
    if (isEmpty(quantity)) {
      return alert(EMPTY_QUANTITY);
    }
    if (quantity <= 0) {
      return alert(IN_AVAILABLE_QUANTITY);
    }
    return true;
  }

  changeTableRowFormat(productClass, { name, price, quantity }) {
    const newProductData = [name, price, quantity].map((value, key) => ({
      text: String(value),
      class: productClass[key],
    }));
    return newProductData;
  }

  checkStock(productName) {
    const { quantity } = this.searchProduct(productName);
    if (quantity <= 0) {
      return alert(SOLD_OUT);
    }
    return true;
  }

  searchProduct(productName) {
    const allProduct = this.getProductData();
    return allProduct.filter(product => product.name === productName).pop();
  }

  getProductData() {
    return JSON.parse(localStorage.getItem(PRODUCT));
  }

  setProductData(productData) {
    return localStorage.setItem(PRODUCT, JSON.stringify(productData));
  }

  sell(productName) {
    const allProduct = this.getProductData();
    allProduct.forEach(product => {
      if (product.name === productName) {
        product.quantity -= 1;
      }
    });
    this.setProductData(allProduct);
  }
}
