import { ID } from "../util/constant.js";

export const COIN_PAGE_TEMPLATE = `
  <h2>자판기 동전 추가하기</h2>
  <div>
    <input id=${ID.VENDING_MACHINE_CHARGE_INPUT} type="number" placeholder="자판기가 보유한 금액"/>
    <button id=${ID.VENDING_MACHINE_CHARGE_BUTTON}>충전하기</button>
  </div>
  <br/>
  <div id=${ID.VENDIN_MACHINE_AMOUNT_CONTAINER}>
    보유 금액:
    <span id=${ID.VENDING_MACHINE_CHARGE_AMOUNT}></span>
    원
  </div>
  <br/>
  <h2>자판기가 보유한 동전</h2>
  <table border="1">
    <thead>
      <tr>
        <th>동전</th>
        <th>개수</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>500원</td>
        <td id=${ID.VENDING_MACHINE_COIN_500_QUANTITY}></td>
      </tr>
      <tr>
        <td>100원</td>
        <td id=${ID.VENDING_MACHINE_COIN_100_QUANTITY}></td>
      </tr>
      <tr>
        <td>50원</td>
        <td id=${ID.VENDING_MACHINE_COIN_50_QUANTITY}></td>
      </tr>
      <tr>
        <td>10원</td>
        <td id=${ID.VENDING_MACHINE_COIN_10_QUANTITY}></td>
      </tr>
    </tbody>
  </table>
`;

export const CHANGES_TABLE_TEMPLATE = `
  <h3>잔돈</h3>
  <button id=${ID.COIN_RETURN_BUTTON}>반환하기</button>
  <table border="1">
    <thead>
      <tr>
        <th>동전</th>
        <th>개수</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>500원</td>
        <td id=${ID.COIN_500_QUANTITY}></td>
      </tr>
      <tr>
        <td>100원</td>
        <td id=${ID.COIN_100_QUANTITY}></td>
      </tr>
      <tr>
        <td>50원</td>
        <td id=${ID.COIN_50_QUANTITY}></td>
      </tr>
      <tr>
        <td>10원</td>
        <td id=${ID.COIN_10_QUANTITY}></td>
      </tr>
    </tbody>
  </table>
`;
