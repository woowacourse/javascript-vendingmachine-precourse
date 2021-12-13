import Component from '../../core/Component.js';
import UserStore from '../../stores/UserStore.js';

export default class ChargedAmount extends Component {
  getGlobalState() {
    return UserStore.getState();
  }

  render() {
    const { chargedMoney } = this.getGlobalState();
    this.$container.innerHTML = `투입한 금액: <span id="charge-amount">${chargedMoney}</span>원`;
  }
}
