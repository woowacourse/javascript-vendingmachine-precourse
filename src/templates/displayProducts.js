import { PRODUCT_MANAGEMENT } from '../constants/selector.js';

export default function displayProducts(product) {
  return `
    <tr>
      <th class="${PRODUCT_MANAGEMENT.CLASS.PRODUCT_MANAGE_NAME}">${product.name}</th>
      <th class="${PRODUCT_MANAGEMENT.CLASS.PRODUCT_MANAGE_PRICE}">${product.price}</th>
      <th class="${PRODUCT_MANAGEMENT.CLASS.PRODUCT_MANAGE_QUANTITY}">${product.quantity}</th>
    </tr>
  `;
}
