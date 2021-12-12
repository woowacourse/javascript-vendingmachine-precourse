import { createElement, combineElement } from '../../utils/element-tools.js';
import TableCreate from '../../core/Table.js';

export default class ReturnTable extends TableCreate {
  renderColumnBody(value) {
    const $column = createElement('TR');
    const { coin, quantity } = value;
    $column.innerHTML = `
    <td>${coin}원</td>
    <td id="coin-${coin}-quantity">${quantity}개</td>
    `;
    return $column;
  }

  get result() {
    const $button = createElement('BUTTON', '반환하기', {
      id: 'coin-return-button',
    });
    return combineElement([this.$title, $button, this.$table]);
  }
}
