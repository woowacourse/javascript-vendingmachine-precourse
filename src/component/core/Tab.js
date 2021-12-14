import Navigator from '../../store/Navigator.js';
import VendingMachine from '../../store/VendingMachine.js';
import { TAG, DOM_ATTRIBUTE } from '../../constant/dom.js';

export default class Tab {
  constructor($parent, props, selectorId, datasetId) {
    this.$parent = $parent;
    this.props = props;
    this.$root = null;
    this.navigator = new Navigator();
    this.vendingMachine = new VendingMachine();
    this.selectorId = selectorId;
    this.datasetId = datasetId;

    this.createRootElement();
    this.determineDisplaying();
  }

  createRootElement() {
    const $div = document.createElement(TAG.TAG_DIV);
    $div.setAttribute(DOM_ATTRIBUTE.ID, this.selectorId);
    $div.setAttribute(DOM_ATTRIBUTE.DATA_TAB_ID, this.datasetId);

    this.$parent.appendChild($div);
    this.$root = $div;
  }

  determineDisplaying() {
    if (this.navigator.getFocusedTab() === this.datasetId) {
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
