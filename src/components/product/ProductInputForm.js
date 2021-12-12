import Component from '../../core/Component.js';
import { $ } from '../../utils/element-utils.js';
import { SELECTOR } from '../../constants/selector.js';

export default class ProductInputForm extends Component {
  htmlTemplate() {
    return `
    <h3>상품 추가하기</h3>
    <div>
      <input type="text" id="product-name-input" placeholder="상품명"/>
      <input type="text" id="product-price-input" placeholder="가격"/>
      <input type="number" id="product-quantity-input" placeholder="수량"/>
      <button id="product-add-button">추가하기</button>
    </div>
    `;
  }

  bindEvent() {
    this.addEvent(
      'keyup',
      `${SELECTOR.PRODUCT_NAME_INPUT}, ${SELECTOR.PRODUCT_PRICE_INPUT}, ${SELECTOR.PRODUCT_QUANTITY_INPUT}`,
      this.handleInputFocus.bind(this)
    );

    this.addEvent(
      'click',
      SELECTOR.PRODUCT_ADD_BUTTON,
      this.handleAddProduct.bind(this)
    );
  }

  handleInputFocus({ key, target }) {
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
        this.handleAddProduct();
        break;

      // no default
    }
  }

  handleAddProduct() {
    const { addProduct } = this._props;
    const isResult = addProduct(
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
