import Tab from './core/Tab.js';
import Title from './core/Title.js';
import Input from './core/Input.js';
import Button from './core/Button.js';
import ProductStatusTable from './core/ProductStatusTable.js';
import { isValidProductAdd } from '../utils/validation.js';
import { TAB_ID } from '../constant/dataset.js';
import { EVENT, INPUT_TYPE } from '../constant/dom.js';
import { ID, CLASS } from '../constant/selector.js';
import { TITLE, PLACEHOLDER, COLUMN } from '../constant/text.js';

const PRODUCT_TABLE_COLUM = [COLUMN.NAME, COLUMN.PRICE, COLUMN.QUANTITY];
const PRODUCT_TABLE_CLASS = [
  CLASS.PRODUCT_MANAGE_NAME,
  CLASS.PRODUCT_MANAGE_PRICE,
  CLASS.PRODUCT_MANAGE_QUANTITY,
];

export default class TabProductAdd extends Tab {
  constructor($parent, props) {
    super($parent, props, ID.PRODUCT_ADD_TAB, TAB_ID.TAB_PRODUCT_ADD);

    this.render();
    this.setEvent();
  }

  render() {
    this.renderInputs();
    this.renderTable();
  }

  renderInputs() {
    this.addTitle = new Title(TITLE.PRODUCT_ADD_TITLE);
    this.nameInput = new Input(ID.NAME_INPUT, PLACEHOLDER.NAME, INPUT_TYPE.TEXT);
    this.priceInput = new Input(ID.PRICE_INPUT, PLACEHOLDER.PRICE, INPUT_TYPE.NUMBER);
    this.quantityInput = new Input(ID.QUANTITY_INPUT, PLACEHOLDER.QUANTITY, INPUT_TYPE.NUMBER);
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
