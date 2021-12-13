import { SELECTOR } from '../model/constants.js';
import { showAddMenu, showVendingMenu, showPurchaseMenu } from '../view/index.js';
import { initAllProductAdd } from './productAdd.js';
import { $ } from './utils.js';

const callAddMenu = () => {
  showAddMenu();
  initAllProductAdd();
};

const callVendingMenu = () => {
  showVendingMenu();
  //initAllVending();
};

const callPurchaseMenu = () => {
  showPurchaseMenu();
  //initAllPurchase();
};

export const initController = () => {
  $(SELECTOR.addMenu).addEventListener('click', () => callAddMenu());
  $(SELECTOR.vendingMenu).addEventListener('click', () => callVendingMenu());
  $(SELECTOR.purchaseMenu).addEventListener('click', () => callPurchaseMenu());
  initAllProductAdd();
};
