import { getLocalStorage, getLocalStorageAfterSet } from "../util/localStorage.js";

export default class ProductModel {
  constructor() {
    this.products = getLocalStorage("product") || [];
  }

  getProducts = () => {
    return this.products;
  };

  updateProducts = () => {
    this.products = getLocalStorageAfterSet("product", this.products);
  };

  addProduct = ({ name, price, quantity }) => {
    if (this.hasEmpty([name, price, quantity])) {
      throw new Error("입력에 공백이 들어가서는 안됩니다");
    }
    if (this.isNotPositiveQuantity(quantity)) {
      throw new Error("수량은 1이상을 입력해주세요");
    }
    if (this.isNotPriceDividedByTen(price)) {
      throw new Error("10으로 나누어 떨어지는 금액을 입력해주세요");
    }
    if (this.isPriceUnderMin(price)) {
      throw new Error("100원 이상의 금액을 입력해주세요");
    }

    if (this.isExsitName(name)) {
      const idx = this.findProductIdx(name);
      this.products.splice(idx, 1, { name, price, quantity });
    } else {
      this.products.push({ name, price, quantity });
    }
    this.updateProducts();
  };

  findProduct = (name) => {
    return this.products.find((product) => product.name === name);
  };

  findProductIdx = (name) => {
    return this.products.findIndex((product) => product.name === name);
  };

  isExsitName = (name) => {
    return this.findProductIdx(name) !== -1;
  };

  hasEmpty = (inputArray) => {
    return inputArray.some((input) => input === "");
  };

  isNotPositiveQuantity = (quantity) => {
    return quantity <= 0;
  };

  isPriceUnderMin = (price) => {
    return price < 100;
  };

  isNotPriceDividedByTen = (price) => {
    return price % 10 !== 0;
  };
}
