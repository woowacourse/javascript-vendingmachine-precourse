import { PRODUCT, ALERT, LOCALSTORAGE } from '../utils/constants.js';

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
    console.log(pickedItem);
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

const isPickedProduct = (item, name) => item[PRODUCT.NAME] === name;
const isValidProductInput = (products, product) => {
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
  if (products.filter((item) => item[PRODUCT.NAME] === product[PRODUCT.NAME]).length) {
    alert(ALERT.SAME_NAME_PRODUCT_EXIST);
    return;
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
