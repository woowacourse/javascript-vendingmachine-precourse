import Component from '../../core/Component.js';

export default class CoinTable extends Component {
  setup() {
    const { coins } = this.props;

    this.state = { coins };
  }

  template() {
    const { coins } = this.state;

    return `
      <table>
        <th>동전</th>
        <th>개수</th>
        <tr>
          <td>500원</td>
          <td id='vending-machine-coin-500-quantity'>${coins['500']}</td>
        </tr>
        <tr>
          <td>100원</td>
          <td id='vending-machine-coin-100-quantity'>${coins['100']}</td>
        </tr>
        <tr>
          <td>50원</td>
          <td id='vending-machine-coin-50-quantity'>${coins['50']}</td>
        </tr>
        <tr>
          <td>10원</td>
          <td id='vending-machine-coin-10-quantity'>${coins['10']}</td>
        </tr>
      </table>
    `;
  }
}
