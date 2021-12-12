import {
  $,
  getItemOrArray,
  getItemOrNull,
  setItem,
  isMultipleOf10,
  isInputNumberValid,
  onKeyUpNumericEvent,
} from './utils.js';
import { KEY, SELECTOR, COIN_ARRAY } from '../model/constants.js';
import { productPurchaseTableRow } from '../model/dom.js';
import VendingMachine from '../model/vendingMachine.js';

const addTableRow = (table, product) =>
  table.insertAdjacentHTML('beforeend', productPurchaseTableRow(product));

const initProductStatusTable = () => {
  const table = document.querySelector('tbody');
  const allProducts = getItemOrArray(KEY.product);
  allProducts.forEach(product => addTableRow(table, product));
};

export const initAllPurchase = () => {
  initProductStatusTable();
};
