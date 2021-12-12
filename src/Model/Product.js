import {
  DUPLICATE_NAME,
  EMPTY_NAME,
  IN_AVAILABLE_QUANTITY,
  LESS_THAN_100,
  NOT_DIVIDE_TEN,
} from "../constant/alertMessage.js";
import { PRODUCT } from "../constant/vendingMachine.js";
import { isDivideTen } from "./utils.js";

export default class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  addNewProduct(newProduct) {
    const [name, price, quantity] = newProduct;
    const currentProductList = this.getProductData();
    const updateProductList = [...currentProductList, new Product(name, price, quantity)];
    this.setProductData(updateProductList);
  }

  checkValidNewProductData(productData) {
    const [name, price, quantity] = productData;
    return (
      this.checkName(name) && this.checkPrice(Number(price)) && this.checkQuantity(Number(quantity))
    );
  }

  checkName(name) {
    if (name === null) {
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
    if (!isDivideTen(price)) {
      return alert(NOT_DIVIDE_TEN);
    }
    if (price < 100) {
      return alert(LESS_THAN_100);
    }
    return true;
  }

  checkQuantity(quantity) {
    if (quantity <= 0) {
      return alert(IN_AVAILABLE_QUANTITY);
    }
    return true;
  }

  changeTableRowFormat(productId, { name, price, quantity }) {
    const newProductData = [name, price, quantity]
      .filter(data => data)
      .map((value, key) => ({ text: value, id: productId[key] }));
    return newProductData;
  }

  getProductData() {
    return JSON.parse(localStorage.getItem(PRODUCT));
  }

  setProductData(productData) {
    return localStorage.setItem(PRODUCT, JSON.stringify(productData));
  }
}
