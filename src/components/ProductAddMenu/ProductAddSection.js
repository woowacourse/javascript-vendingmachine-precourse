import Component from '../../core/Component.js';
import isValidItem from '../../utils/isValidItem.js';
import $ from '../../utils/helpers.js';

export default class ProductAddSection extends Component {
  template() {
    return `
      <h3>상품 추가하기</h3>
      <form>
        <input type='text' placeholder='상품명' id='product-name-input' ></input>
        <input type='number' placeholder='가격' id='product-price-input' ></input>
        <input type='number' placeholder='수량' id='product-quantity-input'></input>
        <button id='product-add-button' type='submit'>추가하기</button>
      </form>
    `;
  }

  setEvent() {
    this.addEvent('click', '#product-add-button', () => {
      const name = $('#product-name-input').value.trim();
      const price = $('#product-price-input').valueAsNumber;
      const quantity = $('#product-quantity-input').valueAsNumber;

      if (!isValidItem(name, price, quantity)) {
        alert('error');

        return;
      }

      this.props.addItem(name, price, quantity);
    });
  }
}
