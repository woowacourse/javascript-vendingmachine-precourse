import { $, ID } from '../utils/dom.js';
import { productAddMenuTemplate } from '../utils/templates.js';
import { RULES, ERROR_MSG } from '../utils/constants.js';

const LS_KEY_PRODUCTS = 'products';

export default class ProductAdd {
  constructor() {
    this.init();
    this.products = this.loadProducts();
    $('form').addEventListener('submit', this.handleProductAddSubmit);
  }

  init = () => {
    $(`#${ID.PAGE_CONTENT}`).innerHTML = productAddMenuTemplate();
  };

  loadProducts = () => {
    const loadedProducts = localStorage.getItem(LS_KEY_PRODUCTS);
    if (loadedProducts) {
      const parsedProducts = JSON.parse(loadedProducts);
      return parsedProducts;
    }
    if (!loadedProducts) {
      return [];
    }
  };

  handleProductAddSubmit = (e) => {
    e.preventDefault();
    const name = $(`#${ID.PRODUCT_NAME_INPUT}`).value,
      price = $(`#${ID.PRODUCT_PRICE_INPUT}`).value,
      quantity = $(`#${ID.PRODUCT_QUANTITY_INPUT}`).value;
    const isValid = this.validateInputs(name, price, quantity);

    if (!isValid) {
      alert(ERROR_MSG.PRODUCT_ADD);
    }
    if (isValid) {
      const newProduct = this.createProduct(name, price, quantity);
      this.products.push(newProduct);
      this.saveProducts(this.products);
      this.clearInputs();
    }
  };

  validateInputs = (name, price, quantity) => {
    const parsedPrice = parseInt(price);
    const parsedQuantity = parseInt(quantity);
    if (parsedPrice < RULES.MIN_PRICE) {
      return false;
    }
    if (parsedPrice % RULES.MIN_PRICE_UNIT) {
      return false;
    }
    if (parsedQuantity < RULES.MIN_QUANTITY) {
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

  saveProducts = (products) => {
    localStorage.setItem(LS_KEY_PRODUCTS, JSON.stringify(products));
  };

  clearInputs = () => {
    $(`#${ID.PRODUCT_NAME_INPUT}`).value = '';
    $(`#${ID.PRODUCT_PRICE_INPUT}`).value = '';
    $(`#${ID.PRODUCT_QUANTITY_INPUT}`).value = '';
  };
}
