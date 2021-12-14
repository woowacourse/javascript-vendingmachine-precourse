import { PRODUCT_PURCHASE } from '../constants/selector.js';

function displayPurchaseList(product) {
  return `
      <tr class="${PRODUCT_PURCHASE.CLASS.PURCHASE_ITEM}">
        <th ${PRODUCT_PURCHASE.DATA_SET.DATA_PRODUCT_NAME}="${product.name}" class="${PRODUCT_PURCHASE.CLASS.PURCHASE_NAME}">${product.name}</th>
        <th ${PRODUCT_PURCHASE.DATA_SET.DATA_PRODUCT_PRICE}="${product.price}" class="${PRODUCT_PURCHASE.CLASS.PURCHASE_PRICE}">${product.price}</th>
        <th ${PRODUCT_PURCHASE.DATA_SET.DATA_PRODUCT_QUANTITY}="${product.quantity}" class="${PRODUCT_PURCHASE.CLASS.PURCHASE_QUANTITY}">${product.quantity}</th>
        <th>
            <button class="${PRODUCT_PURCHASE.CLASS.PURCHASE_BUTTON}">구매하기</button>
        </th>
      </tr>
    `;
}

export default function purchaseTable(products) {
  return `
  <h2>구매할 수 있는 상품 현황</h2>
  <table>
    <tr>
          <th>상품명</th>
          <th>가격</th>
          <th>수량</th>
          <th>구매</th>
    </tr>
  ${products.map(product => displayPurchaseList(product)).join('')}
  </table>
  <br>
  `;
}
