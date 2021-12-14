import Component from '../../../core/Component.js';

export default class CoinReturnSection extends Component {
  static coinRow(key, coins) {
    return `
    <tr>
      <td>${key}원</td>
      <td id='coin-${key}-quantity'>${coins.map.get(key)}개</td>
    </tr>
    `;
  }

  setup() {
    const { returnedCoins } = this.props;
    this.state = { returnedCoins };
  }

  template() {
    const { returnedCoins } = this.state;

    return `
      <h3>잔돈</h3>
      <button type='submit' id='coin-return-button'>반환하기</button>
      <table>
        <th>동전</th>
        <th>개수</th>
        ${returnedCoins
          .getKeys()
          .reduce(
            (acc, key) =>
              `${acc}${CoinReturnSection.coinRow(key, returnedCoins)}`,
            ''
          )}
      </table>
    `;
  }

  setEvent() {
    this.addEvent('click', '#coin-return-button', () => {
      this.props.returnChange();
    });
  }
}
