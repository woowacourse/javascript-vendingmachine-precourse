import { $ } from '../utils/DOM.js';

export class ProductView {
  constructor() {
    this.$productAddSection = $('#product-add-section');
    this.addElements();
  }

  addElements() {
    this.$productAddSection.innerHTML = `
      <h3>상품 추가하기</h3>
      <form>
        <input type="text" id="product-name-input" placeholder="상품명" />
        <input type="text" id="product-price-input" placeholder="가격" />
        <input type="text" id="product-quantity-input" placeholder="수량" />
        <button id="product-add-button">추가하기</button>
      </form>
      <h3>상품 현황</h3>
      <table>
        <tr class="product-manage-item">
          <td class="product-manage-name">상품명</td>
          <td class="product-manage-price">가격</td>
          <td class="product-manage-quantity">수량</td>
        </tr>
      </table>
    `;
  }
}
