import {
  $,
  getItemOrArray,
  getItemOrNull,
  setItem,
  isMultipleOf10,
  isInputNumberValid,
  onKeyUpNumericEvent,
} from './utils.js';
import { KEY, SELECTOR, ALERT_MESSAGE } from '../model/constants.js';
import { productPurchaseTableRow, productPurchaseTableHeader } from '../model/dom.js';
import { addTableRow, initReturnTable } from '../view/index.js';

const initAllPurchaseButtonEvent = () => {
  const allButtons = document.querySelectorAll(`.${SELECTOR.purchaseButton}`);
  allButtons.forEach(button =>
    button.addEventListener('click', () => purchaseProduct(button.parentElement.parentElement)),
  );
};

const initProductStatusTable = () => {
  const table = document.querySelector('tbody');
  const allProducts = getItemOrArray(KEY.product);
  table.innerHTML = '';
  table.insertAdjacentHTML('beforeend', productPurchaseTableHeader());
  allProducts.forEach(product => addTableRow(table, productPurchaseTableRow(product)));
  initAllPurchaseButtonEvent();
};

const initPurchaseDomProperty = () => {
  const charge = getItemOrNull(KEY.charge);
  if (charge || charge === 0) {
    $(SELECTOR.chargeAmount).innerHTML = charge;
  }
  initProductStatusTable();
};

const isEnoughCoin = (chargeInput, price) => {
  const isEnough = chargeInput >= price;
  if (!isEnough) {
    alert(ALERT_MESSAGE.isNotEnoughCoin);
  }

  return isEnough;
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

const initChargeDomProperty = () => {
  const charge = getItemOrNull(KEY.charge);
  $(SELECTOR.chargeInput).value = '';
  if (charge || charge === 0) {
    $(SELECTOR.chargeAmount).innerHTML = charge;
  }
};

const isChargeInputValid = chargeInput =>
  isInputNumberValid(chargeInput.placeholder, chargeInput.value) &&
  isMultipleOf10(chargeInput.placeholder, chargeInput.value);

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
    initChargeDomProperty();
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
    count.quantity = x.quantity;
    x.quantity = 0;
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
  initChargeDomProperty();
};

export const initAllPurchase = () => {
  initProductStatusTable();
  initChargeDomProperty();
  $(SELECTOR.chargeButton).addEventListener('click', () => chargeMoney());
  $(SELECTOR.returnButton).addEventListener('click', () => returnMoney());
  $(SELECTOR.chargeInput).addEventListener('keyup', () =>
    onKeyUpNumericEvent($(SELECTOR.chargeInput)),
  );
};
