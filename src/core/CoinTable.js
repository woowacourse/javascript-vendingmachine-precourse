/* eslint-disable prettier/prettier */
/* eslint-disable class-methods-use-this */
import Table from './Table.js';

export default class CoinTable extends Table {
  renderBody(coinList) {
    this.$target.insertAdjacentHTML('beforeend', this.templateBody(coinList));
  }

  templateBody(coinList) {
    const { ids } = this.props;
    return `
      ${coinList.map(([kind, count]) => `
        <tr>
          <td>${kind}원</td>
          <td>
            <span id="${ids[kind]}">${count === null ? '' : `${count}개`}</span>
          </td>
        </tr>
      `).join('')}
    `;
  }
}
