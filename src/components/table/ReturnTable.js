import { createElement, combineElement } from '../../utils/element-tools.js';
import TableCreate from '../../core/Table.js';
import { DISPLAY } from '../../constants/display.js';

export default class ReturnTable extends TableCreate {
  _renderColumnBody(value) {
    const $column = createElement('TR');
    const { coin, quantity } = value;
    $column.innerHTML = `
    <td>${coin}${DISPLAY.UNIT_MONEY}</td>
    <td id="coin-${coin}-quantity">${quantity}${DISPLAY.UNIT_QUANTITY}</td>
    `;
    return $column;
  }

  get result() {
    const $button = createElement('BUTTON', DISPLAY.BUTTON_AMOUNT_RETURN, {
      id: 'coin-return-button',
    });
    return combineElement([this.$title, $button, this.$table]);
  }
}
