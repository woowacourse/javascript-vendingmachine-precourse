import { $ } from '../utils/dom.js';
import { userInputMoney, returnedChange } from '../model/store.js';
import { items } from '../model/store.js';

class PurchaseView {
  getInput() {
    return Number($('#charge-input').value);
  }

  getItems() {
    return items
      .map(
        (item) => `
        <tr class="product-purchase-item">
            <td class="product-purchase-name" data-product-name="${item.name}" style="border: 1px solid black; text-align:center; padding: 10px;">${item.name}</td>
            <td class="product-purchase-price" data-product-price="${item.price}" style="border: 1px solid black; text-align:center; padding: 10px;">${item.price}</td>
            <td class="product-purchase-quantity" data-product-quantity="${item.quantity}" style="border: 1px solid black; text-align:center; padding: 10px;">${item.quantity}</td>
            <td style="border: 1px solid black; text-align:center; padding: 10px;"><button class="purchase-button" >구매하기</button></td>
        </tr>`
      )
      .join('');
  }

  render() {
    $('#purchase-list').innerHTML = this.getItems();
    $('#charge-amount').textContent = `${userInputMoney.amount}`;
    $('#coin-500-quantity').textContent = `${returnedChange.coin500}개`;
    $('#coin-100-quantity').textContent = `${returnedChange.coin100}개`;
    $('#coin-50-quantity').textContent = `${returnedChange.coin50}개`;
    $('#coin-10-quantity').textContent = `${returnedChange.coin10}개`;
  }

  template() {
    return `
    <section id="purchase-tab">
      <form>
        <h3>금액 투입</h3>
        <input id="charge-input" type="number" placeholder="투입할 금액" />
        <button id="charge-button">투입하기</button>
        <div style="margin-top:15px">투입한 금액: <span id="charge-amount">0</span>원</div>
      </form>
      <h3>구매할 수 있는 상품 현황</h3>
      <table style="border-collapse: collapse; width: 500px">
        <thead>
          <tr>
            <th style="border: 1px solid black; padding: 10px;">상품명</th>
            <th style="border: 1px solid black; padding: 10px;">가격</th>
            <th style="border: 1px solid black; padding: 10px;">수량</th>
            <th style="border: 1px solid black; padding: 10px;">구매</th>
          </tr>
        </thead>
        <tbody id="purchase-list">
        </tbody>
      </table>
      <h3>잔돈</h3>
      <button id="coin-return-button">반환하기</button>
      <table style="border: 1px solid black; border-collapse: collapse; width: 200px">
        <thead>
          <tr>
            <th style="border: 1px solid black; padding: 10px;">동전</th>
            <th style="border: 1px solid black; padding: 10px;">개수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid black; text-align:center; padding: 10px;">500원</td>
            <td id="coin-500-quantity" style="border: 1px solid black; text-align:center; padding: 10px;">0개</td>
          </tr>
          <tr>
            <td style="border: 1px solid black; text-align:center; padding: 10px;">100원</td>
            <td id="coin-100-quantity" style="border: 1px solid black; text-align:center; padding: 10px;">0개</td>
          </tr>
          <tr>
            <td style="border: 1px solid black; text-align:center; padding: 10px;">50원</td>
            <td id="coin-50-quantity" style="border: 1px solid black; text-align:center; padding: 10px;">0개</td>
          </tr>
          <tr>
            <td style="border: 1px solid black; text-align:center; padding: 10px;">10원</td>
            <td id="coin-10-quantity" style="border: 1px solid black; text-align:center; padding: 10px;">0개</td>
          </tr>
        </tbody>
      </table>
    </section>  
    `;
  }
}

export default PurchaseView;
