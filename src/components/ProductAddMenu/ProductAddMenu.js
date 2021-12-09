import Component from '../../core/Component.js';
import Item from '../common/Item.js';
import $ from '../../helpers.js';

export default class ProductAddMenu extends Component {
  setup() {
    const { items } = this.props;

    this.state = { items };

    this.isValidItem = (name, price, quantity) => {
      return (
        name.length >= 1 &&
        Number.isInteger(price) &&
        price >= 100 &&
        price % 10 === 0 &&
        Number.isInteger(quantity) &&
        quantity >= 1
      );
    };
  }

  template() {
    return `
      <h3>상품 추가하기</h3>
      <form>
        <input type='text' placeholder='상품명' id='product-name-input' ></input>
        <input type='number' placeholder='가격' id='product-price-input' ></input>
        <input type='number' placeholder='수량' id='product-quantity-input'></input>
        <button id='product-add-button' type='submit'>추가하기</button>
      </form>
      <h3>상품 현황</h3>
      <table>
        <th>상품명</th>
        <th>가격</th>
        <th>수량</th>
        ${this.state.items.map((item) => item.toHTML()).join('')}
      </table>
    `;
  }

  setEvent() {
    this.addEvent('click', '#product-add-button', (e) => {
      e.preventDefault();

      const name = $('#product-name-input').value.trim();
      const price = $('#product-price-input').valueAsNumber;
      const quantity = $('#product-quantity-input').valueAsNumber;

      if (!this.isValidItem(name, price, quantity)) {
        alert('error');

        return;
      }

      const item = new Item(name, price, quantity);

      this.props.addItem(item);

      this.setState({
        items: [...this.state.items, item],
      });
    });
  }
}
