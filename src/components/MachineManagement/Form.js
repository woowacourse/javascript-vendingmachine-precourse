import Component from '../../core/Component.js';
import { $ } from '../../utils/dom.js';
import { chargeChanges } from '../../actions/changes.js';
import ChangesStore from '../../stores/ChangesStore.js';

export default class Form extends Component {
  bindEvents() {
    this.appendRootEvents('submit', event => this.onSubmit(event));
  }

  onSubmit(event) {
    event.preventDefault();
    const money = Number(
      $('#vending-machine-charge-input', this.$container).value
    );
    ChangesStore.dispatch(chargeChanges(money));
  }

  render() {
    this.$container.innerHTML = `
        <h3>자판기 동전 충전하기</h3>
        <input id="vending-machine-charge-input" type="number" placeholder="자판기가 보유할 금액" required/>
        <button id="vending-machine-charge-button">충전하기</button>
      `;
  }
}
