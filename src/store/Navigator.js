/* eslint-disable no-constructor-return */
import { TAB_ID } from '../constant/dataset.js';

let instance = null;

export default class Navigator {
  constructor() {
    if (instance !== null) {
      return instance;
    }
    this.focusedTab = TAB_ID.TAB_PRODUCT_ADD;

    instance = this;
  }

  getFocusedTab() {
    return this.focusedTab;
  }

  navigateTo(tabId) {
    this.focusedTab = tabId;
  }
}
