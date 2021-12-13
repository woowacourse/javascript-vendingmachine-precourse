import { PRODUCT, ALERT, LOCALSTORAGE } from '../utils/constants.js';
import { isValidProductInput } from '../utils/validation.js';

const initProducts = () => {
  return JSON.parse(localStorage.getItem(LOCALSTORAGE.PRODUCTS))
    ? JSON.parse(localStorage.getItem(LOCALSTORAGE.PRODUCTS))
    : [];
};

export default {
  products: initProducts(),
  add(product) {
    if (!isValidProductInput(this.products, product)) {
      return;
    }
    this.products.push(product);
    this.setProducts();
  },
  list() {
    return this.products;
  },
  sell(name) {
    this.products.find((item) => item[PRODUCT.NAME] === name)[PRODUCT.QUANTITY] -= 1;
    this.setProducts();
  },
  sellable(name) {
    const pickedItem = this.products.find((item) => item[PRODUCT.NAME] === name);
    if (pickedItem[PRODUCT.QUANTITY] <= 0) {
      alert(ALERT.NOT_ENOUGH_QUANTITY);
      return false;
    }
    return true;
  },
  setProducts() {
    localStorage.setItem(LOCALSTORAGE.PRODUCTS, JSON.stringify(this.products));
  },
};
