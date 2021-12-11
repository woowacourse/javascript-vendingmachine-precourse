import {
  ADMIN_ELEMENT_ID,
  ADMIN_ERR,
  ADMIN_RULES,
} from '../constants/constants.js';

export default class AdminModel {
  constructor() {
    this.productNameEl = document.querySelector(
      `#${ADMIN_ELEMENT_ID.productNameInput}`,
    );
    this.productPriceEl = document.querySelector(
      `#${ADMIN_ELEMENT_ID.productPriceInput}`,
    );
    this.productQuantityEl = document.querySelector(
      `#${ADMIN_ELEMENT_ID.productQuantityInput}`,
    );
    this.productAddEl = document.querySelector(
      `#${ADMIN_ELEMENT_ID.productAddButton}`,
    );
    this.productStorage = JSON.parse(localStorage.getItem('productList'));
  }

  getProductName() {
    return this.productNameEl.value;
  }

  getProductPrice() {
    return this.productPriceEl.value;
  }

  getProductQuantity() {
    return this.productQuantityEl.value;
  }

  resetProductAddInput() {
    this.productNameEl.value = '';
    this.productPriceEl.value = '';
    this.productQuantityEl.value = '';
  }

  getProductStorage() {
    return this.productStorage;
  }

  addProductStorage() {
    const newProduct = {
      name: this.getProductName(),
      price: this.getProductPrice(),
      quantity: this.getProductQuantity(),
    };
    const productList = this.getProductStorage();
    if (productList) {
      const newProductList = [...productList, newProduct];
      localStorage.setItem('productList', JSON.stringify(newProductList));
    } else {
      localStorage.setItem('productList', JSON.stringify([newProduct]));
    }
    this.updateProductStorage();
  }

  updateProductStorage() {
    this.productStorage = JSON.parse(localStorage.getItem('productList'));
  }

  isValidProductName() {
    if (this.productNameEl.value.trim().length === 0) {
      alert(ADMIN_ERR.name);
      return false;
    }

    return true;
  }

  isValidProductPrice() {
    if (
      this.productPriceEl.value >= ADMIN_RULES.minPrice &&
      this.productPriceEl.value % ADMIN_RULES.measures === 0
    ) {
      return true;
    }
    alert(ADMIN_ERR.price);

    return false;
  }

  isValidProductQuantity() {
    if (this.productQuantityEl.value < ADMIN_RULES.minQuantity) {
      alert(ADMIN_ERR.quantity);
      return false;
    }

    return true;
  }

  isValidProductAdd() {
    if (
      this.isValidProductName() &&
      this.isValidProductPrice() &&
      this.isValidProductQuantity()
    ) {
      return true;
    }

    return false;
  }
}
