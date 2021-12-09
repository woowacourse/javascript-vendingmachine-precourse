import { ACTION_CLICK_TAB, DICT_ID_MENU, DICT_TAB_TEXT } from './const.js';
import isValidTabKey from '../utils/isValidTabKey.js';

class Tab {
  constructor(id, text, action, tabKey) {
    this.tab = document.createElement('button');
    this.tab.id = id;
    this.tab.innerText = text;
    this.tab.action = action;
    this.tab.dataset.tabKey = tabKey;
  }

  static createTabByKey(tabKey) {
    if (!isValidTabKey(tabKey)) return undefined;
    return new Tab(
      DICT_ID_MENU[tabKey],
      DICT_TAB_TEXT[tabKey],
      ACTION_CLICK_TAB,
      tabKey
    );
  }

  getKey() {
    return this.tab.dataset.tabKey;
  }

  getTab() {
    return this.tab;
  }
}

export default Tab;
