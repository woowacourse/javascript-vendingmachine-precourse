import { TABS } from '../constants/constants.js';
import { renderProducts } from './addProduct/renderProducts.js';
import { renderChange } from './inputChange/renderChange.js';

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
    return;
  }
};
