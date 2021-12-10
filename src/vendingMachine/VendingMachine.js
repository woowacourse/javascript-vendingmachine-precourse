import Validator from '../validator/Validator.js';
import initView from '../view/initView.js';
import Product from './Product.js';

export const PRODUCTS_STORAGE_KEY = 'products';

export default class VendingMachine {
  constructor() {
    initView();
    this.products = [];
  }

  addProduct(product) {
    if (Validator.isValidAddInput(product)) {
      const addedProduct = new Product(product);

      this.products.push(addedProduct);
      localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(this.products));
      return addedProduct;
    }
    return null;
  }
}
