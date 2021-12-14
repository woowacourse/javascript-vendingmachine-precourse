import {
  $,
  paintTemplate,
  createTRow,
  createTData,
  clearInputs,
  ID,
  CLASS,
} from '../utils/dom.js';
import { productAddMenuTemplate } from '../utils/templates.js';
import { ERROR_MSG, LS_KEY } from '../utils/constants.js';
import {
  load,
  isSmallerThanMinPrice,
  cannotBeDividedByMinUnit,
  isSmallerThanMinQuantity,
} from '../utils/controller.js';

export default class ProductAdd {
  constructor() {
    this.products = [];
    this.init();
  }

  init = () => {
    paintTemplate(productAddMenuTemplate);
    this.products = load(LS_KEY.PRODUCT_ADD_PRODUCTS);

    this.paintLoadedProducts();
    $('form').addEventListener('submit', this.handleProductAddSubmit);
  };

  paintLoadedProducts = () => {
    this.products.map((product) => this.paintProduct(product));
  };

  handleProductAddSubmit = (e) => {
    e.preventDefault();
    const $nameInput = $(`#${ID.PRODUCT_NAME_INPUT}`),
      $priceInput = $(`#${ID.PRODUCT_PRICE_INPUT}`),
      $quantityInput = $(`#${ID.PRODUCT_QUANTITY_INPUT}`);
    const name = $nameInput.value,
      price = parseInt($priceInput.value),
      quantity = parseInt($quantityInput.value);
    const isValid = this.validateInputs(price, quantity);
    if (!isValid) {
      alert(ERROR_MSG.PRODUCT_ADD);
    }
    if (isValid) {
      const newProduct = this.createProduct(name, price, quantity);
      this.paintProduct(newProduct);
      this.saveProduct(newProduct);
      clearInputs([$nameInput, $priceInput, $quantityInput]);
    }
  };

  validateInputs = (price, quantity) => {
    if (isSmallerThanMinPrice(price)) {
      return false;
    }
    if (cannotBeDividedByMinUnit(price)) {
      return false;
    }
    if (isSmallerThanMinQuantity(quantity)) {
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
}
