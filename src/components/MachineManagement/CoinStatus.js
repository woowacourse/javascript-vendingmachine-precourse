import Component from '../../core/Component.js';
import ChangesStore from '../../stores/ChangesStore.js';
import { coinStatusView } from '../../utils/views.js';

export default class CoinStatus extends Component {
  getGlobalState() {
    return ChangesStore.getState();
  }

  render() {
    const { coins } = this.getGlobalState();
    this.$container.innerHTML = `
    <h3>자판기가 보유한 동전</h3>
    <table>
        <tr>
            <th>동전</th>
            <th>개수</th>
        </tr>
        ${coinStatusView(coins)}
    </table>
      `;
  }
}
