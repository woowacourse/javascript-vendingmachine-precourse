import { createContainer } from '../utils/createElementUtils.js';
import {
  ID_PRODUCT_ADD_TAB,
  ID_PRODUCT_NAME_INPUT,
  ID_PRODUCT_PRICE_INPUT,
  ID_PRODUCT_QUANTITY_INPUT,
  ID_PRODUCT_ADD_STATUS,
} from './constants.js';
import handleProductInput from './eventhandler.js';
import {
  createProductObjects,
  createTR,
  ProductFormSection,
  ProductFormSubmit,
  ProductFormTitle,
  ProductNameInput,
  ProductPriceInput,
  ProductQuantityInput,
  ProductTable,
  ProductTableSection,
  ProductTableTitle,
} from './components.js';
import { getFromStorage } from '../store.js';

export default class AddProducts {
  constructor() {
    this.section = this.createAddProductTab();
    this.DOMs = {};
    this.handleDOMs();
    this.addAllProductRows();
  }

  createAddProductTab() {
    const formContainer = this.createFormContainer();
    const currentContainer = this.constructor.createTableContainer();

    return createContainer(
      document.createElement('section'),
      [formContainer, currentContainer],
      ID_PRODUCT_ADD_TAB,
    );
  }

  createFormContainer() {
    const container = ProductFormSection();

    container.appendChild(ProductFormTitle);
    container.appendChild(ProductNameInput);
    container.appendChild(ProductPriceInput);
    container.appendChild(ProductQuantityInput);

    const submitButton = ProductFormSubmit();
    submitButton.addEventListener('click', handleProductInput.bind(this));
    container.appendChild(submitButton);

    return container;
  }

  static createTableContainer() {
    const container = ProductTableSection();

    container.appendChild(ProductTableTitle);
    container.appendChild(ProductTable());

    return container;
  }

  addProductTableRow(name, property) {
    const productData = createProductObjects(name, property);
    const row = createTR(productData);
    this.DOMs.table.appendChild(row);
  }

  addAllProductRows() {
    const products = getFromStorage('products') || {};
    Object.keys(products).forEach((p) => {
      this.addProductTableRow(p, products[p]);
    });
  }

  addDOM(key, id) {
    this.DOMs[key] = this.section.querySelector(`#${id}`);
  }

  handleDOMs() {
    this.addDOM('name', ID_PRODUCT_NAME_INPUT);
    this.addDOM('price', ID_PRODUCT_PRICE_INPUT);
    this.addDOM('quantity', ID_PRODUCT_QUANTITY_INPUT);
    this.addDOM('table', ID_PRODUCT_ADD_STATUS);
  }

  clearForm() {
    this.DOMs.name.value = '';
    this.DOMs.price.value = '';
    this.DOMs.quantity.value = '';
  }
}
