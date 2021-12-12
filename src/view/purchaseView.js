import { $ } from '../utils/dom.js';
import { userInputMoney } from '../model/store.js';
import { items } from '../model/store.js';

class PurchaseView {
  constructor() {}

  getInput() {
    return Number($('#charge-input').value);
  }

  getItems() {
    return items
      .map(
        (item) => `
        <tr class="product-purchase-item">
            <td class="product-purchase-name" data-product-name="${item.name}">${item.name}</td>
            <td class="product-purchase-price" data-product-price="${item.price}">${item.price}</td>
            <td class="product-purchase-quantity" data-product-quantity="${item.quantity}">${item.quantity}</td>
            <td><button class="purchase-button">구매하기</button></td>
        </tr>`
      )
      .join('');
  }

  render() {
    $('#charge-amount').textContent = `${userInputMoney.totalAmount}원`;
    $('#purchase-list').innerHTML = this.getItems();
  }

  template() {
    return `
    <section id="purchase-tab">
      <form>
        <h3>금액 투입</h3>
        <input id="charge-input" type="number" placeholder="투입할 금액" />
        <button id="charge-button">투입하기</button>
        <div>투입한 금액: <span id="charge-amount">0원</span></div>
      </form>
      <h3>구매할 수 있는 상품 현황</h3>
      <table>
        <thead>
          <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>수량</th>
            <th>구매</th>
          </tr>
        </thead>
        <tbody id="purchase-list">
        </tbody>
      </table>
      <h3>잔돈</h3>
      <button id="coin-return-button">반환하기</button>
      <table>
        <thead>
          <tr>
            <th>동전</th>
            <th>개수</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    </section>  
    `;
  }
}

export default PurchaseView;
