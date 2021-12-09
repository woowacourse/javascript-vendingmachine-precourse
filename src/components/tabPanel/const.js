import AddPanel from '../addPanel/index.js';
import { KEY_TAB_ADD, KEY_TAB_CHARGE, KEY_TAB_PURCHASE } from '../const.js';

export const DICT_ID_TAB_PANEL = {
  [KEY_TAB_ADD]: 'product-add-panel',
  [KEY_TAB_CHARGE]: 'vending-machine-manage-panel',
  [KEY_TAB_PURCHASE]: 'product-purchase-panel',
};

export const DICT_TAB_PANEL_CLASS = {
  [KEY_TAB_ADD]: AddPanel,
  [KEY_TAB_CHARGE]: AddPanel,
  [KEY_TAB_PURCHASE]: AddPanel,
};
