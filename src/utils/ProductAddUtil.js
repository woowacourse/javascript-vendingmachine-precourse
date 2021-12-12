import { ALERT, PRODUCT_PURCHASE } from '../constants.js';
import ProductAdd from '../elements/ProductAdd.js';
import ProductPurchase from '../elements/ProductPurchase.js';

import {
  appendClass,
  appendTheadStyle,
  createBtnClass,
  createThClass,
} from '../init/elementfunc.js';
import {
  checkProductName,
  checkProductPrice,
  checkProductQuantity,
} from './validators/checkInput.js';

export default class ProductAddUtil {
  constructor() {
    this.productAdd = new ProductAdd();
    this.productPurchase = new ProductPurchase();
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
        this.addProductAddTable(this.productName, this.productPrice, this.productQuantity);
        this.addProductPurchaseTable(this.productName, this.productPrice, this.productQuantity);
      }
    });
  }

  getProductName(input) {
    this.productName = input.value;
    if (!checkProductName(this.productName)) {
      alert(ALERT.NULL_PRODUCT_NAME);
      return;
    }
    return this.productName;
  }

  getProductPrice(input) {
    this.productPrice = input.value;
    if (!checkProductPrice(this.productPrice)) {
      alert(ALERT.WRONG_PRODUCT_PRICE);
      return;
    }

    return this.productPrice;
  }

  getProductQuantity(input) {
    this.productQuantity = input.value;
    if (!checkProductQuantity(this.productQuantity)) {
      alert(ALERT.WRONG_PRODUCT_QUANTITY);
      return;
    }

    return this.getProductQuantity;
  }

  addProductAddTable(name, price, quantity) {
    const tableRow = document.createElement('tr');
    appendClass(tableRow, 'product-manage-item');

    createThClass(tableRow, name, 'product-manage-name');
    createThClass(tableRow, price, 'product-manage-price');
    createThClass(tableRow, quantity, 'product-manage-quantity');

    this.productAdd.tableBody.appendChild(tableRow);
    appendTheadStyle(this.productAdd.tableBody);
  }

  addProductPurchaseTable(name, price, quantity) {
    const tableRow = document.createElement('tr');
    appendClass(tableRow, 'product-purchase-item');

    createThClass(tableRow, name, 'product-purchase-name');
    createThClass(tableRow, price, 'product-purchase-price');
    createThClass(tableRow, quantity, 'product-purchase-quantity');
    this.addProductPurchaseBtn(tableRow);

    this.productPurchase.tableBody.appendChild(tableRow);
    appendTheadStyle(this.productPurchase.tableBody);
  }

  addProductPurchaseBtn(tableRow) {
    createBtnClass(tableRow, PRODUCT_PURCHASE.PURCHASE_BTN, 'purchase-button');
  }
}
