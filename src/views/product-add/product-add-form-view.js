import { ELEMENT_IDS } from '../../constants.js';
import { htmlToElement } from '../../utils.js';

class ProductAddFormView {
  static template = `
    <div class="component">
      <h2>상품 추가하기</h2>
      <div class="row">
        <form id="${ELEMENT_IDS.PRODUCT_ADD_FORM}">
          <input type="text" placeholder="상품명" id="${ELEMENT_IDS.PRODUCT_NAME_INPUT}">
          <input type="number" placeholder="가격" id="${ELEMENT_IDS.PRODUCT_PRICE_INPUT}">
          <input type="number" placeholder="수량" id="${ELEMENT_IDS.PRODUCT_QUANTITY_INPUT}">
          <button type="button" id="${ELEMENT_IDS.PRODUCT_ADD_BUTTON}">추가하기</button>
        </form>
      </div>
    </div>
  `;

  constructor($container) {
    this.$container = $container;
  }

  mount() {
    this.$view = htmlToElement(ProductAddFormView.template);
    this.$container.appendChild(this.$view);
    this.bindingElements();
    return this;
  }

  unmount() {
    this.$nameInput = null;
    this.$priceInput = null;
    this.$quantityInput = null;
    this.$addButton = null;
    this.$container.removeChild(this.$view);
  }

  bindingElements() {
    const { PRODUCT_NAME_INPUT, PRODUCT_PRICE_INPUT, PRODUCT_QUANTITY_INPUT, PRODUCT_ADD_BUTTON } =
      ELEMENT_IDS;
    this.$nameInput = document.querySelector(`#${PRODUCT_NAME_INPUT}`);
    this.$priceInput = document.querySelector(`#${PRODUCT_PRICE_INPUT}`);
    this.$quantityInput = document.querySelector(`#${PRODUCT_QUANTITY_INPUT}`);
    this.$addButton = document.querySelector(`#${PRODUCT_ADD_BUTTON}`);
  }
}

export default ProductAddFormView;
