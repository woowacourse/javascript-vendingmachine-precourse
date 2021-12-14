import Navigator from '../store/Navigator.js';
import VendingMachine from '../store/VendingMachine.js';
import Title from './core/Title.js';
import Input from './core/Input.js';
import Button from './core/Button.js';
import ProductStatusTable from './core/ProductStatusTable.js';
import { isValidProductAdd } from '../utils/validation.js';
import { TAB_ID } from '../constant/dataset.js';
import { TAG, DOM_ATTRIBUTE, EVENT, INPUT_TYPE } from '../constant/dom.js';
import { ID, CLASS } from '../constant/selector.js';
import { TITLE, PLACEHOLDER, COLUMN } from '../constant/text.js';

const PRODUCT_TABLE_COLUM = [COLUMN.NAME, COLUMN.PRICE, COLUMN.QUANTITY];
const PRODUCT_TABLE_CLASS = [
  CLASS.PRODUCT_MANAGE_NAME,
  CLASS.PRODUCT_MANAGE_PRICE,
  CLASS.PRODUCT_MANAGE_QUANTITY,
];

export default class TabProductAdd {
  constructor($parent, props) {
    this.$parent = $parent;
    this.props = props;
    this.$root = null;
    this.navigator = new Navigator();
    this.vendingMachine = new VendingMachine();

    this.createRootElement();
    this.determineDisplaying();
    this.render();
    this.setEvent();
  }

  createRootElement() {
    const $div = document.createElement(TAG.TAG_DIV);
    $div.setAttribute(DOM_ATTRIBUTE.ID, ID.PRODUCT_ADD_TAB);
    $div.setAttribute(DOM_ATTRIBUTE.DATA_TAB_ID, TAB_ID.TAB_PRODUCT_ADD);

    this.$parent.appendChild($div);
    this.$root = $div;
  }

  render() {
    this.renderInputs();
    this.renderTable();
  }

  renderInputs() {
    this.addTitle = new Title(TITLE.PRODUCT_ADD_TITLE);
    this.nameInput = new Input(ID.PRODUCT_NAME_INPUT, PLACEHOLDER.NAME, INPUT_TYPE.TEXT);
    this.priceInput = new Input(ID.PRODUCT_PRICE_INPUT, PLACEHOLDER.PRICE, INPUT_TYPE.NUMBER);
    this.quantityInput = new Input(ID.PRODUCT_QUANTITY_INPUT, PLACEHOLDER.QUANTITY, INPUT_TYPE.NUMBER);
    this.addButton = new Button(ID.PRODUCT_ADD_BUTTON, TITLE.PRODUCT_ADD_BUTTON);

    this.$root.appendChild(this.addTitle.getTarget());
    this.$root.appendChild(this.nameInput.getTarget());
    this.$root.appendChild(this.priceInput.getTarget());
    this.$root.appendChild(this.quantityInput.getTarget());
    this.$root.appendChild(this.addButton.getTarget());
  }

  renderTable() {
    this.listTitle = new Title(TITLE.PRODUCT_LIST);
    this.listTable = new ProductStatusTable({
      columns: PRODUCT_TABLE_COLUM,
      classes: PRODUCT_TABLE_CLASS,
      initialData: this.vendingMachine.getProductList(),
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

  setEvent() {
    const { addProduct } = this.props;

    this.addButton.getTarget().addEventListener(EVENT.CLICK, () => {
      const nameValue = this.nameInput.getTarget().value;
      const priceValue = this.priceInput.getTarget().value;
      const quantityValue = this.quantityInput.getTarget().value;

      if (isValidProductAdd([nameValue, priceValue, quantityValue])) {
        addProduct(nameValue, priceValue, quantityValue);
      }
    });
  }

  updateProductTable() {
    this.listTable.render(this.vendingMachine.getProductList());
  }
}
