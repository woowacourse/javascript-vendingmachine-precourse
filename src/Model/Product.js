import {
  DUPLICATE_NAME,
  EMPTY_NAME,
  IN_AVAILABLE_QUANTITY,
  LESS_THAN_100,
  NOT_DIVIDE_TEN,
} from "../constant/alertMessage.js";
import { PRODUCT, PRODUCT_MANAGE } from "../constant/vendingMachine.js";
import { clearInputValue, isDivideTen } from "./utils.js";

export default class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  static getNewProductData() {
    const productNameInput = document.getElementById(PRODUCT_MANAGE.PRODUCT_NAME.ID);
    const productPriceInput = document.getElementById(PRODUCT_MANAGE.PRICE.ID);
    const productQuantityInput = document.getElementById(PRODUCT_MANAGE.QUANTITY.ID);
    const inputs = [productNameInput, productPriceInput, productQuantityInput];
    const productData = inputs.map(input => input.value);
    clearInputValue(inputs);
    return productData;
  }

  static addNewProduct(newProduct) {
    const [name, price, quantity] = newProduct;
    const currentProductList = this.getProductData();
    const updateProductList = [...currentProductList, new Product(name, price, quantity)];
    this.setProductData(updateProductList);
  }

  static checkValidNewProductData(productData) {
    const [name, price, quantity] = productData;
    return (
      this.checkName(name) && this.checkPrice(Number(price)) && this.checkQuantity(Number(quantity))
    );
  }

  static checkName(name) {
    if (name === null) {
      return alert(EMPTY_NAME);
    }
    const productList = Product.getProductData().map(product => product.name);
    const isDuplicate = productList.some(existProductName => existProductName === name);
    if (isDuplicate) {
      return alert(DUPLICATE_NAME);
    }
    return !isDuplicate;
  }

  static checkPrice(price) {
    if (!isDivideTen(price)) {
      return alert(NOT_DIVIDE_TEN);
    }
    if (price < 100) {
      return alert(LESS_THAN_100);
    }
    return true;
  }

  static checkQuantity(quantity) {
    if (quantity <= 0) {
      return alert(IN_AVAILABLE_QUANTITY);
    }
    return true;
  }

  static changeTableRowFormat(productId, { name, price, quantity }) {
    const newProductData = [name, price, quantity]
      .filter(data => data)
      .map((value, key) => ({ text: value, id: productId[key] }));
    return newProductData;
  }

  static getProductData() {
    return JSON.parse(localStorage.getItem(PRODUCT));
  }

  static setProductData(productData) {
    return localStorage.setItem(PRODUCT, JSON.stringify(productData));
  }
}
