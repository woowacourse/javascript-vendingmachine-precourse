import $ from './common/selector.js';
import { TABS } from '../constants/constants.js';
import { renderProducts } from './addProduct/renderProducts.js';
import { renderChange } from './inputChange/renderChange.js';
import { inputChange } from './inputChange/inputChange.js';

export const changeTab = async (e, tab, state) => {
  const tabName = e.target.dataset.tabName;
  tab = tabName;
  const { ADD_MENU_TAB, CHANGE_TAB, PURCHASE_TAB } = TABS;

  if (tab === ADD_MENU_TAB) {
    renderProducts(state);
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
};
