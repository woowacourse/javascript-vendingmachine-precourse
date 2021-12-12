import Component from '../../core/Component.js';
import UserStore from '../../stores/UserStore.js';
import ChangeStore from '../../stores/ChangesStore.js';
import { returnChanges } from '../../actions/user.js';
import { spendChanges } from '../../actions/changes.js';
import { changeStatusView } from '../../utils/views.js';
import { MESSAGE } from '../../utils/constants.js';

export default class ChangesStatus extends Component {
  getGlobalState() {
    return { ...UserStore.getState(), ...ChangeStore.getState() };
  }

  bindEvents() {
    this.appendRootEvents('click', event => this.onClickReturnButton(event));
  }

  onClickReturnButton({ target }) {
    if (target.id !== 'coin-return-button') return;
    const { chargedMoney, changes } = this.getGlobalState();
    if (changes === 0) return alert(MESSAGE.NOT_ENOUGH_CHANGES);
    const { changeCoins, restChange } = ChangeStore.dispatch(
      spendChanges(chargedMoney)
    );
    UserStore.dispatch(
      returnChanges({ change: restChange, coins: changeCoins })
    );
  }

  render() {
    const { coins } = this.getGlobalState();
    this.$container.innerHTML = `
        <h3>잔돈</h3>
        <button id="coin-return-button">반환하기</button>
        <table>
            <tr>
                <th>동전</th>
                <th>개수</th>
            </tr>
            ${changeStatusView(coins)}
        </table>
      `;
  }
}
