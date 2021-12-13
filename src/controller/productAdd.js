import {
  $,
  getItemOrArray,
  setItem,
  isBlankExist,
  isInputNumberValid,
  isMultipleOf10,
  isOver100,
  isAlreadyExistProduct,
  onKeyUpNumericEvent,
} from './utils.js';
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
  !isBlankExist(productName) && !isAlreadyExistProduct(productName);

const isProductPriceValid = productPrice =>
  isInputNumberValid(productPrice) && isMultipleOf10(productPrice) && isOver100(productPrice);

const isProductInputsValid = (productName, productPrice, productQuantity) =>
  isProductNameValid(productName) &&
  isProductPriceValid(productPrice) &&
  isInputNumberValid(productQuantity);

const updateProductLocalStorage = product => {
  const allProducts = getItemOrArray(KEY.product);
  allProducts.push(product);
  setItem(KEY.product, allProducts);
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
  const allProducts = getItemOrArray(KEY.product);
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
