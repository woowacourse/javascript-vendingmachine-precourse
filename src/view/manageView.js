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
        <td class="product-manage-name" style="border: 1px solid black; text-align:center; padding: 10px;">${item.name}</td>
        <td class="product-manage-price" style="border: 1px solid black; text-align:center; padding: 10px;">${item.price}</td>
        <td class="product-manage-quantity" style="border: 1px solid black; text-align:center; padding: 10px;">${item.quantity}</td>
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
      <table style="border: 1px solid black; border-collapse: collapse; width: 500px">
        <thead>
          <tr>
            <th style="border: 1px solid black; padding: 10px;">상품명</th>
            <th style="border: 1px solid black; padding: 10px;">가격</th>
            <th style="border: 1px solid black; padding: 10px;">수량</th>
          </tr>
        </thead>
        <tbody id="product-list">
        </tbody>
      </table>
    </section>
      `;
  }
}

export default ManageView;
