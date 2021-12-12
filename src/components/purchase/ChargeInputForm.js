import Component from '../../core/Component.js';
import { $ } from '../../utils/element-tools.js';
import { SELECTOR } from '../../constants/selector.js';

export default class ChargeInputForm extends Component {
  init() {
    this._props.state.add(this);
  }

  htmlTemplate() {
    const { state } = this._props;
    return `
    <h3>금액 투입</h3>
    <div>
      <input type="number" id="charge-input" placeholder="투입할 금액"/>
      <button id="charge-button">투입하기</button>
    </div>
    <p>투입한 금액: <span id="charge-amount">${state.value}</span>원</p>
    `;
  }

  bindEvent() {
    this.addEvent(
      'keyup',
      SELECTOR.CHARGE_AMOUNT_INPUT,
      this.handleCharge.bind(this)
    );
    this.addEvent(
      'click',
      SELECTOR.CHARGE_AMOUNT_BUTTON,
      this.handleCharge.bind(this)
    );
  }

  handleCharge(event) {
    if (event.type === 'keyup' && event.key !== 'Enter') return false;

    const { putAmount } = this._props;
    putAmount($(SELECTOR.CHARGE_AMOUNT_INPUT).value);
  }
}
