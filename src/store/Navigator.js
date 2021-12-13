/* eslint-disable no-constructor-return */
import { TAB_ID } from '../constant/dataset.js';
import { saveToStorage, loadFromStorage } from '../utils/localStorage.js';
import STORAGE from '../constant/storage.js';

let instance = null;

export default class Navigator {
  constructor() {
    if (instance !== null) {
      return instance;
    }
    this.focusedTab = TAB_ID.TAB_PRODUCT_ADD;
    this.loadFocusedTabFromStorage();
    instance = this;
  }

  loadFocusedTabFromStorage() {
    const loadData = loadFromStorage(STORAGE.focusedTab);

    if (loadData !== null) {
      this.focusedTab = loadData;
    }
  }

  getFocusedTab() {
    return this.focusedTab;
  }

  navigateTo(tabId) {
    this.focusedTab = tabId;
    saveToStorage(STORAGE.focusedTab, tabId);
  }
}
