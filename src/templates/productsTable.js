import { PRODUCT_MANAGEMENT } from '../constants/selector.js';
import displayProducts from './displayProducts.js';

export default function productsTable(products) {
  return `
    <h2>상품 현황</h2>
    <table class="${PRODUCT_MANAGEMENT.CLASS.PRODUCT_MANAGE_ITEM}">
    <tr>
        <th class="${PRODUCT_MANAGEMENT.CLASS.PRODUCT_MANAGE_NAME}">상품명</th>
        <th class="${PRODUCT_MANAGEMENT.CLASS.PRODUCT_MANAGE_PRICE}">가격</th>
        <th class="${PRODUCT_MANAGEMENT.CLASS.PRODUCT_MANAGE_QUANTITY}">수량</th>
    </tr>
    ${products.map(product => displayProducts(product))}
    </table>
    <br>
    `;
}
