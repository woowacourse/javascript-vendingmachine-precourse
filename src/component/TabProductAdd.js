import Navigator from '../store/Navigator.js';
import VendingMachine from '../store/VendingMachine.js';
import Title from '../core/Title.js';
import Input from '../core/Input.js';
import Button from '../core/Button.js';
import ProductStatusTable from '../core/ProductStatusTable.js';
import { isValidProductAdd } from '../utils/validation.js';
import { TAB_ID } from '../constant/dataset.js';
import { TAG, DOM_ATTRIBUTE, SELECTOR, EVENT } from '../constant/dom.js';

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
    this.quantity = new Input(SELECTOR.ID_PRODUCT_QUANTITY_INPUT, '수량', 'number');
    this.addButton = new Button(SELECTOR.ID_PRODUCT_ADD_BUTTON, '추가하기');

    this.$root.appendChild(this.addTitle.getTarget());
    this.$root.appendChild(this.name.getTarget());
    this.$root.appendChild(this.price.getTarget());
    this.$root.appendChild(this.quantity.getTarget());
    this.$root.appendChild(this.addButton.getTarget());
  }

  renderTable() {
    this.listTitle = new Title('상품 현황');
    this.listTable = new ProductStatusTable({
      columns: ['상품명', '가격', '수량'],
      classes: [
        SELECTOR.CLASS_PRODUCT_MANAGE_NAME,
        SELECTOR.CLASS_PRODUCT_MANAGE_PRICE,
        SELECTOR.CLASS_PRODUCT_MANAGE_QUANTITY,
      ],
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
      const nameValue = this.name.getTarget().value;
      const priceValue = this.price.getTarget().value;
      const quantityValue = this.quantity.getTarget().value;

      if (isValidProductAdd([nameValue, priceValue, quantityValue])) {
        addProduct(nameValue, priceValue, quantityValue);
      }
    });
  }

  updateProductTable() {
    this.listTable.render(this.vendingMachine.getProductList());
  }
}
