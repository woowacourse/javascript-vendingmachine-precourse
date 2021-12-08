import isValidTabKey from '../utils/isValidTabKey.js';
import { ACTION_CLICK_TAB, DICT_ID_MENU, DICT_TAB_TEXT } from '../const.js';

class Tab {
  constructor(id, action, text, tabKey) {
    this.tab = document.createElement('button');
    this.tab.id = id;
    this.tab.dataset.tabKey = tabKey;
    this.tab.dataset.action = action;
    this.tab.innerText = text;
  }

  static createTabByKey(tabKey) {
    if (!isValidTabKey(tabKey)) return undefined;
    return new Tab(
      DICT_ID_MENU[tabKey],
      ACTION_CLICK_TAB,
      DICT_TAB_TEXT[tabKey],
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
