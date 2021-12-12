import { PRODUCT, ALERT } from '../utils/constants.js';

const initProducts = () => {
  return JSON.parse(localStorage.getItem('products'))
    ? JSON.parse(localStorage.getItem('products'))
    : [];
};

export default {
  products: initProducts(),
  add(product) {
    if (!isValidProductInput(product)) {
      return;
    }
    this.products.push(product);
    localStorage.setItem('products', JSON.stringify(this.products));
  },
  list() {
    return this.products;
  },
  sell(product) {
    this.products.find((item) => isPickedProduct(item, product))[PRODUCT.QUANTITY] -= 1;
    localStorage.setItem('products', JSON.stringify(this.products));
  },
};

const isPickedProduct = (item, product) => item[PRODUCT.NAME] === product[PRODUCT.NAME];
const isValidProductInput = (product) => {
  if (product[PRODUCT.NAME] === '') {
    alert(ALERT.EMPTY_PRODUCT_NAME);
    return false;
  }
  if (product[PRODUCT.PRICE] === '') {
    alert(ALERT.EMPTY_PRODUCT_PRICE);
    return false;
  }
  if (product[PRODUCT.QUANTITY] === '') {
    alert(ALERT.EMPTY_PRODUCT_QUANTITY);
    return false;
  }
  if (parseInt(product[PRODUCT.PRICE]) <= 0) {
    alert(ALERT.WRONG_PRODUCT_PRICE);
    return false;
  }
  if (parseInt(product[PRODUCT.QUANTITY]) <= 0) {
    alert(ALERT.WRONG_PRODUCT_QUANTITY);
    return false;
  }
  if (parseInt(product[PRODUCT.PRICE]) % 10 !== 0) {
    alert(ALERT.NOT_10_UNIT_PRICE);
    return false;
  }
  return true;
};
