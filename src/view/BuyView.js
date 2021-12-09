import { $ } from '../utils/DOM.js';

export class BuyView {
  constructor() {
    this.$productBuySection = $('#product-buy-section');
    this.addElements();
  }

  addElements() {
    this.$productBuySection.innerHTML = `
      <h3>금액 투입</h3>
      <form>
        <input type="number" id="charge-input" placeholder="투입할 금액" />
        <button id="charge-button">투입하기</button>
      </form>
      <div>투입한 금액: </div>
      <h3>구매할 수 있는 상품 현황</h3>
      <table>
        <tr class="product-purchase-item">
          <td class="product-purchase-name">상품명</td>
          <td class="product-purchase-price">가격</td>
          <td class="product-purchase-quantity">수량</td>
          <td class="purchase-button">구매</td>
        </tr>
      </table>
      <h3>잔돈</h3>
      <button id="coin-return-button">반환하기</button>
      <table>
        <tr>
          <td>동전</td>
          <td>개수</td>
        </tr>
        <tr>
          <td>500원</td>
          <td id="coin-500-quantity">0개</td>
        </tr>
        <tr>
          <td>100원</td>
          <td id="coin-100-quantity">0개</td>
        </tr>
        <tr>
          <td>50원</td>
          <td id="coin-50-quantity">0개</td>
        </tr>
        <tr>
          <td>10원</td>
          <td id="coin-10-quantity">0개</td>
        </tr>
      </table>
    `;
  }
}
