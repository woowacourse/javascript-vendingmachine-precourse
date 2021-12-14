import { TABS } from '../../constants/constants.js';
import { renderProducts } from '../addProduct/renderProducts.js';

export const initialSetting = (state, tab) => {
  if (!state.change.amount) state.change.amount = 0;
  if (!state.purchase.input) state.purchase.input = 0;

  tab = TABS.ADD_MENU_TAB;
  renderProducts(state);
};
