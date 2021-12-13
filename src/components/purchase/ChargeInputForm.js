import Component from '../../core/Component.js';
import { $ } from '../../utils/element-tools.js';
import { DISPLAY, SELECTOR } from '../../constants/display.js';

export default class ChargeInputForm extends Component {
  init() {
    this._props.state.add(this);
  }

  htmlTemplate() {
    const { state } = this._props;
    return `
    <h3>${DISPLAY.TITLE_AMOUNT_CHARGE}</h3>
    <div>
      <input type="number" id="charge-input" placeholder="${DISPLAY.TEXT_AMOUNT_INPUT}"/>
      <button id="charge-button">${DISPLAY.BUTTON_AMOUNT_CHARGE}</button>
    </div>
    <p>${DISPLAY.TEXT_AMOUNT_CHARGE}: <span id="charge-amount">${state.value}</span>${DISPLAY.UNIT_MONEY}</p>
    `;
  }

  bindEvents() {
    this.addEvent(
      'keyup',
      SELECTOR.CHARGE_AMOUNT_INPUT,
      this.bindChargeSubmit.bind(this)
    );
    this.addEvent(
      'click',
      SELECTOR.CHARGE_AMOUNT_BUTTON,
      this.bindChargeSubmit.bind(this)
    );
  }

  bindChargeSubmit(event) {
    if (event.type === 'keyup' && event.key !== 'Enter') return false;

    const { handlePutAmount } = this._props;
    handlePutAmount($(SELECTOR.CHARGE_AMOUNT_INPUT).value);
  }
}
