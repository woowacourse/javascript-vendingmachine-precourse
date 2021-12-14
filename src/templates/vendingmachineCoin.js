import { CHANGE_CHARGE } from '../constants/selector.js';

export default function vendingmachineCoin() {
  return `
    <br>
    <h2>자판기가 보유한 동전</h2>
    <table>
      <tr>
        <th>동전</th>
        <th>개수</th>
      </tr>
      <tr>
            <td>500원</td>
            <td id="${CHANGE_CHARGE.ID.COIN_500_QUANTITY}"></td>
      </tr>
      <tr>
            <td>100원</td>
            <td id="${CHANGE_CHARGE.ID.COIN_100_QUANTITY}"></td>
      </tr>
      <tr>
            <td>50원</td>
            <td id="${CHANGE_CHARGE.ID.COIN_50_QUANTITY}"></td>
      </tr>
      <tr>
            <td>10원</td>
            <td id="${CHANGE_CHARGE.ID.COIN_10_QUANTITY}"></td>
      </tr>
    </table>
    `;
}
