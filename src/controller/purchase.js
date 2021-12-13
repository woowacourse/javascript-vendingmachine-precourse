import { $, getItemOrArray, getItemOrNull, setItem, isEnoughCoin } from './utils.js';
import {
  addTableRow,
  addTableHeader,
  clearTable,
  setInnerHTML,
  clearInput,
} from '../view/index.js';
import { KEY, SELECTOR } from '../model/constants.js';
import { productPurchaseTableRow, productPurchaseTableHeader } from '../model/dom.js';

const initAllPurchaseButtonEvent = () => {
  const allButtons = document.querySelectorAll(`.${SELECTOR.purchaseButton}`);
  allButtons.forEach(button =>
    button.addEventListener('click', () => purchaseProduct(button.parentElement.parentElement)),
  );
};

const initProductStatusTable = () => {
  const table = document.querySelector('tbody');
  const allProducts = getItemOrArray(KEY.product);
  clearTable(table);
  addTableHeader(table, productPurchaseTableHeader());
  allProducts.forEach(product => addTableRow(table, productPurchaseTableRow(product)));
  initAllPurchaseButtonEvent();
};

const initPurchaseDom = () => {
  const charge = getItemOrNull(KEY.charge);
  if (charge || charge === 0) {
    setInnerHTML($(SELECTOR.chargeAmount), charge);
  }
  initProductStatusTable();
};

const calculateProducts = (selectProduct, products) => {
  selectProduct.quantity -= 1;
  if (selectProduct.quantity === 0) {
    products = products.filter(product => product.name !== selectProduct.name);
  }
  setItem(KEY.product, products);
};

const calculateCharge = (selectProduct, charge) => {
  charge -= selectProduct.price;
  setItem(KEY.charge, charge);
};

const purchaseProduct = item => {
  const charge = getItemOrNull(KEY.charge);
  const products = getItemOrArray(KEY.product);
  const selectProduct = products.find(e => e.name === item.childNodes[1].dataset.productName);
  if (isEnoughCoin(charge, selectProduct.price)) {
    calculateProducts(selectProduct, products);
    calculateCharge(selectProduct, charge);
    initPurchaseDom();
  }
};

const initChargeDom = () => {
  const charge = getItemOrNull(KEY.charge);
  clearInput($(SELECTOR.chargeInput));
  if (charge || charge === 0) {
    setInnerHTML($(SELECTOR.chargeAmount), charge);
  }
};

const chargeMoney = () => {
  const chargeInput = $(SELECTOR.chargeInput);
  let charge = getItemOrNull(KEY.charge);
  if (charge || charge === 0) {
    charge += parseInt(chargeInput.value);
  } else if (charge === null) {
    charge = parseInt(chargeInput.value);
  }
  setItem(KEY.charge, charge);
  initChargeDom();
};

export const initAllPurchase = () => {
  initProductStatusTable();
  initChargeDom();
  $(SELECTOR.chargeButton).addEventListener('click', () => chargeMoney());
  // $(SELECTOR.returnButton).addEventListener('click', () => returnMoney());
};
