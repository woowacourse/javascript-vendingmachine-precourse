import { ALERT, PRODUCT_PURCHASE } from '../constants.js';
import ProductAdd from '../elements/ProductAdd.js';
import ProductPurchase from '../elements/ProductPurchase.js';
import PurchaseBtnHandler from '../handler/PurchaseBtnHandler.js';
import Storage from './localStorage/Storage.js';
import {
  appendClass,
  appendTheadStyle,
  createBtnClassDataset,
  createThClassDataset,
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
    this.storage = new Storage();
    this.productName = '';
    this.productPrice = 0;
    this.productQuantity = 0;
    this.addProduct();
    this.getCurrentProduct();
  }

  getCurrentProduct() {
    const current = this.storage.product;
    this.addProductAddTable(current.name, current.price, current.quantity);
    this.addProductPurchaseTable(current.name, current.price, current.quantity);
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
        this.storage.updateProduct({
          name: this.productName,
          price: this.productPrice,
          quantity: this.productQuantity,
        });
      }
    });
  }

  getProductName(input) {
    this.productName = input.value;
    if (!checkProductName(this.productName)) {
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

    createThClassDataset(tableRow, name, 'product-manage-name', 'data-add-name', name);
    createThClassDataset(tableRow, price, 'product-manage-price', 'data-add-price', price);
    createThClassDataset(
      tableRow,
      quantity,
      'product-manage-quantity',
      'data-add-quantity',
      quantity,
    );

    this.productAdd.tableBody.appendChild(tableRow);
    appendTheadStyle(this.productAdd.tableBody);
  }

  addProductPurchaseTable(name, price, quantity) {
    const tableRow = document.createElement('tr');
    appendClass(tableRow, 'product-purchase-item');

    createThClassDataset(tableRow, name, 'product-purchase-name', 'data-product-name', name);
    createThClassDataset(tableRow, price, 'product-purchase-price', 'data-product-price', price);
    createThClassDataset(
      tableRow,
      quantity,
      'product-purchase-quantity',
      'data-product-quantity',
      quantity,
    );

    new PurchaseBtnHandler(this.addProductPurchaseBtn(tableRow));

    this.productPurchase.tableBody.appendChild(tableRow);
    appendTheadStyle(this.productPurchase.tableBody);
  }

  addProductPurchaseBtn(tableRow) {
    createBtnClassDataset(
      tableRow,
      PRODUCT_PURCHASE.PURCHASE_BTN,
      'purchase-button',
      'data-product-purchase',
      'purchase',
    );
    return tableRow;
  }
}
