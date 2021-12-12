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
      alert('수량이 부족합니다.');
      return false;
    }
    return true;
  },
  setProducts() {
    localStorage.setItem('products', JSON.stringify(this.products));
  },
};

const isPickedProduct = (item, name) => item[PRODUCT.NAME] === name;
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
