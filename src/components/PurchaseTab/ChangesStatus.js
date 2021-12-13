import Component from '../../core/Component.js';
import UserStore from '../../stores/UserStore.js';
import ChangeStore from '../../stores/ChangesStore.js';
import { returnChanges } from '../../actions/user.js';
import { spendChanges } from '../../actions/changes.js';
import { changeStatusTemplate } from '../../templates/Purchase.js';

export default class ChangesStatus extends Component {
  getGlobalState() {
    return UserStore.getState();
  }

  bindEvents() {
    this.appendRootEvents('click', ({ target }) =>
      this.onClickReturnButton(target)
    );
  }

  onClickReturnButton({ id }) {
    if (id !== 'coin-return-button') return;
    const { chargedMoney } = this.getGlobalState();
    const { SUCCESS, error, data } = ChangeStore.dispatch(
      spendChanges(chargedMoney)
    );
    if (!SUCCESS) return alert(error);

    const { userChangeMoney, changeCoins } = data;
    UserStore.dispatch(
      returnChanges({ changes: userChangeMoney, changeCoins })
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
        ${changeStatusTemplate(coins)}
      </table>
    `;
  }
}
