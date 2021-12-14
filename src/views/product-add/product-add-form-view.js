import { ELEMENT_IDS } from '../../constants.js';
import { htmlToElement } from '../../utils.js';

class ProductAddFormView {
  static template = () => {
    const { FORM, NAME_INPUT, PRICE_INPUT, QUANTITY_INPUT, ADD_BUTTON } = ELEMENT_IDS.PRODUCT_ADD;
    return `
      <div class="component">
        <h2>상품 추가하기</h2>
        <div class="row">
          <form id="${FORM}">
            <input type="text" placeholder="상품명" id="${NAME_INPUT}">
            <input type="number" placeholder="가격" id="${PRICE_INPUT}">
            <input type="number" placeholder="수량" id="${QUANTITY_INPUT}">
            <button type="button" id="${ADD_BUTTON}">추가하기</button>
          </form>
        </div>
      </div>
    `;
  };

  constructor($container) {
    this.$container = $container;
  }

  mount() {
    this.$view = htmlToElement(ProductAddFormView.template());
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
    this.$view = null;
  }

  bindingElements() {
    const { NAME_INPUT, PRICE_INPUT, QUANTITY_INPUT, ADD_BUTTON } = ELEMENT_IDS.PRODUCT_ADD;
    this.$nameInput = document.querySelector(`#${NAME_INPUT}`);
    this.$priceInput = document.querySelector(`#${PRICE_INPUT}`);
    this.$quantityInput = document.querySelector(`#${QUANTITY_INPUT}`);
    this.$addButton = document.querySelector(`#${ADD_BUTTON}`);
  }
}

export default ProductAddFormView;
