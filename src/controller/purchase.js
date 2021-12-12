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

const initChargeDomProperty = () => {
  const charge = getItemOrNull(KEY.charge);
  $(SELECTOR.chargeInput).value = '';
  if (charge) {
    $(SELECTOR.chargeAmount).innerHTML = charge;
  }
};

const chargeMoney = () => {
  let charge = getItemOrNull(KEY.charge);
  const chargeInput = $(SELECTOR.chargeInput);
  if (charge || charge === 0) {
    charge += parseInt(chargeInput.value);
  } else if (charge === null) {
    charge = parseInt(chargeInput.value);
  }
  setItem(KEY.charge, charge);
  initChargeDomProperty();
};

const addTableRow = (table, product) =>
  table.insertAdjacentHTML('beforeend', productPurchaseTableRow(product));

const initProductStatusTable = () => {
  const table = document.querySelector('tbody');
  const allProducts = getItemOrArray(KEY.product);
  allProducts.forEach(product => addTableRow(table, product));
};

export const initAllPurchase = () => {
  initProductStatusTable();
  initChargeDomProperty();
  $(SELECTOR.chargeButton).addEventListener('click', () => chargeMoney());
};
