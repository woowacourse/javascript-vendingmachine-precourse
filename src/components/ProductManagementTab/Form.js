import Component from '../../core/Component.js';
import { $, resetForm } from '../../utils/dom.js';
import { MESSAGE, PRODUCT_ELEMENT, SELECTOR } from '../../utils/constants.js';
import { isValidPrice } from '../../utils/validations.js';
import { addProduct } from '../../actions/product.js';
import { parseNumberInput, parseStringInput } from '../../utils/input.js';
import ProductStore from '../../stores/ProductStore.js';

export default class Form extends Component {
  bindEvents() {
    this.appendRootEvents('submit', () => this.onSubmit());
  }

  onSubmit() {
    const name = parseStringInput(
      $(SELECTOR.PRODUCT_NAME_INPUT, this.$container)
    );
    const price = parseNumberInput(
      $(SELECTOR.PRODUCT_PRICE_INPUT, this.$container)
    );
    const quantity = parseNumberInput(
      $(SELECTOR.PRODUCT_QUANT_INPUT, this.$container)
    );

    if (!isValidPrice(price)) return alert(MESSAGE.INVALID_PRICE);
    const { SUCCESS, error } = ProductStore.dispatch(
      addProduct({ name, price, quantity })
    );
    if (!SUCCESS) return alert(error);
    resetForm(this.$container);
  }

  render() {
    this.$container.innerHTML = `
      <h3>상품 추가하기</h3>
      <input id=${PRODUCT_ELEMENT.NAME_INPUT} placeholder="상품명" required/>
      <input id=${PRODUCT_ELEMENT.PRICE_INPUT} type="number" placeholder="가격" required/>
      <input id=${PRODUCT_ELEMENT.QUANT_INPUT} type="number" placeholder="수량" required/>
      <button id=${PRODUCT_ELEMENT.ADD_BUTTON}>추가하기</button>
    `;
  }
}
