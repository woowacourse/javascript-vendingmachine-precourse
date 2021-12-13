import { $, handleStorage, validation, onKeyUpNumericEvent } from './utils.js';
import {
  addTableRow,
  addTableHeader,
  initReturnTable,
  clearTable,
  setInnerHTML,
  clearInput,
} from '../view/index.js';
import { KEY, SELECTOR } from '../model/constants.js';
import { productPurchaseTableRow, productPurchaseTableHeader } from '../model/template.js';

const initAllPurchaseButtonEvent = () => {
  const allButtons = document.querySelectorAll(`.${SELECTOR.purchaseButton}`);
  allButtons.forEach(button =>
    button.addEventListener('click', () => purchaseProduct(button.parentElement.parentElement)),
  );
};

const initProductStatusTable = () => {
  const table = document.querySelector('tbody');
  const allProducts = handleStorage.getItemOrArray(KEY.product);
  clearTable(table);
  addTableHeader(table, productPurchaseTableHeader());
  allProducts.forEach(product => addTableRow(table, productPurchaseTableRow(product)));
  initAllPurchaseButtonEvent();
};

const initPurchaseDom = () => {
  const charge = handleStorage.getItemOrNull(KEY.charge);
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
  handleStorage.setItem(KEY.product, products);
};

const calculateCharge = (selectProduct, charge) => {
  charge -= selectProduct.price;
  handleStorage.setItem(KEY.charge, charge);
};

const purchaseProduct = item => {
  const charge = handleStorage.getItemOrNull(KEY.charge);
  const products = handleStorage.getItemOrArray(KEY.product);
  const selectProduct = products.find(e => e.name === item.childNodes[1].dataset.productName);
  if (validation.isEnoughCoin(charge, selectProduct.price)) {
    calculateProducts(selectProduct, products);
    calculateCharge(selectProduct, charge);
    initPurchaseDom();
  }
};

const initChargeDom = () => {
  const charge = handleStorage.getItemOrNull(KEY.charge);
  clearInput($(SELECTOR.chargeInput));
  if (charge || charge === 0) {
    setInnerHTML($(SELECTOR.chargeAmount), charge);
  }
};

const isChargeInputValid = chargeInput =>
  validation.isInputNumberValid(chargeInput) && validation.isMultipleOf10(chargeInput);

const chargeMoney = () => {
  const chargeInput = $(SELECTOR.chargeInput);
  let charge = handleStorage.getItemOrNull(KEY.charge);
  if (isChargeInputValid(chargeInput)) {
    if (charge || charge === 0) {
      charge += parseInt(chargeInput.value);
    } else if (charge === null) {
      charge = parseInt(chargeInput.value);
    }
    handleStorage.setItem(KEY.charge, charge);
    initChargeDom();
  }
};

const calculateByQuantity = (div, x, chargeInput, minimalCoin) => {
  if (div <= x.quantity && chargeInput >= x.coin) {
    chargeInput -= x.coin * div;
    x.quantity -= div;
    minimalCoin.quantity = div;
  } else if (div > x.quantity && chargeInput >= x.coin) {
    chargeInput -= x.coin * x.quantity;
    minimalCoin.quantity = x.quantity;
    x.quantity = 0;
  }
  handleStorage.setItem(KEY.charge, chargeInput);
};

const findMinimalNum = x => {
  const minimalCoin = { coin: x.coin, quantity: 0 };
  const chargeInput = handleStorage.getItemOrNull(KEY.charge);
  const div = Math.trunc(chargeInput / x.coin);
  calculateByQuantity(div, x, chargeInput, minimalCoin);

  return minimalCoin;
};

const makeMinimumCoin = () => {
  const vendingMachine = handleStorage.getItemOrNull(KEY.vending);
  const minimumCoin = vendingMachine.coins.map(x => findMinimalNum(x));
  minimumCoin.forEach(minimum => (vendingMachine.change -= minimum.coin * minimum.quantity));
  handleStorage.setItem(KEY.vending, vendingMachine);

  return minimumCoin;
};

const returnMoney = () => {
  const minimumCoinArray = makeMinimumCoin();
  initReturnTable(minimumCoinArray);
  initChargeDom();
};

export const initAllPurchase = () => {
  initProductStatusTable();
  initChargeDom();
  $(SELECTOR.chargeButton).addEventListener('click', () => chargeMoney());
  $(SELECTOR.returnButton).addEventListener('click', () => returnMoney());
  $(SELECTOR.chargeInput).addEventListener('keyup', () =>
    onKeyUpNumericEvent($(SELECTOR.chargeInput)),
  );
};
