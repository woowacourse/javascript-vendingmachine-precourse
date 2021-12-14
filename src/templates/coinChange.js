import { PRODUCT_PURCHASE } from '../constants/selector.js';

function coinTable() {
  return `
    <table>
    <tr>
      <th>동전</th>
      <th>개수</th>
    </tr>
    <tr>
          <td>500원</td>
          <td id="${PRODUCT_PURCHASE.ID.COIN_500_QUANTITY}"></td>
    </tr>
    <tr>
          <td>100원</td>
          <td id="${PRODUCT_PURCHASE.ID.COIN_100_QUANTITY}"></td>
    </tr>
    <tr>
          <td>50원</td>
          <td id="${PRODUCT_PURCHASE.ID.COIN_50_QUANTITY}"></td>
    </tr>
    <tr>
          <td>10원</td>
          <td id="${PRODUCT_PURCHASE.ID.COIN_10_QUANTITY}"></td>
    </tr>
  </table>
    `;
}

export default function coinChange() {
  return `
    <br>
    <h2>잔돈</h2>
    <button id="${PRODUCT_PURCHASE.ID.RETURN_BUTTON}">
        반환하기
    </button>
    ${coinTable()}
      `;
}
