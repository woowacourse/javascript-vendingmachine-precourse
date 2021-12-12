import Navigator from '../store/Navigator.js';
import Title from '../core/Title.js';
import Input from '../core/Input.js';
import Button from '../core/Button.js';
import Table from '../core/Table.js';
import { TAB_ID } from '../constant/dataset.js';
import { TAG, DOM_ATTRIBUTE, SELECTOR } from '../constant/dom.js';

export default class TabProductAdd {
  constructor($parent) {
    this.$parent = $parent;
    this.$root = null;
    this.navigator = new Navigator();

    this.createRootElement();
    this.determineDisplaying();
    this.render();
  }

  createRootElement() {
    const $div = document.createElement(TAG.TAG_DIV);
    $div.setAttribute(DOM_ATTRIBUTE.ID, SELECTOR.ID_PRODUCT_ADD_TAB);
    $div.setAttribute(DOM_ATTRIBUTE.DATA_TAB_ID, TAB_ID.TAB_PRODUCT_ADD);

    this.$parent.appendChild($div);
    this.$root = $div;
  }

  render() {
    this.renderInputs();
    this.renderTable();
  }

  renderInputs() {
    this.addTitle = new Title('상품 추가하기');
    this.name = new Input(SELECTOR.ID_PRODUCT_NAME_INPUT, '상품명', 'text');
    this.price = new Input(SELECTOR.ID_PRODUCT_PRICE_INPUT, '가격', 'number');
    this.quantity = new Input(SELECTOR.ID_PRODUCT_PRICE_INPUT, '수량', 'number');
    this.addButton = new Button(SELECTOR.ID_PRODUCT_ADD_BUTTON, '추가하기');

    this.$root.appendChild(this.addTitle.getTarget());
    this.$root.appendChild(this.name.getTarget());
    this.$root.appendChild(this.price.getTarget());
    this.$root.appendChild(this.quantity.getTarget());
    this.$root.appendChild(this.addButton.getTarget());
  }

  renderTable() {
    this.listTitle = new Title('상품 현황');
    this.listTable = new Table({
      columns: ['상품명', '가격', '수량'],
      class: [
        SELECTOR.CLASS_PRODUCT_MANAGE_NAME,
        SELECTOR.CLASS_PRODUCT_MANAGE_PRICE,
        SELECTOR.CLASS_PRODUCT_MANAGE_QUANTITY,
      ],
    });
    this.$root.appendChild(this.listTitle.getTarget());
    this.$root.appendChild(this.listTable.getTarget());
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
