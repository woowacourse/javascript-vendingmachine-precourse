import Component from '../../core/Component.js';
import { $, resetForm } from '../../utils/dom.js';
import { chargeMoney } from '../../actions/user.js';
import { isValidChargingMoney } from '../../utils/validations.js';
import { MESSAGE, SELECTOR, PURCHASE_ELEMENT } from '../../utils/constants.js';
import UserStore from '../../stores/UserStore.js';

export default class Form extends Component {
  bindEvents() {
    this.appendRootEvents('submit', () => this.onSubmit());
  }

  onSubmit() {
    const money = Number($(SELECTOR.CHARGE_INPUT).value);
    if (!isValidChargingMoney(money))
      return alert(MESSAGE.INVALID_CHARGING_MONEY);
    UserStore.dispatch(chargeMoney(money));
    resetForm(this.$container);
  }

  render() {
    this.$container.innerHTML = `
      <h3>금액 투입</h3>
      <input id=${PURCHASE_ELEMENT.CHARGE_INPUT} type="number" required/>
      <button id=${PURCHASE_ELEMENT.CHARGE_BUTTON}>투입하기</button>
    `;
  }
}
