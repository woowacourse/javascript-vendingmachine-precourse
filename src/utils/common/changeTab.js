import $ from './selector.js';
import { TABS } from '../../constants/constants.js';
import { renderProducts } from '../addProduct/renderProducts.js';
import { renderChange } from '../inputChange/renderChange.js';
import { inputChange } from '../inputChange/inputChange.js';
import { renderPurchaseProduct } from '../purchaseProduct/renderPurchaseProduct.js';
import { inputUserMoney } from '../purchaseProduct/inputUserMoney.js';
import { purchaseProduct } from '../purchaseProduct/purchaseProduct.js';
import { returnChange } from '../purchaseProduct/returnChange.js';
import { resetChange } from '../purchaseProduct/resetChange.js';
import { addProduct } from '../addProduct/addProduct.js';

export const changeTab = async (e, tab, state) => {
  const tabName = e.target.dataset.tabName;
  tab = tabName;
  const { ADD_MENU_TAB, CHANGE_TAB, PURCHASE_TAB } = TABS;

  if (tab === ADD_MENU_TAB) {
    renderProducts(state);

    $('#product-add-button').addEventListener('click', e => {
      e.preventDefault();
      addProduct(state);
    });
    return;
  }

  if (tab === CHANGE_TAB) {
    renderChange(state);

    $('#vending-machine-charge-button').addEventListener('click', e => {
      e.preventDefault();
      inputChange(state);
    });
    return;
  }

  if (tab === PURCHASE_TAB) {
    renderPurchaseProduct(state);

    $('#charge-button').addEventListener('click', e => {
      e.preventDefault();
      inputUserMoney(state);
    });

    $('.product-purchase-list').addEventListener('click', e => {
      if (e.target.classList.contains('purchase-button')) {
        purchaseProduct(e, state);
      }
    });

    $('#coin-return-button').addEventListener('click', e => {
      e.preventDefault();
      returnChange(state);
    });

    $('#refresh-change').addEventListener('click', e => {
      e.preventDefault();
      resetChange(state);
    });

    return;
  }
};
