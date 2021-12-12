import { SELECTOR, KEY, ALERT_MESSAGE } from '../model/constants.js';
import {
  $,
  getItemOrArray,
  setItem,
  isBlankExist,
  isInputNumberValid,
  isMultipleOf10,
  onKeyUpNumericEvent,
} from './utils.js';
import { productAddTableRow } from '../model/dom.js';
import Product from '../model/product.js';

const addTableRow = (table, product) =>
  table.insertAdjacentHTML('beforeend', productAddTableRow(product));

const isAlreadyExistProduct = input => {
  const allProducts = getItemOrArray('products');
  const isExist = allProducts.find(e => e.name === input);
  if (isExist) {
    alert(ALERT_MESSAGE.isAlreadyExistProduct);
  }

  return isExist;
};
const isProductNameValid = (placeholder, input) =>
  !isBlankExist(placeholder, input) && !isAlreadyExistProduct(input);

const isProductPriceValid = (placeholder, input) =>
  isInputNumberValid(placeholder, input) && isMultipleOf10(placeholder, input);

const isProductInputsValid = (productName, productPrice, productQuantity) =>
  isProductNameValid(productName.placeholder, productName.value) &&
  isProductPriceValid(productPrice.placeholder, productPrice.value) &&
  isInputNumberValid(productQuantity.placeholder, productQuantity.value);

const initInput = (productName, productPrice, productQuantity) => {
  productName.value = '';
  productPrice.value = '';
  productQuantity.value = '';
};

const addProduct = () => {
  const productName = $(SELECTOR.productNameInput);
  const productPrice = $(SELECTOR.productPriceInput);
  const productQuantity = $(SELECTOR.productQuantityInput);
  if (isProductInputsValid(productName, productPrice, productQuantity)) {
    const allProducts = getItemOrArray(KEY.product);
    const product = new Product(
      productName.value,
      parseInt(productPrice.value),
      parseInt(productQuantity.value),
    );
    const table = document.querySelector('tbody');
    addTableRow(table, product);
    allProducts.push(product);
    setItem(KEY.product, allProducts);
    initInput(productName, productPrice, productQuantity);
  }
};

const initTable = () => {
  const table = document.querySelector('tbody');
  const allProducts = getItemOrArray(KEY.product);
  allProducts.forEach(product => addTableRow(table, product));
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