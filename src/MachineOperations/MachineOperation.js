import {
  ERROR_DUPLICATE_NAME,
  ERROR_EMPTY_NAME,
  ERROR_INVALID_PRICE,
  ERROR_INVALID_QUANTITY,
  VAL_PRICE_ROUND_STANDARD,
} from '../AddProducts/AddProducts.constants.js';
import { getAllProducts } from '../Utils.js';

export default class MachineOperations {
  constructor() {
    this.errorMessage = '';
  }

  registerProduct(name, price, quantity) {
    if (this.validateProductInput(name, price, quantity)) {
      const productObjects = getAllProducts() || {};
      productObjects[name] = { price, quantity };
      window.localStorage.setItem('products', JSON.stringify(productObjects));
      return true;
    }

    alert(this.errorMessage);
    return false;
  }

  validateProductInput(name, price, quantity) {
    return (
      this.validateNameInput(name) &&
      this.validatePriceInput(price) &&
      this.validateQuantityInput(quantity)
    );
  }

  validateNameInput(name) {
    const products = getAllProducts() || {};
    if (name in products) {
      this.errorMessage = ERROR_DUPLICATE_NAME;
      return false;
    }
    if (name.replace(/\s/g, '').length === 0) {
      this.errorMessage = ERROR_EMPTY_NAME;
      return false;
    }
    return true;
  }

  validatePriceInput(price) {
    if (price % VAL_PRICE_ROUND_STANDARD !== 0 || price <= 0) {
      this.errorMessage = ERROR_INVALID_PRICE;
      return false;
    }
    return true;
  }

  validateQuantityInput(quantity) {
    if (!Number.isInteger(quantity) || quantity <= 0) {
      this.errorMessage = ERROR_INVALID_QUANTITY;
      return false;
    }
    return true;
  }
}
