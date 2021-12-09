import { $ } from '../utils/DOM.js';

export class ChargeView {
  constructor() {
    this.$productBalanceSection = $('#product-balance-section');
    this.addElements();
  }

  addElements() {
    this.$productBalanceSection.innerHTML = `
      <h3>자판기 동전 충전하기</h3>
      <form>
        <input type="number" id="vending-machine-charge-input" placeholder="자판기가 보유할 금액" />
        <button id="vending-machine-charge-button">충전하기</button>
      </form>
      <div id="vending-machine-charge-amount">보유 금액: </div>
      <h3>자판기가 보유한 동전</h3>
      <table>
        <tr>
          <td>동전</td>
          <td>개수</td>
        </tr>
        <tr>
          <td>500원</td>
          <td id="vending-machine-coin-500-quantity">0개</td>
        </tr>
        <tr>
          <td>100원</td>
          <td id="vending-machine-coin-100-quantity">0개</td>
        </tr>
        <tr>
          <td>50원</td>
          <td id="vending-machine-coin-50-quantity">0개</td>
        </tr>
        <tr>
          <td>10원</td>
          <td id="vending-machine-coin-10-quantity">0개</td>
        </tr>
      </table>
    `;
  }
}
