import { SELECTOR, TAB_LABEL, TAB_TYPE } from '../constants.js';
import { qs } from '../utils/index.js';

export default class InitialElementsView {
  constructor() {
    this.template = new Template();

    this.initializeElements();
  }

  initializeElements() {
    const app = qs(`#${SELECTOR.APP}`);
    app.innerHTML = this.template.getTabButtons();
  }
}

class Template {
  getTabButtons() {
    return `<h1>🥤자판기🥤</h1>
    <div id="${SELECTOR.TAB_BUTTONS}">
    ${Object.values(TAB_TYPE)
      .map((tabType) => ({ tabType, tabLabel: TAB_LABEL[tabType] }))
      .map(this.getTabButton)
      .join('')
    }
    </div>
    <div id="${SELECTOR.PRODUCT_PURCHASE_VIEW}"></div>
    <div id="${SELECTOR.VENDING_MACHINE_MANAGE_VIEW}"></div>
    <div id="${SELECTOR.PRODUCT_ADD_VIEW}"></div>
    `;
  }

  getTabButton({ tabType, tabLabel }) {
    return `<button id=${tabType}>${tabLabel}</button> `;
  }
}
