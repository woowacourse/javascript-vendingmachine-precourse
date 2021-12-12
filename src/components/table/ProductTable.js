import { createElement } from '../../utils/element-tools.js';
import TableCreate from '../../core/Table.js';
import { EMPTY_STRING } from '../../constants/constants.js';

export default class ProductTable extends TableCreate {
  renderColumnBody({ name, price, quantity }) {
    const $column = createElement('TR', EMPTY_STRING, {
      className: 'product-manage-item',
    });

    $column.innerHTML = `
    <td class="product-manage-name">${name}</td>
    <td class="product-manage-price">${price}</td>
    <td class="product-manage-quantity">${quantity}</td>
    `;
    return $column;
  }
}