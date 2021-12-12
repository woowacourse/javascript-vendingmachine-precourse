import Navigator from '../store/Navigator.js';
import { TAB_ID } from '../constant/dataset.js';
import { TAG, DOM_ATTRIBUTE, SELECTOR } from '../constant/dom.js';

export default class TabProductAdd {
  constructor($parent) {
    this.$parent = $parent;
    this.$root = null;
    this.navigator = new Navigator();

    this.createRootElement();
    this.determineDisplaying();
  }

  createRootElement() {
    const $div = document.createElement(TAG.TAG_DIV);
    $div.setAttribute(DOM_ATTRIBUTE.ID, SELECTOR.ID_PRODUCT_ADD_TAB);
    $div.setAttribute(DOM_ATTRIBUTE.DATA_TAB_ID, TAB_ID.TAB_PRODUCT_ADD);
    $div.innerText = `${SELECTOR.ID_PRODUCT_ADD_TAB}`;

    this.$parent.appendChild($div);
    this.$root = $div;
  }

  determineDisplaying() {
    if (this.navigator.getFocusedTab() === TAB_ID.TAB_PRODUCT_ADD) {
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
