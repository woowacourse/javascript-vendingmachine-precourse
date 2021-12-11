import { TAG, DOM_ATTRIBUTE, SELECTOR } from '../constant/dom.js';

export default class TabMachineManage {
  constructor($parent) {
    this.$parent = $parent;
    this.$root = null;

    this.createRootElement();
  }

  createRootElement() {
    const $div = document.createElement(TAG.TAG_DIV);
    $div.setAttribute(DOM_ATTRIBUTE.ID, SELECTOR.ID_MACHINE_MANAGE_TAB);
    $div.innerText = `${SELECTOR.ID_MACHINE_MANAGE_TAB}`;

    this.$parent.appendChild($div);
    this.$root = $div;
  }
}
