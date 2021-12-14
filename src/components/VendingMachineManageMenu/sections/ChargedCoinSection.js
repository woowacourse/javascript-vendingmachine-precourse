import Component from '../../../core/Component.js';

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
        ${coins.getKeys().reduce((acc, key) => `${acc}${this.row(key)}`, '')}
      </table>
    `;
  }

  row(key) {
    const { coins } = this.state;

    return `
      <tr>
        <td>${key}원</td>
        <td id='vending-machine-coin-${key}-quantity'>${coins.map.get(
      key
    )}개</td>
      </tr>
    `;
  }
}
