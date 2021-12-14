import {
  displayProductAddTab,
  displayPossessCoins,
  displayInputCoin,
  displayProductPurchaseTab,
  displayPossessTotal,
} from './display.js';
import * as coinUtil from '../utils/coin.js';
import {PURCHASE_TAB_CLASS} from '../constants.js';

const addTabRender = (instance) => {
  for (let i = 0; i < instance.products.length; i++) {
    displayProductAddTab(instance.products[i]);
  }
};

const manageTabRender = (instance) => {
  displayPossessCoins(instance);
  displayPossessTotal(coinUtil.getTotal(instance.coins));
};

const purchaseTabRender = (instance, controller) => {
  displayInputCoin(instance.input);
  for (let i = 0; i < instance.products.length; i++) {
    displayProductPurchaseTab(instance.products[i], controller);

    const element = document.getElementById(instance.products[i].id);
    element.addEventListener('click', (e) => {
      e.preventDefault();
      if (e.target.className == PURCHASE_TAB_CLASS.PURCHASE_BUTTON) {
        controller.buyProduct(instance.products[i]);
      }
    });
  }
};

export const render = (instance, controller) => {
  addTabRender(instance);
  manageTabRender(instance);
  purchaseTabRender(instance, controller);
};
