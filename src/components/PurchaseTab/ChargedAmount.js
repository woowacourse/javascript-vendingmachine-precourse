import Component from '../../core/Component.js';
import UserStore from '../../stores/UserStore.js';
import { PURCHASE_ELEMENT } from '../../utils/constants.js';

export default class ChargedAmount extends Component {
  getGlobalState() {
    return UserStore.getState();
  }

  render() {
    const { chargedMoney } = this.getGlobalState();
    this.$container.innerHTML = `투입한 금액: <span id=${PURCHASE_ELEMENT.CHARGE_AMOUNT}>${chargedMoney}</span>원`;
  }
}
