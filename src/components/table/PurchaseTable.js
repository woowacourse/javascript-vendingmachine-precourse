import { createElement } from '../../utils/element-tools.js';
import TableCreate from '../../core/Table.js';

export default class PurchaseTable extends TableCreate {
  _renderColumnBody(value, index) {
    const $column = createElement('TR');
    const { name, price, quantity } = value;
    $column.dataset.primary = index;
    $column.innerHTML = `
    <td class="product-purchase-name" data-product-name="${name}">${name}</td>
    <td class="product-purchase-price" data-product-price="${price}">${price}</td>
    <td class="product-purchase-quantity" data-product-quantity="${quantity}">${quantity}</td>
    <td><button class="purchase-button">구매하기</button></td>
    `;
    return $column;
  }
}
