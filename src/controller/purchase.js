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
import { productPurchaseTableRow, productPurchaseTableHeader } from '../model/dom.js';

const initReturnTable = returnCoin => {
  returnCoin.forEach(x => {
    $(`coin-${x.coin}-quantity`).innerHTML = `${x.quantity}개`;
  });
};

const initAllPurchaseButtonEvent = () => {
  const allButtons = document.querySelectorAll(`.${SELECTOR.purchaseButton}`);
  allButtons.forEach(button => button.addEventListener('click', () => purchaseProduct(button)));
};

const addTableRow = (table, product) =>
  table.insertAdjacentHTML('beforeend', productPurchaseTableRow(product));

const initProductStatusTable = () => {
  const table = document.querySelector('tbody');
  table.innerHTML = '';
  const allProducts = getItemOrArray(KEY.product);
  table.insertAdjacentHTML('beforeend', productPurchaseTableHeader());
  allProducts.forEach(product => addTableRow(table, product));
  initAllPurchaseButtonEvent();
};

const initPurchaseDomProperty = () => {
  const charge = getItemOrNull(KEY.charge);
  if (charge || charge === 0) {
    $(SELECTOR.chargeAmount).innerHTML = charge;
  }
  initProductStatusTable();
};

const purchaseProduct = button => {
  let charge = getItemOrNull(KEY.charge);
  const products = getItemOrArray(KEY.product);
  const selectProduct = products.find(e => e.name === button.dataset.target);
  selectProduct.quantity -= 1;
  charge -= selectProduct.price;
  setItem(KEY.charge, charge);
  setItem(KEY.product, products);
  initPurchaseDomProperty();
};

const initChargeDomProperty = () => {
  const charge = getItemOrNull(KEY.charge);
  $(SELECTOR.chargeInput).value = '';
  if (charge || charge === 0) {
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

const getCount = x => {
  let chargeInput = getItemOrNull(KEY.charge);
  const count = {
    coin: x.coin,
    quantity: 0,
  };
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
};
