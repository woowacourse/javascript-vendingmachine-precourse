import { TAB_BUTTON_ELEMENTS } from "../constants.js";
import { qs } from "../utils/index.js";

export default class InitialElementsView {
  constructor() {
    this.template = new Template();

    this.initializeElements();
  }

  initializeElements() {
    const app = qs('#app');
    app.innerHTML = this.template.getTabButtons();
  }
}

class Template {
  getTabButtons() {
    return `<h1>🥤자판기🥤</h1>
    <div id="tab-buttons">
    ${Object.values(TAB_BUTTON_ELEMENTS)
      .map((obj) => this.getTabButton(obj))
      .join('')}
    </div>
    <div id="product-purchase-view"></div>
    <div id="vending-machine-manage-view"></div>
    <div id="product-add-view"></div>
    `;
  }

  getTabButton({ id, value }) {
    return `<button id=${id}>${value}</button> `;
  }
}