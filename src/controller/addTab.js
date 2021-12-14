import { $, validation, onKeyUpNumericEvent } from './utils.js';
import { SELECTOR } from '../model/constants.js';
import { productAddTableRow } from '../model/template.js';

export default class AddTab {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.init();
  }

  init() {
    this.initTable();
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

  initTable() {
    const table = document.querySelector('tbody');
    this.model
      .getProducts()
      .forEach(product => this.view.addTableRow(table, productAddTableRow(product)));
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

  addProduct() {
    const productName = $(SELECTOR.productNameInput);
    const productPrice = $(SELECTOR.productPriceInput);
    const productQuantity = $(SELECTOR.productQuantityInput);
    if (this.isProductInputsValid(productName, productPrice, productQuantity)) {
      const product = this.model.makeProduct(productName, productPrice, productQuantity);
      const table = document.querySelector('tbody');
      this.model.addProduct(product);
      this.view.addTableRow(table, productAddTableRow(product));
      this.initInput(productName, productPrice, productQuantity);
    }
  }
}
