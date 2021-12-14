import Component from '../../core/Component.js';
import { $, resetForm } from '../../utils/dom.js';
import {
  MESSAGE,
  MACHINE_ELEMENT,
  SELECTOR,
  EVENT_TYPE,
} from '../../utils/constants.js';
import { isValidChanges } from '../../utils/validations.js';
import { parseNumberInput } from '../../utils/input.js';
import { chargeChanges } from '../../actions/changes.js';
import ChangesStore from '../../stores/ChangesStore.js';

export default class Form extends Component {
  bindEvents() {
    this.appendRootEvents(EVENT_TYPE.SUBMIT, () => this.onSubmit());
  }

  onSubmit() {
    const money = parseNumberInput(
      $(SELECTOR.VENDING_MACHINE_CHARGE_INPUT, this.$container)
    );
    if (!isValidChanges(money)) return alert(MESSAGE.INVALID_CHARGING_CHANGES);
    ChangesStore.dispatch(chargeChanges(money));
    resetForm(this.$container);
  }

  render() {
    this.$container.innerHTML = `
      <h3>자판기 동전 충전하기</h3>
      <input id=${MACHINE_ELEMENT.CHARGE_INPUT} type="number" placeholder="자판기가 보유할 금액" required/>
      <button id=${MACHINE_ELEMENT.CHARGE_BUTTON}>충전하기</button>
      `;
  }
}
