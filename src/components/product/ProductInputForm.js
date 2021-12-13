import Component from '../../core/Component.js';
import { $ } from '../../utils/element-tools.js';
import { SELECTOR } from '../../constants/selector.js';
import { DISPLAY } from '../../constants/display.js';

export default class ProductInputForm extends Component {
  htmlTemplate() {
    return `
    <h3>${DISPLAY.TITLE_PRODUCT_ADD}</h3>
    <div>
      <input type="text" id="product-name-input" placeholder="${DISPLAY.TEXT_PRODUCT_NAME}"/>
      <input type="text" id="product-price-input" placeholder="${DISPLAY.TEXT_PRODUCT_PRICE}"/>
      <input type="number" id="product-quantity-input" placeholder="${DISPLAY.TEXT_PRODUCT_QUANTITY}"/>
      <button id="product-add-button">${DISPLAY.BUTTON_PRODUCT_ADD}</button>
    </div>
    `;
  }

  bindEvents() {
    this.addEvent(
      'keyup',
      `${SELECTOR.PRODUCT_NAME_INPUT}, ${SELECTOR.PRODUCT_PRICE_INPUT}, ${SELECTOR.PRODUCT_QUANTITY_INPUT}`,
      this.bindInputFocus.bind(this)
    );

    this.addEvent(
      'click',
      SELECTOR.PRODUCT_ADD_BUTTON,
      this.bindAddProduct.bind(this)
    );
  }

  bindInputFocus({ key, target }) {
    if (key !== 'Enter') return false;
    const focusSelector = `#${target.id}`;
    switch (focusSelector) {
      case SELECTOR.PRODUCT_NAME_INPUT:
        $(SELECTOR.PRODUCT_PRICE_INPUT).focus();
        break;

      case SELECTOR.PRODUCT_PRICE_INPUT:
        $(SELECTOR.PRODUCT_QUANTITY_INPUT).focus();
        break;

      case SELECTOR.PRODUCT_QUANTITY_INPUT:
        this.bindAddProduct();
        break;

      // no default
    }
  }

  bindAddProduct() {
    const { handleAddProduct } = this._props;
    const isResult = handleAddProduct(
      $(SELECTOR.PRODUCT_NAME_INPUT).value,
      $(SELECTOR.PRODUCT_PRICE_INPUT).value,
      $(SELECTOR.PRODUCT_QUANTITY_INPUT).value
    );

    if (isResult === true) {
      $(SELECTOR.PRODUCT_NAME_INPUT).value = '';
      $(SELECTOR.PRODUCT_PRICE_INPUT).value = '';
      $(SELECTOR.PRODUCT_QUANTITY_INPUT).value = '';
    }
  }
}
