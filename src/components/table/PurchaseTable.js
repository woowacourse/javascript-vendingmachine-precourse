import { createElement } from '../../utils/element-tools.js';
import TableCreate from '../../core/Table.js';
import { DISPLAY } from '../../constants/display.js';

export default class PurchaseTable extends TableCreate {
  _renderColumnBody(value, index) {
    const $column = createElement('TR', '', {
      className: 'product-purchase-item',
    });
    const { name, price, quantity } = value;
    $column.dataset.primary = index;
    $column.innerHTML = `
    <td class="product-purchase-name" data-product-name="${name}">${name}</td>
    <td class="product-purchase-price" data-product-price="${price}">${price}</td>
    <td class="product-purchase-quantity" data-product-quantity="${quantity}">${quantity}</td>
    <td><button class="purchase-button">${DISPLAY.BUTTON_PURCHASE}</button></td>
    `;
    return $column;
  }
}
