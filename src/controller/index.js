import { SELECTOR } from '../model/constants.js';
import { drawAddMenu, drawVendingMenu, drawPurchaseMenu } from '../view/index.js';
import { initAllProductAdd } from './productAdd.js';
import { initAllPurchase } from './purchase.js';
import { initAllVending } from './vending.js';
import { $ } from './utils.js';

const callAddMenu = () => {
  drawAddMenu();
  initAllProductAdd();
};

const callVendingMenu = () => {
  drawVendingMenu();
  initAllVending();
};

const callPurchaseMenu = () => {
  drawPurchaseMenu();
  initAllPurchase();
};

export const initController = () => {
  $(SELECTOR.addMenu).addEventListener('click', () => callAddMenu());
  $(SELECTOR.vendingMenu).addEventListener('click', () => callVendingMenu());
  $(SELECTOR.purchaseMenu).addEventListener('click', () => callPurchaseMenu());
  initAllProductAdd();
};
