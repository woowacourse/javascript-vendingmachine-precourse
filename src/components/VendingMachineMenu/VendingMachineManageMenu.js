import Component from '../../core/Component.js';
import $ from '../../helpers.js';
import isValidChargeAmount from '../../utils/isValidChargeAmount.js';

export default class VendingMachineManageMenu extends Component {
  setup() {
    const { coins } = this.props;
    const chargedCoins = coins.sum();

    this.state = { chargedCoins, coins };
  }

  template() {
    const { chargedCoins, coins } = this.state;

    return `
      <h3>자판기 동전 충전하기</h3>
      <form>
        <input type='number' placeholder='자판기가 보유할 금액' id='vending-machine-charge-input'></input>
        <button type='submit' id='vending-machine-charge-button'>충전하기</button>
      </form>
      <p>보유 금액: <span id='vending-machine-charge-amount'>${
        chargedCoins || ''
      }</span><p>
      <h3>자판기가 보유한 동전</h3>
      <table>
        <th>동전</th>
        <th>개수</th>
        <tr>
          <td>500원</td>
          <td id='vending-machine-coin-500-quantity'>${coins.fivehundred}개</td>
        </tr>
        <tr>
          <td>100원</td>
          <td id='vending-machine-coin-100-quantity'>${coins.hundred}개</td>
        </tr>
        <tr>
          <td>50원</td>
          <td id='vending-machine-coin-50-quantity'>${coins.fifty}개</td>
        </tr>
        <tr>
          <td>10원</td>
          <td id='vending-machine-coin-10-quantity'>${coins.ten}개</td>
        </tr>
      </table>
    `;
  }

  setEvent() {
    this.addEvent('click', '#vending-machine-charge-button', (e) => {
      e.preventDefault();

      const chargeAmount = $('#vending-machine-charge-input').valueAsNumber;

      if (!isValidChargeAmount(chargeAmount)) {
        alert('error');

        return;
      }

      this.props.refill(chargeAmount);
    });
  }
}
