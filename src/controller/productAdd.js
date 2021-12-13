import { $, handleStorage, validation, onKeyUpNumericEvent } from './utils.js';
import { SELECTOR, KEY } from '../model/constants.js';
import { productAddTableRow } from '../model/template.js';
import Product from '../model/product.js';

export default class ProductAdd {
  constructor(view) {
    this.view = view;
    this.initTable(this.view);
    this.addEventListeners();
  }

  addEventListeners() {
    $(SELECTOR.productAddButton).addEventListener('click', () => this.addProduct());
    $(SELECTOR.productPriceInput).addEventListener('keyup', () =>
      onKeyUpNumericEvent($(SELECTOR.productPriceInput)),
    );
    $(SELECTOR.productQuantityInput).addEventListener('keyup', () =>
      onKeyUpNumericEvent($(SELECTOR.productQuantityInput)),
    );
  }

  initTable(view) {
    const allProducts = handleStorage.getItemOrArray(KEY.product);
    const table = document.querySelector('tbody');
    allProducts.forEach(product => view.addTableRow(table, productAddTableRow(product)));
  }

  initInput(productName, productPrice, productQuantity) {
    this.view.clearInput(productName);
    this.view.clearInput(productPrice);
    this.view.clearInput(productQuantity);
  }

  isProductNameValid(productName) {
    return !validation.isBlankExist(productName) && !validation.isAlreadyExistProduct(productName);
  }

  isProductPriceValid(productPrice) {
    return (
      validation.isInputNumberValid(productPrice) &&
      validation.isMultipleOf10(productPrice) &&
      validation.isOver100(productPrice)
    );
  }

  isProductInputsValid(productName, productPrice, productQuantity) {
    return (
      this.isProductNameValid(productName) &&
      this.isProductPriceValid(productPrice) &&
      validation.isInputNumberValid(productQuantity)
    );
  }

  updateProductLocalStorage(product) {
    const allProducts = handleStorage.getItemOrArray(KEY.product);
    allProducts.push(product);
    handleStorage.setItem(KEY.product, allProducts);
  }

  addProduct() {
    const productName = $(SELECTOR.productNameInput);
    const productPrice = $(SELECTOR.productPriceInput);
    const productQuantity = $(SELECTOR.productQuantityInput);
    if (this.isProductInputsValid(productName, productPrice, productQuantity)) {
      const product = new Product(productName.value, productPrice.value, productQuantity.value);
      const table = document.querySelector('tbody');

      this.updateProductLocalStorage(product);
      this.view.addTableRow(table, productAddTableRow(product));
      this.initInput(productName, productPrice, productQuantity);
    }
  }
}
