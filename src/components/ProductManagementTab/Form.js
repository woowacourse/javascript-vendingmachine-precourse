import Component from '../../core/Component.js';
import { $, resetForm } from '../../utils/dom.js';
import { MESSAGE } from '../../utils/constants.js';
import { isValidPrice } from '../../utils/validations.js';
import { addProduct } from '../../actions/product.js';
import { parseNumberInput, parseStringInput } from '../../utils/input.js';
import ProductStore from '../../stores/ProductStore.js';

export default class Form extends Component {
  bindEvents() {
    this.appendRootEvents('submit', () => this.onSubmit());
  }

  onSubmit() {
    const name = parseStringInput($('#product-name-input', this.$container));
    const price = parseNumberInput($('#product-price-input', this.$container));
    const quantity = parseNumberInput(
      $('#product-quantity-input', this.$container)
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
      <input id="product-name-input" placeholder="상품명" required/>
      <input id="product-price-input" type="number" placeholder="가격" required/>
      <input id="product-quantity-input" type="number" placeholder="수량" required/>
      <button id="product-add-button">추가하기</button>
    `;
  }
}