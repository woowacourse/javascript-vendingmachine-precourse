import { createElement } from '../../utils/element-utils.js';
import TableCreate from '../../core/Table.js';

export default class CoinListTable extends TableCreate {
  columnHead() {
    const $column = createElement('TR');
    $column.innerHTML = `
    <th>동전</th>
    <th>개수</th>
    `;
    return $column;
  }

  columnBody(value) {
    const $column = createElement('TR');
    const { coin, quantity } = value;
    $column.innerHTML = `
    <td>${coin}원</td>
    <td id="vending-machine-coin-${coin}-quantity">${quantity}개</td>
    `;
    return $column;
  }
}
