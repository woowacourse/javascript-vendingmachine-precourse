import Component from '../../../core/Component.js';

export default class CoinReturnSection extends Component {
  setup() {
    const { returnedCoins } = this.props;
    this.state = { returnedCoins };
  }

  template() {
    const { returnedCoins } = this.state;
    const row = (key) => `
    <tr>
      <td>${key}원</td>
      <td id='coin-${key}-quantity'>${returnedCoins.map.get(key)}개</td>
    </tr>
    `;

    return `
      <h3>잔돈</h3>
      <button type='submit' id='coin-return-button'>반환하기</button>
      <table>
        <th>동전</th>
        <th>개수</th>
        ${returnedCoins.getKeys().reduce((acc, key) => `${acc}${row(key)}`, '')}
      </table>
    `;
  }

  setEvent() {
    this.addEvent('click', '#coin-return-button', () => {
      try {
        this.props.returnChange();
      } catch ({ message }) {
        alert(message);
      }
    });
  }
}
