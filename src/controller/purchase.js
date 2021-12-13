import {
  $,
  getItemOrArray,
  getItemOrNull,
  setItem,
  isMultipleOf10,
  isInputNumberValid,
  isEnoughCoin,
  onKeyUpNumericEvent,
} from './utils.js';
import {
  addTableRow,
  addTableHeader,
  initReturnTable,
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

const initPurchaseDomProperty = () => {
  const charge = getItemOrNull(KEY.charge);
  if (charge || charge === 0) {
    setInnerHTML($(SELECTOR.chargeAmount), charge);
  }
  initProductStatusTable();
};

const purchaseProduct = item => {
  let charge = getItemOrNull(KEY.charge);
  let products = getItemOrArray(KEY.product);
  const selectProduct = products.find(e => e.name === item.childNodes[1].dataset.productName);
  if (isEnoughCoin(charge, selectProduct.price)) {
    selectProduct.quantity -= 1;
    charge -= selectProduct.price;
    if (selectProduct.quantity === 0) {
      products = products.filter(product => product.name !== selectProduct.name);
    }
    setItem(KEY.charge, charge);
    setItem(KEY.product, products);
    initPurchaseDomProperty();
  }
};

const initChargeDom = () => {
  const charge = getItemOrNull(KEY.charge);
  clearInput($(SELECTOR.chargeInput));
  if (charge || charge === 0) {
    setInnerHTML($(SELECTOR.chargeAmount), charge);
  }
};

const isChargeInputValid = chargeInput =>
  isInputNumberValid(chargeInput) && isMultipleOf10(chargeInput);

const chargeMoney = () => {
  const chargeInput = $(SELECTOR.chargeInput);
  let charge = getItemOrNull(KEY.charge);
  if (isChargeInputValid(chargeInput)) {
    if (charge || charge === 0) {
      charge += parseInt(chargeInput.value);
    } else if (charge === null) {
      charge = parseInt(chargeInput.value);
    }
    setItem(KEY.charge, charge);
    initChargeDom();
  }
};

const getCount = x => {
  const count = { coin: x.coin, quantity: 0 };
  let chargeInput = getItemOrNull(KEY.charge);
  const div = Math.trunc(chargeInput / x.coin);
  if (div <= x.quantity && chargeInput >= x.coin) {
    chargeInput -= x.coin * div;
    x.quantity -= div;
    count.quantity = div;
  } else if (div > x.quantity && chargeInput >= x.coin) {
    chargeInput -= x.coin * x.quantity;
    x.quantity = 0;
    count.quantity = x.quantity;
  }
  setItem(KEY.charge, chargeInput);

  return count;
};

const makeMinimumCoin = () => {
  const vendingMachine = getItemOrNull(KEY.vending);
  const minimumCoin = vendingMachine.coins.map(x => getCount(x));
  minimumCoin.forEach(minimum => (vendingMachine.change -= minimum.coin * minimum.quantity));
  setItem(KEY.vending, vendingMachine);

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
