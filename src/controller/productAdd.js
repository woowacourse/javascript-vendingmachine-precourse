import { $, handleStorage, validation, onKeyUpNumericEvent } from './utils.js';
import { SELECTOR, KEY } from '../model/constants.js';
import { productAddTableRow } from '../model/dom.js';
import Product from '../model/product.js';
import { addTableRow, clearInput } from '../view/index.js';

const initInput = (productName, productPrice, productQuantity) => {
  clearInput(productName);
  clearInput(productPrice);
  clearInput(productQuantity);
};

const isProductNameValid = productName =>
  !validation.isBlankExist(productName) && !validation.isAlreadyExistProduct(productName);

const isProductPriceValid = productPrice =>
  validation.isInputNumberValid(productPrice) &&
  validation.isMultipleOf10(productPrice) &&
  validation.isOver100(productPrice);

const isProductInputsValid = (productName, productPrice, productQuantity) =>
  isProductNameValid(productName) &&
  isProductPriceValid(productPrice) &&
  validation.isInputNumberValid(productQuantity);

const updateProductLocalStorage = product => {
  const allProducts = handleStorage.getItemOrArray(KEY.product);
  allProducts.push(product);
  handleStorage.setItem(KEY.product, allProducts);
};

const addProduct = () => {
  const productName = $(SELECTOR.productNameInput);
  const productPrice = $(SELECTOR.productPriceInput);
  const productQuantity = $(SELECTOR.productQuantityInput);
  if (isProductInputsValid(productName, productPrice, productQuantity)) {
    const product = new Product(productName.value, productPrice.value, productQuantity.value);
    const table = document.querySelector('tbody');

    updateProductLocalStorage(product);
    addTableRow(table, productAddTableRow(product));
    initInput(productName, productPrice, productQuantity);
  }
};

const initTable = () => {
  const allProducts = handleStorage.getItemOrArray(KEY.product);
  const table = document.querySelector('tbody');
  allProducts.forEach(product => addTableRow(table, productAddTableRow(product)));
};

export const initAllProductAdd = () => {
  initTable();
  $(SELECTOR.productAddButton).addEventListener('click', () => addProduct());
  $(SELECTOR.productPriceInput).addEventListener('keyup', () =>
    onKeyUpNumericEvent($(SELECTOR.productPriceInput)),
  );
  $(SELECTOR.productQuantityInput).addEventListener('keyup', () =>
    onKeyUpNumericEvent($(SELECTOR.productQuantityInput)),
  );
};
