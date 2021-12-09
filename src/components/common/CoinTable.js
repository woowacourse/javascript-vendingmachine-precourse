import Component from '../../core/Component.js';

export default class CoinTable extends Component {
  setup() {
    const { change } = this.props;

    this.state = { change };
  }

  template() {
    const { change } = this.state;

    return `
      <table>
        <th>동전</th>
        <th>개수</th>
        <tr>
          <td>500원</td>
          <td id='vending-machine-coin-500-quantity'>${change['500']}</td>
        </tr>
        <tr>
          <td>100원</td>
          <td id='vending-machine-coin-100-quantity'>${change['100']}</td>
        </tr>
        <tr>
          <td>50원</td>
          <td id='vending-machine-coin-50-quantity'>${change['50']}</td>
        </tr>
        <tr>
          <td>10원</td>
          <td id='vending-machine-coin-10-quantity'>${change['10']}</td>
        </tr>
      </table>
    `;
  }
}
