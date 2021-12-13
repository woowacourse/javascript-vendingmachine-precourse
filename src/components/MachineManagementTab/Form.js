import Component from '../../core/Component.js';
import { $, resetForm } from '../../utils/dom.js';
import { MESSAGE } from '../../utils/constants.js';
import { isValidChanges } from '../../utils/validations.js';
import { parseNumberInput } from '../../utils/input.js';
import { chargeChanges } from '../../actions/changes.js';
import ChangesStore from '../../stores/ChangesStore.js';

export default class Form extends Component {
  bindEvents() {
    this.appendRootEvents('submit', () => this.onSubmit());
  }

  onSubmit() {
    const money = parseNumberInput(
      $('#vending-machine-charge-input', this.$container)
    );
    if (!isValidChanges(money)) return alert(MESSAGE.INVALID_CHARGING_CHANGES);
    ChangesStore.dispatch(chargeChanges(money));
    resetForm(this.$container);
  }

  render() {
    this.$container.innerHTML = `
      <h3>자판기 동전 충전하기</h3>
      <input id="vending-machine-charge-input" type="number" placeholder="자판기가 보유할 금액" required/>
      <button id="vending-machine-charge-button">충전하기</button>
      `;
  }
}
