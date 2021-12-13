import { createElement } from '../../utils/element-tools.js';
import TableCreate from '../../core/Table.js';
import { DISPLAY } from '../../constants/display.js';

export default class CoinListTable extends TableCreate {
  _renderColumnBody(value) {
    const $column = createElement('TR');
    const { coin, quantity } = value;
    $column.innerHTML = `
    <td>${coin}${DISPLAY.UNIT_MONEY}</td>
    <td id="vending-machine-coin-${coin}-quantity">${quantity}${DISPLAY.UNIT_QUANTITY}</td>
    `;
    return $column;
  }
}
