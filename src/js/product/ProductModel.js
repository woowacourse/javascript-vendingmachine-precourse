import { getLocalStorage, setLocalStorage } from "../util/localStorage.js";
import { checkValidAddProduct } from "../util/validator.js";
import { LOCAL_STORAGE_KEY } from "../util/constant.js";

export default class ProductModel {
  constructor() {
    this.products = getLocalStorage(LOCAL_STORAGE_KEY.PRODUCT) ?? [];
  }

  getProducts = () => {
    return this.products;
  };

  addProduct = ({ name, price, quantity }) => {
    checkValidAddProduct({ name, price, quantity });

    if (this.isExsitName(name)) {
      const idx = this.findProductIdx(name);
      this.products.splice(idx, 1, { name, price, quantity });
    } else {
      this.products.push({ name, price, quantity });
    }
    setLocalStorage(LOCAL_STORAGE_KEY.PRODUCT, this.products);
  };

  buyProduct = (name) => {
    const product = this.findProduct(name);

    product.quantity -= 1;
    setLocalStorage(LOCAL_STORAGE_KEY.PRODUCT, this.products);
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
}
