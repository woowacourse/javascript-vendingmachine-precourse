import { ID, ID_WITH_TEXT_LIST, SELECTOR } from '../constants.js';
import { qs } from '../utils/index.js';

export default class InitialElementsView {
  constructor() {
    this.template = new Template();

    this.initializeElements();
  }

  initializeElements() {
    const app = qs(SELECTOR.APP);
    app.innerHTML = this.template.getTabButtons();
  }
}

class Template {
  getTabButtons() {
    return `<h1>🥤자판기🥤</h1>
    <div id="${ID.TAB_BUTTONS}">
    ${Object.values(ID_WITH_TEXT_LIST)
      .map((obj) => this.getTabButton(obj))
      .join('')}
    </div>
    <div id="${ID.PRODUCT_PURCHASE_VIEW}"></div>
    <div id="${ID.VENDING_MACHINE_MANAGE_VIEW}"></div>
    <div id="${ID.PRODUCT_ADD_VIEW}"></div>
    `;
  }

  getTabButton({ id, value }) {
    return `<button id=${id}>${value}</button> `;
  }
}
