import { $ } from '../utils/dom.js';
import { items } from '../model/store.js';

class ManageView {
  constructor() {}

  getInput() {
    return {
      name: $('#product-name-input').value,
      price: Number($('#product-price-input').value),
      quantity: Number($('#product-quantity-input').value),
    };
  }

  getItems() {
    return items
      .map(
        (item) => `
      <tr class="product-manage-item">
        <td class="product-manage-name">${item.name}</td>
        <td class="product-manage-price">${item.price}</td>
        <td class="product-manage-quantity">${item.quantity}</td>
      </tr>`
      )
      .join('');
  }

  render() {
    $('#product-list').innerHTML = this.getItems();
  }

  template() {
    return `
    <section id="manage-tab">
      <form>
        <h3>상품 추가하기</h3>
        <input id="product-name-input" type="text" placeholder="상품명" />
        <input id="product-price-input" type="number" placeholder="가격" />
        <input id="product-quantity-input" type="number" placeholder="수량" />
        <button id="product-add-button">추가하기</button>
      </form>
      <h3>상품 현황</h3>
      <table>
        <thead>
          <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>수량</th>
          </tr>
        </thead>
        <tbody id="product-list">
          <tr></tr>
          <tr></tr>
          <tr></tr>
        </tbody>
      </table>
    </section>
      `;
  }
}

export default ManageView;
