import { $, ID, CLASS } from '../utils/dom.js';
import { productAddMenuTemplate } from '../utils/templates.js';
import { RULES, ERROR_MSG } from '../utils/constants.js';

const LS_KEY_PRODUCTS = 'products';

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
    const loadedProducts = localStorage.getItem(LS_KEY_PRODUCTS);
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
    localStorage.setItem(LS_KEY_PRODUCTS, JSON.stringify(this.products));
  };

  paintProduct = (product) => {
    const $table = $(`table`);
    const $newTableRow = document.createElement('tr');
    $newTableRow.classList.add(CLASS.PRODUCT_MANAGE_ITEM);

    const $newTableData__name = document.createElement('td');
    const $newTableData__price = document.createElement('td');
    const $newTableData__quantity = document.createElement('td');
    $newTableData__name.innerHTML = product.name;
    $newTableData__price.innerHTML = product.price;
    $newTableData__quantity.innerHTML = product.quantity;
    $newTableData__name.classList.add(CLASS.PRODUCT_MANAGE_NAME);
    $newTableData__price.classList.add(CLASS.PRODUCT_MANAGE_PRICE);
    $newTableData__quantity.classList.add(CLASS.PRODUCT_MANAGE_QUANTITY);

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
