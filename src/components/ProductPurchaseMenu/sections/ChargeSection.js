import Component from '../../../core/Component.js';
import $ from '../../../utils/helpers.js';

export default class ChargeSection extends Component {
  setup() {
    const { chargedAmount } = this.props;
    this.state = { chargedAmount };
  }

  template() {
    const { chargedAmount } = this.state;

    return `
      <h3>금액 투입</h3>
      <form>
        <input
          type='number'
          placeholder='투입할 금액'
          id='charge-input'
        >
        </input>
        <button
          type='submit'
          id='charge-button'
        >
          투입하기
        </button>
      </form>
      <p>투입한 금액: <span id='charge-amount'>${chargedAmount.toString()}</span></p>
    `;
  }

  setEvent() {
    this.addEvent('click', '#charge-button', () => {
      const { charge } = this.props;
      const chargingAmount = $('#charge-input').valueAsNumber;

      try {
        charge(chargingAmount);
      } catch ({ message }) {
        alert(message);
      }
    });
  }
}
