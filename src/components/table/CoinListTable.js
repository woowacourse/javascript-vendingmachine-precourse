import { createElement } from '../../utils/element-tools.js';
import TableCreate from '../../core/Table.js';

export default class CoinListTable extends TableCreate {
  renderColumnBody(value) {
    const $column = createElement('TR');
    const { coin, quantity } = value;
    $column.innerHTML = `
    <td>${coin}원</td>
    <td id="vending-machine-coin-${coin}-quantity">${quantity}개</td>
    `;
    return $column;
  }
}
