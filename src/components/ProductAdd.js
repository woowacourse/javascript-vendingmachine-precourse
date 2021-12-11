import { $, ID } from '../utils/dom.js';
import { productAddMenuTemplate } from '../utils/templates.js';

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
    const currentNameInput = $(`#${ID.PRODUCT_NAME_INPUT}`).value,
      currentPriceInput = $(`#${ID.PRODUCT_PRICE_INPUT}`).value,
      currentQuantityInput = $(`#${ID.PRODUCT_QUANTITY_INPUT}`).value;

    const newProduct = this.createProduct(
      currentNameInput,
      currentPriceInput,
      currentQuantityInput
    );

    this.products.push(newProduct);
    this.saveProducts(this.products);
    this.clearInputs();
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
