import Component from '../../core/Component.js';
import $ from '../../helpers.js';
import isValidItem from '../../utils/isValidItem.js';

export default class ProductAddMenu extends Component {
  setup() {
    const { items } = this.props;

    this.state = { items };
  }

  // TODO: 아이템 목록 직접 접근 안하게 수정
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
        ${this.state.items.items
          .map(
            (item) => `
          <tr class='product-manage-item' data-product-id=${item.id}>
            <td class='product-manage-name'>${item.name}</td>
            <td class='product-manage-price'>${item.price}</td>
            <td class='product-manage-quantity'>${item.quantity}</td>
          </tr>
      `
          )
          .join('')}
      </table>
    `;
  }

  setEvent() {
    this.addEvent('click', '#product-add-button', (e) => {
      e.preventDefault();

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
