import Component from '../../core/Component.js';

export default class ChargedCoinSection extends Component {
  setup() {
    const { coins } = this.props;
    this.state = { coins };
  }

  template() {
    const { coins } = this.state;

    return `
      <h3>자판기가 보유한 동전</h3>
      <table>
        <th>동전</th>
        <th>개수</th>
        <tr>
          <td>500원</td>
          <td id='vending-machine-coin-500-quantity'>${coins.map.get(
            500
          )}개</td>
        </tr>
        <tr>
          <td>100원</td>
          <td id='vending-machine-coin-100-quantity'>${coins.map.get(
            100
          )}개</td>
        </tr>
        <tr>
          <td>50원</td>
          <td id='vending-machine-coin-50-quantity'>${coins.map.get(50)}개</td>
        </tr>
        <tr>
          <td>10원</td>
          <td id='vending-machine-coin-10-quantity'>${coins.map.get(10)}개</td>
        </tr>
      </table>
    `;
  }
}
