import Component from '../../core/Component.js';
import CoinTable from '../common/CoinTable.js';
import $ from '../../helpers.js';
import isValidChargeAmount from '../../utils/isValidChargeAmount.js';
import generateCoins from '../../utils/generateChange.js';

export default class VendingMachineManageMenu extends Component {
  setup() {
    const { change } = this.props;
    const chargeAmount = Object.keys(change).reduce(
      (acc, value) => acc + change[value] * Number(value),
      0
    );

    this.state = { chargeAmount, change };
  }

  template() {
    return `
      <h3>자판기 동전 충전하기</h3>
      <form>
        <input type='number' placeholder='자판기가 보유할 금액' id='vending-machine-charge-input'></input>
        <button type='submit' id='vending-machine-charge-button'>충전하기</button>
      </form>
      <p>보유 금액: <span id='vending-machine-charge-amount'>${
        this.state.chargeAmount || ''
      }</span><p>
      <h3>자판기가 보유한 동전</h3>
      <div id='change'></div>
    `;
  }

  mounted() {
    const { change } = this.state;

    new CoinTable($('#change'), { change });
  }

  setEvent() {
    this.addEvent('click', '#vending-machine-charge-button', (e) => {
      e.preventDefault();

      const { chargeAmount } = this.state;
      const { addChange } = this.props;
      const newChargeAmount = $('#vending-machine-charge-input').valueAsNumber;

      if (!isValidChargeAmount(newChargeAmount)) {
        alert('error');

        return;
      }

      this.setState({ chargeAmount: chargeAmount + newChargeAmount });
      this.setState({ change: addChange(generateCoins(newChargeAmount)) });
    });
  }
}
