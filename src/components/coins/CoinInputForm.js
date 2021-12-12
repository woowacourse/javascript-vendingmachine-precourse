import Component from '../../core/Component.js';
import { $ } from '../../utils/element-tools.js';

export default class CoinInputForm extends Component {
  htmlTemplate() {
    const { chargeAmount } = this._props;
    return `
    <h3>자판기 동전 충전하기</h3>
    <div>
      <input type="number" id="vending-machine-charge-input"/>
      <button id="vending-machine-charge-button">충전하기</button>
    </div>
    <p>보유 금액: <span id="vending-machine-charge-amount">${chargeAmount}</span>원</p>
    `;
  }

  bindEvent() {
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
