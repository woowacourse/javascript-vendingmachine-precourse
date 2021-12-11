import { createElement } from '../../utils/element-utils.js';
import TableCreate from '../../core/Table.js';

export default class ProductTable extends TableCreate {
  columnHead() {
    const $column = createElement('TR');
    $column.innerHTML = `
    <th>상품명</th>
    <th>가격</th>
    <th>수량</th>
    `;
    return $column;
  }

  columnBody(value) {
    const $column = createElement('TR');
    const { name, price, quantity } = value;
    $column.innerHTML = `
    <td class="product-manage-name">${name}</td>
    <td class="product-manage-price">${price}</td>
    <td class="product-manage-quantity">${quantity}</td>
    `;
    return $column;
  }
}
