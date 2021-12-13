/* eslint-disable prettier/prettier */
/* eslint-disable class-methods-use-this */
import Table from './Table.js';

export default class CoinTable extends Table {
  renderBody(coinList) {
    this.$target.insertAdjacentHTML('beforeend', this.templateBody(coinList));
  }

  templateBody(coinList) {
    return `
      ${coinList.map(([kind, count]) => `
        <tr>
          <td>${kind}원</td>
          <td>
            <span>${count === null ? '' : count}</span>
            <span>${count === null ? '' : '개'}</span>
          </td>
        </tr>
      `).join('')}
    `;
  }
}
