import Component from '../../core/Component.js';
import isValidChargeAmount from '../../utils/isValidChargeAmount.js';
import $ from '../../utils/helpers.js';

export default class ChargeCoinSection extends Component {
  setup() {
    const { coins } = this.props;
    this.state = { chargedCoins: coins.sum() };
  }

  template() {
    const { chargedCoins } = this.state;

    return `
      <h3>자판기 동전 충전하기</h3>
      <form>
        <input type='number' placeholder='자판기가 보유할 금액' id='vending-machine-charge-input'></input>
        <button type='submit' id='vending-machine-charge-button'>충전하기</button>
      </form>
      <p>보유 금액: 
        <span id='vending-machine-charge-amount'>
          ${chargedCoins || ''}
        </span>
      <p>
    `;
  }

  setEvent() {
    this.addEvent('click', '#vending-machine-charge-button', () => {
      const chargeAmount = $('#vending-machine-charge-input').valueAsNumber;

      if (!isValidChargeAmount(chargeAmount)) {
        alert('error');

        return;
      }

      this.props.refill(chargeAmount);
    });
  }
}
