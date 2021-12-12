import { $ } from '../utils/dom.js';
import { reservedChange } from '../model/store.js';

class ChangeView {
  constructor() {}

  getInput() {
    return Number($('#vending-machine-charge-input').value);
  }

  getChangeAmount() {
    return (
      reservedChange.coin500 * 500 +
      reservedChange.coin100 * 100 +
      reservedChange.coin50 * 50 +
      reservedChange.coin10 * 10
    );
  }

  render() {
    $('#vending-machine-charge-amount').textContent = `${this.getChangeAmount()}`;
    $('#vending-machine-coin-500-quantity').textContent = `${reservedChange.coin500}개`;
    $('#vending-machine-coin-100-quantity').textContent = `${reservedChange.coin100}개`;
    $('#vending-machine-coin-50-quantity').textContent = `${reservedChange.coin50}개`;
    $('#vending-machine-coin-10-quantity').textContent = `${reservedChange.coin10}개`;
  }

  template() {
    return `
    <section id="change-tab">
      <form>
        <h3>자판기 동전 충전하기</h3>
        <input id="vending-machine-charge-input" type="number" placeholder="자판기가 보유할 금액" />
        <button id="vending-machine-charge-button">충전하기</button>
        <div>보유 금액: <span id="vending-machine-charge-amount">0</span>원</div>
      </form>
      <h3>자판기가 보유한 동전</h3>
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
        </tbody>
      </table>
    </section>
      `;
  }
}

export default ChangeView;
