import Navigator from '../store/Navigator.js';
import { TAB_ID } from '../constant/dataset.js';
import { TAG, DOM_ATTRIBUTE, SELECTOR } from '../constant/dom.js';

export default class TabMachineManage {
  constructor($parent) {
    this.$parent = $parent;
    this.$root = null;
    this.navigator = new Navigator();

    this.createRootElement();
    this.determineDisplaying();
  }

  createRootElement() {
    const $div = document.createElement(TAG.TAG_DIV);
    $div.setAttribute(DOM_ATTRIBUTE.ID, SELECTOR.ID_MACHINE_MANAGE_TAB);
    $div.setAttribute(DOM_ATTRIBUTE.ID, TAB_ID.TAB_MACHINE_MANAGE);
    $div.innerText = `${SELECTOR.ID_MACHINE_MANAGE_TAB}`;

    this.$parent.appendChild($div);
    this.$root = $div;
  }

  determineDisplaying() {
    if (this.navigator.getFocusedTab() === TAB_ID.TAB_MACHINE_MANAGE) {
      this.show();
    } else {
      this.hide();
    }
  }

  show() {
    this.$root.removeAttribute(DOM_ATTRIBUTE.HIDDEN);
  }

  hide() {
    this.$root.setAttribute(DOM_ATTRIBUTE.HIDDEN, true);
  }
}
