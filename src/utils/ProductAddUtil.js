import { ALERT } from '../constants.js';
import ProductAdd from '../elements/ProductAdd.js';
import { appendTheadStyle, createTh } from '../init/elementfunc.js';
import {
  checkProductName,
  checkProductPrice,
  checkProductQuantity,
} from './validators/checkInput.js';

export default class ProductAddUtil {
  constructor() {
    this.productAdd = new ProductAdd();
    this.productName = '';
    this.productPrice = 0;
    this.productQuantity = 0;
    this.addProduct();
  }

  addProduct() {
    this.productAdd.submit.addEventListener('click', e => {
      e.preventDefault();
      if (
        this.getProductName(this.productAdd.nameInput) &&
        this.getProductPrice(this.productAdd.priceInput) &&
        this.getProductQuantity(this.productAdd.quantityInput)
      ) {
        this.addProductTable(
          this.productName,
          this.productPrice,
          this.productQuantity,
        );
      }
    });
  }

  getProductName(input) {
    this.productName = input.value;
    if (!checkProductName(this.productName)) {
      alert(ALERT.NULL_PRODUCT_NAME);
    }
    return this.productName;
  }

  getProductPrice(input) {
    this.productPrice = input.value;
    if (!checkProductPrice(this.productPrice)) {
      alert(ALERT.WRONG_PRODUCT_PRICE);
    }

    return this.productPrice;
  }

  getProductQuantity(input) {
    this.productQuantity = input.value;
    if (!checkProductQuantity(this.productQuantity)) {
      alert(ALERT.WRONG_PRODUCT_QUANTITY);
    }

    return this.getProductQuantity;
  }

  addProductTable(name, price, quantity) {
    const tableRow = document.createElement('tr');
    createTh(tableRow, name);
    createTh(tableRow, price);
    createTh(tableRow, quantity);
    console.log(tableRow);
    this.productAdd.tableBody.appendChild(tableRow);
    appendTheadStyle(this.productAdd.tableBody);
  }
}
