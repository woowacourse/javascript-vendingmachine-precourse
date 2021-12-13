import $ from '../util/$.js';
import {
  TAB_PRODUCT_ADD_ID,
  TAB_CHARGE_ID,
  TAB_PURCHASE_ID,
  CURRENT_TAB_KEY,
} from '../constant/constant.js';
import renderProductAdd from '../view/renderProductAdd.js';
import renderCharge from '../view/renderCharge.js';
import renderPurchase from '../view/renderPurchase.js';
import addProductHandler from './addProductHandler.js';
import chargeHandler from './chargeHandler.js';
import purchaseHandler from './purchaseHandler.js';

function setCurrentTab(id) {
  localStorage.setItem(CURRENT_TAB_KEY, id);
}

function addProductTabHanlder(vendingMachine) {
  const $tabProductAdd = $(`#${TAB_PRODUCT_ADD_ID}`);

  $tabProductAdd.addEventListener('click', () => {
    renderProductAdd(vendingMachine);
    addProductHandler(vendingMachine);
    setCurrentTab(TAB_PRODUCT_ADD_ID);
  });
}

function chargeTabHandler(vendingMachine) {
  const $tabCharge = $(`#${TAB_CHARGE_ID}`);

  $tabCharge.addEventListener('click', () => {
    renderCharge(vendingMachine);
    chargeHandler(vendingMachine);
    setCurrentTab(TAB_CHARGE_ID);
  });
}

function purchaseTabHandler(vendingMachine) {
  const $tabPurchase = $(`#${TAB_PURCHASE_ID}`);

  $tabPurchase.addEventListener('click', () => {
    renderPurchase(vendingMachine);
    purchaseHandler(vendingMachine);
    setCurrentTab(TAB_PURCHASE_ID);
  });
}

export default function addTabHandler(vendingMachine) {
  addProductTabHanlder(vendingMachine);
  chargeTabHandler(vendingMachine);
  purchaseTabHandler(vendingMachine);
}
