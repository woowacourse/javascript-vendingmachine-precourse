import { ID } from '../../constants/index.js';
import { clearInput } from '../../utils/clearInput.js';
import { isValidProductInput } from '../../utils/valid.js';

class ProductInput {
  constructor($target) {
    this.$target = $target;

    this.addTemplate();
    this.selectDom();
    this.addEvent();
  }

  addTemplate() {
    this.$target.innerHTML = `
      <h3>상품 추가하기</h3>
      <input id=${ID.PRODUCT_NAME_INPUT} type="text" placeholder="상품명" />
      <input id=${ID.PRODUCT_PRICE_INPUT} type="number" placeholder="가격" />
      <input id=${ID.PRODUCT_QUANTITY_INPUT} type="number" placeholder="수량" />
      <button id=${ID.PRODUCT_ADD_BUTTON}>추가하기</button>
    `;
  }

  selectDom() {
    this.$nameInput = document.querySelector(`#${ID.PRODUCT_NAME_INPUT}`);
    this.$priceInput = document.querySelector(`#${ID.PRODUCT_PRICE_INPUT}`);
    this.$quantityInput = document.querySelector(
      `#${ID.PRODUCT_QUANTITY_INPUT}`
    );
    this.$addButton = document.querySelector(`#${ID.PRODUCT_ADD_BUTTON}`);
  }

  addEvent() {
    this.$addButton.addEventListener('click', this.clickButton.bind(this));
  }

  clickButton() {
    const name = this.$nameInput.value;
    const price = Number(this.$priceInput.value);
    const quantity = Number(this.$quantityInput.value);

    if (!isValidProductInput(name, price, quantity)) {
      return;
    }
    clearInput(this.$nameInput, this.$priceInput, this.$quantityInput);
  }
}

export default ProductInput;
