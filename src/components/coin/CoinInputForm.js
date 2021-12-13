import Component from '../../core/Component.js';
import { $ } from '../../utils/element-tools.js';
import { DISPLAY } from '../../constants/display.js';

export default class CoinInputForm extends Component {
  htmlTemplate() {
    const { chargeAmount } = this._props;
    return `
    <h3>${DISPLAY.TITLE_COIN_CHARGE}</h3>
    <div>
      <input type="number" id="vending-machine-charge-input"/>
      <button id="vending-machine-charge-button">${DISPLAY.BUTTON_COIN_CHARGE}</button>
    </div>
    <p>${DISPLAY.TEXT_COIN_TOTAL}: <span id="vending-machine-charge-amount">${chargeAmount}</span>${DISPLAY.UNIT_MONEY}</p>
    `;
  }

  bindEvents() {
    this.addEvent(
      'click',
      '#vending-machine-charge-button',
      this.bindInputSubmit.bind(this)
    );

    this.addEvent(
      'keyup',
      '#vending-machine-charge-input',
      this.bindInputSubmit.bind(this)
    );
  }

  bindInputSubmit(event) {
    if (event.type === 'keyup' && event.key !== 'Enter') return false;

    const { handleAddCoins } = this._props;
    const isResult = handleAddCoins($('#vending-machine-charge-input').value);

    if (isResult === false) $('#vending-machine-charge-input').focus();
  }
}
