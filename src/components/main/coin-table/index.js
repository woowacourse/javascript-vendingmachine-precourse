import Component from '../../../core/Component.js';

export default class CoinTable extends Component {
  template() {
    const { chargedCoins, title } = this.$props;
    return `
      <h3>${title}</h3>
      <table>
        <thead>
          <tr>
            <th>동전</th>
            <th>개수</th>
          </tr>
        </thead>
        <tbody>
          ${chargedCoins
            .map(
              ({ unit, count }) => `
            <tr>
              <td>${unit}원</td>
              <td id="vending-machine-coin-${unit}-quantity">${count}개</td>
            </tr>
            `
            )
            .join('')}
        </tbody>
      </table>
    `;
  }
}
