import { $, createTRow, createTData, ID, CLASS } from '../utils/dom.js';
import { productAddMenuTemplate } from '../utils/templates.js';
import { RULES, ERROR_MSG, LS_KEY } from '../utils/constants.js';

export default class ProductAdd {
  constructor() {
    this.products = [];
    this.init();
  }

  init = () => {
    this.paintTemplate();
    this.loadProducts();
    this.paintLoadedProducts();
    $('form').addEventListener('submit', this.handleProductAddSubmit);
  };

  paintTemplate = () => {
    $(`#${ID.PAGE_CONTENT}`).innerHTML = productAddMenuTemplate();
  };

  loadProducts = () => {
    const loadedProducts = localStorage.getItem(LS_KEY.PRODUCT_ADD_PRODUCTS);
    if (!loadedProducts) {
      return;
    }
    const parsedProducts = JSON.parse(loadedProducts);
    this.products = parsedProducts;
    return;
  };

  paintLoadedProducts = () => {
    this.products.map((product) => this.paintProduct(product));
  };

  handleProductAddSubmit = (e) => {
    e.preventDefault();
    const name = $(`#${ID.PRODUCT_NAME_INPUT}`).value,
      price = parseInt($(`#${ID.PRODUCT_PRICE_INPUT}`).value),
      quantity = parseInt($(`#${ID.PRODUCT_QUANTITY_INPUT}`).value);

    const isValid = this.validateInputs(name, price, quantity);
    if (!isValid) {
      alert(ERROR_MSG.PRODUCT_ADD);
    }
    if (isValid) {
      const newProduct = this.createProduct(name, price, quantity);
      this.paintProduct(newProduct);
      this.saveProduct(newProduct);
      this.clearInputs();
    }
  };

  validateInputs = (name, price, quantity) => {
    if (price < RULES.MIN_PRICE) {
      return false;
    }
    if (price % RULES.MIN_PRICE_UNIT) {
      return false;
    }
    if (quantity < RULES.MIN_QUANTITY) {
      return false;
    }
    return true;
  };

  createProduct = (name, price, quantity) => {
    const productObj = {
      name: name,
      price: price,
      quantity: quantity,
    };
    return productObj;
  };

  saveProduct = (product) => {
    this.products.push(product);
    localStorage.setItem(LS_KEY.PRODUCT_ADD_PRODUCTS, JSON.stringify(this.products));
  };

  paintProduct = (product) => {
    const $table = $(`table`);
    const $newTableRow = createTRow(CLASS.PRODUCT_MANAGE_ITEM);
    const $newTableData__name = createTData(CLASS.PRODUCT_MANAGE_NAME, product.name);
    const $newTableData__price = createTData(CLASS.PRODUCT_MANAGE_PRICE, product.price);
    const $newTableData__quantity = createTData(
      CLASS.PRODUCT_MANAGE_QUANTITY,
      product.quantity
    );

    $newTableRow.appendChild($newTableData__name);
    $newTableRow.appendChild($newTableData__price);
    $newTableRow.appendChild($newTableData__quantity);
    $table.appendChild($newTableRow);
  };

  clearInputs = () => {
    $(`#${ID.PRODUCT_NAME_INPUT}`).value = '';
    $(`#${ID.PRODUCT_PRICE_INPUT}`).value = '';
    $(`#${ID.PRODUCT_QUANTITY_INPUT}`).value = '';
  };
}
